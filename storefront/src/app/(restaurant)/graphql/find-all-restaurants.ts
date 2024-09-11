import {graphql} from "@/graphql";
import {client} from "@/actions/api";
import {VariablesOf} from "gql.tada";

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
`)


const queryDoc = graphql(`
  query FindAllRestaurants($options: RestaurantListingOptions) {
    findAllRestaurants(options: $options){
      items {
        ...RestaurantListFragment
      }
    }
  }
`, [RestaurantListFragment])

export function findAllRestaurants(variables: VariablesOf<typeof queryDoc>) {
  return client.request(queryDoc, variables)
}
