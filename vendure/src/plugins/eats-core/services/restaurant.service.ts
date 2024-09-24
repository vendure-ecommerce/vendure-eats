import { Injectable } from '@nestjs/common';
import { ID, RequestContext, Seller, TransactionalConnection } from '@vendure/core';
import { Not } from 'typeorm';
import { RestaurantListingOptions } from '../types';

@Injectable()
export class RestaurantService {
  constructor(private connection: TransactionalConnection) {}

  /**
   * Find all Sellers (Restaurants)
   * @param ctx
   * @param options
   */
  async findAll(ctx: RequestContext, options: RestaurantListingOptions) {
    const [result, total] = await this.connection.getRepository(ctx, Seller).findAndCount({
      where: {
        name: Not('__default__'),
        customFields: {
          isOpen: options.onlyOpen ?? null,
        },
      },
      take: options.take ?? 25,
      skip: options.skip ?? 0,
    });

    return {
      items: result,
      totalItems: total,
    };
  }

  /**
   * Find a Seller by ID and return the associated Channel token.
   * @param ctx
   * @param id
   */
  async findById(ctx: RequestContext, id: ID) {
    const seller = await this.connection.getEntityOrThrow(ctx, Seller, id, {
      relations: {
        channels: true,
      },
    });

    const channel = seller.channels.at(0);

    if (!channel) {
      throw new Error(`Channel for Seller with ID ${id} not found`);
    }

    return {
      seller,
      channelToken: channel.token,
    };
  }
}
