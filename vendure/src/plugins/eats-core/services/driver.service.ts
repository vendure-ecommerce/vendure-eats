import { Inject, Injectable } from '@nestjs/common';
import { ID, Product, RequestContext, TransactionalConnection } from '@vendure/core';
import { EATS_CORE_PLUGIN_OPTIONS } from '../constants';
import { PluginInitOptions } from '../types';

@Injectable()
export class DriverService {
  constructor(
    private connection: TransactionalConnection,
    @Inject(EATS_CORE_PLUGIN_OPTIONS) private options: PluginInitOptions,
  ) {}

  async exampleMethod(ctx: RequestContext, id: ID) {
    // Add your method logic here
    const result = await this.connection.getRepository(ctx, Product).findOne({ where: { id } });
    return result;
  }

  async DriverListingQuery(ctx: RequestContext, id: ID): Promise<boolean> {
    return true;
  }

  async DriverCreateQuery(ctx: RequestContext, id: ID): Promise<boolean> {
    return true;
  }
}
