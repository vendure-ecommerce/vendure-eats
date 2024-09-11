import {graphql} from "@/graphql";
import {client} from "@/actions/api";
import {VariablesOf} from "gql.tada";

export const RestaurantDetailFragment = graphql(`
  fragment RestaurantDetailFragment on Seller {
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
  query FindRestaurantById($id: ID!) {
    restaurantById(id: $id){
      seller {
         ...RestaurantDetailFragment
      }
      channelToken
    }
  }
`, [RestaurantDetailFragment])

export function getRestaurantById(variables: VariablesOf<typeof queryDoc>) {
  return client.request(queryDoc, variables)
}
