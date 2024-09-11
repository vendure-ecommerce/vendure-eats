import {Args, Query, Resolver} from '@nestjs/graphql';
import {ID} from '@vendure/common/lib/shared-types';
import {Ctx, RequestContext} from '@vendure/core';
import {RestaurantService} from '../services/restaurant.service';
import {RestaurantListingOptions} from "../types";
import {Inject} from "@nestjs/common";

@Resolver()
export class RestaurantResolver {
  constructor(@Inject('RestaurantService') private restaurantService: RestaurantService) {
  }

  @Query()
  async findAllRestaurants(@Ctx() ctx: RequestContext, @Args() options: RestaurantListingOptions) {
    return this.restaurantService.findAll(ctx, options);
  }

  @Query()
  async restaurantById(@Ctx() ctx: RequestContext, @Args() args: { id: ID }) {
    return this.restaurantService.findById(ctx, args.id);
  }
}
