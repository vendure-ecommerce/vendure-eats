import { client } from '@/actions/api';
import { graphql } from '@/graphql';
import { VariablesOf } from 'gql.tada';

export const VariantFragment = graphql(`
  fragment VariantFragment on ProductVariant {
    id
    name
    sku
    priceWithTax
  }
`);

export const ProductFragment = graphql(
  `
    fragment ProductFragment on Product {
      id
      name
      variants {
        ...VariantFragment
      }
    }
  `,
  [VariantFragment],
);

const queryDoc = graphql(
  `
    query FindProductsOfRestaurant($options: ProductListOptions) {
      products(options: $options) {
        items {
          ...ProductFragment
        }
      }
    }
  `,
  [ProductFragment],
);

export function findProductsOfRestaurant(
  channelToken: string,
  variables: VariablesOf<typeof queryDoc>,
) {
  return client.request(queryDoc, variables, {
    'vendure-token': channelToken,
  });
}
