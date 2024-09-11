import {GraphQLClient} from 'graphql-request'

const VENDURE_SHOP_API = process.env.VENDURE_SHOP_API ?? 'http://localhost:3500/shop-api'

export const client = new GraphQLClient(VENDURE_SHOP_API, {
  credentials: 'include',
})
