import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Listing {
    id: ID!
    title: String!
    image: String!
    address: String!
    price: String!
    numOfGuests: String!
    numOfBeds: String!
    numOfBaths: String!
    rating: String!
  }

  type Query {
    listings: [Listing!]!
  }

  type Mutation {
    deleteListing(id: ID!): Listing!
  }
`;