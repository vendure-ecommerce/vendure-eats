import { client } from '@/actions/api';
import { graphql } from '@/graphql';
import { VariablesOf } from 'gql.tada';

export const RestaurantListFragment = graphql(`
  fragment RestaurantListFragment on Seller {
    id
    name
    customFields {
      address
      phoneNumber
      logo {
        source
      }
    }
  }
`);

const queryDoc = graphql(
  `
    query FindAllRestaurants($options: RestaurantListingOptions) {
      findAllRestaurants(options: $options) {
        items {
          ...RestaurantListFragment
        }
        totalItems
      }
    }
  `,
  [RestaurantListFragment],
);

export function findAllRestaurants(variables: VariablesOf<typeof queryDoc>) {
  return client.request(queryDoc, variables);
}
