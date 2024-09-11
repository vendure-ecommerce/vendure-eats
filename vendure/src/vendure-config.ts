import {
  Asset,
  defaultOrderProcess,
  DefaultSearchPlugin,
  dummyPaymentHandler,
  User,
  VendureConfig,
} from '@vendure/core';
import { eatsOrderProcess } from './plugins/eats-core/config/eats-order-process';
import { EatsCorePlugin } from './plugins/eats-core/eats-core.plugin';

export const uiExtensionsConfig = [];

const PORT = +(process.env.PORT as string);
const IS_DEV = process.env.NODE_ENV === 'development';

export const config: VendureConfig = {
  apiOptions: {
    port: PORT,
    adminApiPath: 'admin-api',
    shopApiPath: 'shop-api',
    adminApiPlayground: IS_DEV,
    shopApiPlayground: IS_DEV,
  },
  orderOptions: {
    process: [defaultOrderProcess, eatsOrderProcess],
  },
  authOptions: {
    requireVerification: true,
    tokenMethod: ['bearer', 'cookie'],
    cookieOptions: {
      secret: process.env.COOKIE_SECRET,
    },
    superadminCredentials: {
      identifier: process.env.SUPERADMIN_IDENTIFIER,
      password: process.env.SUPERADMIN_PASSWORD,
    },
  },
  dbConnectionOptions: {
    type: 'postgres',
    synchronize: true,
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  customFields: {
    // Seller = Restaurant
    Seller: [
      {
        name: 'isOpen',
        type: 'boolean',
        defaultValue: false,
      },
      {
        name: 'address',
        type: 'string',
      },
      {
        name: 'phoneNumber',
        type: 'string',
      },
      {
        name: 'logo',
        type: 'relation',
        entity: Asset,
      },
      {
        name: 'user',
        type: 'relation',
        entity: User,
      },
    ],
  },
  paymentOptions: {
    paymentMethodHandlers: [dummyPaymentHandler],
  },
  plugins: [DefaultSearchPlugin.init({}), EatsCorePlugin.init({})],
};
