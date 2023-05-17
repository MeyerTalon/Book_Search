const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: Int!
        savedBooks: [Book]!
    }

    type Book {
        bookId: something
        authors: [String]!
        description: String!
        title: String!
        image
        link: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    tyoe Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        // saveBook
        removeBook(_id: bookId!): User
    }
`;

module.exports = typeDefs;