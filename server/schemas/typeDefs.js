const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    _id: ID!
    bookId: String
    authors: [String]
<<<<<<< HEAD
    # authors: String
=======
>>>>>>> ee9fc217c369b7104e4ba4bf16a35de31e044d59
    description: String
    title: String
    image: String
    link: String
  }
  type User {
    _id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
<<<<<<< HEAD
  input saveBook {
=======
  input savedBook {
>>>>>>> ee9fc217c369b7104e4ba4bf16a35de31e044d59
    description: String
    title: String
    bookId: String
    image: String
    link: String
    authors: [String]
  }
  type Query {
<<<<<<< HEAD
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: saveBook!): User
=======
    getCurrentUser: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    savedBook(input: savedBook!): User
>>>>>>> ee9fc217c369b7104e4ba4bf16a35de31e044d59
    removeBook(bookId: ID!): User
  }
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
