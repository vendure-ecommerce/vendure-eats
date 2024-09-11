import { GraphQLClient } from 'graphql-request';

const VENDURE_SHOP_API = process.env.VENDURE_SHOP_API;

if (!VENDURE_SHOP_API) {
  throw new Error('VENDURE_SHOP_API env variable is not set');
}

export const client = new GraphQLClient(VENDURE_SHOP_API, {
  credentials: 'include',
});
