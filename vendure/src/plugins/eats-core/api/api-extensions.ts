import gql from 'graphql-tag';

export const shopApiExtension = gql`
  type RestaurantListing {
    items: [Seller!]!
    totalItems: Int!
  }

  input RestaurantListingOptions {
    skip: Int
    take: Int
    onlyOpen: Boolean
  }

  type SellerResponse {
    seller: Seller!
    channelToken: String!
  }

  extend type Query {
    findAllRestaurants(options: RestaurantListingOptions): RestaurantListing!
    restaurantById(id: ID!): SellerResponse
  }
`;
