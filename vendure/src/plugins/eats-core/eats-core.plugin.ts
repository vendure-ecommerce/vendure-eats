import {PluginCommonModule, Type, VendurePlugin} from '@vendure/core';

import {EATS_CORE_PLUGIN_OPTIONS} from './constants';
import {PluginInitOptions} from './types';
import {shopApiExtension} from './api/api-extensions';
import {RestaurantService} from './services/restaurant.service';
import {RestaurantResolver} from './api/restaurant.resolver';

@VendurePlugin({
  imports: [PluginCommonModule],
  providers: [{
    provide: EATS_CORE_PLUGIN_OPTIONS,
    useFactory: () => EatsCorePlugin.options
  },
    RestaurantService,
    {
      provide: 'Test',
      useValue: 'test'
    },
    {
      provide: 'RestaurantService',
      useClass: RestaurantService
    }
  ],
  configuration: config => {
    return config;
  },
  compatibility: '^3.0.0',
  entities: [],
  shopApiExtensions: {
    schema: shopApiExtension,
    resolvers: [RestaurantResolver]
  },
})
export class EatsCorePlugin {
  static options: PluginInitOptions;

  static init(options: PluginInitOptions): Type<EatsCorePlugin> {
    this.options = options;
    return EatsCorePlugin;
  }
}
