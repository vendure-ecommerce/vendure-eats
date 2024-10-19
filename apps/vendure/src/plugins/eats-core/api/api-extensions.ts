import gql from 'graphql-tag';

const restaurantExtension = gql`
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
`;

export const shopApiExtension = gql`
  ${restaurantExtension}
  extend type Query {
    findAllRestaurants(options: RestaurantListingOptions): RestaurantListing!
    restaurantById(id: ID!): SellerResponse
  }
`;
