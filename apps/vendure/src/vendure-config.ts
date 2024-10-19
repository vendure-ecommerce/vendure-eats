import {
  Asset,
  Collection,
  defaultOrderProcess,
  DefaultSearchPlugin,
  dummyPaymentHandler,
  LanguageCode,
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
    synchronize: process.env.DB_SYNC === 'true',
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
        label: [{ languageCode: LanguageCode.en, value: 'Is Open' }],
      },
      {
        name: 'address',
        type: 'string',
        label: [{ languageCode: LanguageCode.en, value: 'Address' }],
        ui: {
          tab: 'Location',
        },
      },
      {
        name: 'phoneNumber',
        type: 'string',
        label: [{ languageCode: LanguageCode.en, value: 'Phone Number' }],
      },
      {
        name: 'logo',
        type: 'relation',
        entity: Asset,
        label: [{ languageCode: LanguageCode.en, value: 'Logo' }],
      },
      {
        name: 'user',
        type: 'relation',
        entity: User,
        label: [{ languageCode: LanguageCode.en, value: 'User' }],
      },
      {
        name: 'averageShippingTime',
        type: 'string',
        label: [{ languageCode: LanguageCode.en, value: 'Average Shipping Time' }],
      },
      {
        name: 'category',
        type: 'relation',
        entity: Collection,
        label: [{ languageCode: LanguageCode.en, value: 'Category' }],
      },
      {
        name: 'locationLat',
        type: 'string',
        label: [{ languageCode: LanguageCode.en, value: 'Location Latitude' }],
        ui: {
          tab: 'Location',
        },
      },
      {
        name: 'locationLng',
        type: 'string',
        label: [{ languageCode: LanguageCode.en, value: 'Location Longitude' }],
        ui: {
          tab: 'Location',
        },
      },
    ],
  },
  paymentOptions: {
    paymentMethodHandlers: [dummyPaymentHandler],
  },
  plugins: [DefaultSearchPlugin.init({}), EatsCorePlugin.init({})],
};
