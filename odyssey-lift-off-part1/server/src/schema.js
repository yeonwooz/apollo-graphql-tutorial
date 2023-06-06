// const gql = require("graphql-tag");
import gql from "graphql-tag";

const typeDefs = gql`
  type Qeury {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  "Authjor of a complete Track"
  type Author {

  }
`;

module.exports = typeDefs;
