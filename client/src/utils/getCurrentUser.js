import gql from "graphql-tag";

export const getCurrentUser = gql`
  {
    currentUser {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
