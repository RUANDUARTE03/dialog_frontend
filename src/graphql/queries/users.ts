import { gql } from "@apollo/client";

const gelAllUsers = gql`
  query Users($search: String) {
    users(search: $search) {
      _id
      name
      email
      age
      company
      eyeColor
      picture
    }
  }
`;

const getUserById = gql`
  query User($userId: ID!) {
    user(id: $userId) {
      _id
      name
      email
      age
      picture
      friends {
        _id
        name
        email
        company
        eyeColor
        age
        picture
      }
    }
  }
`;

export { gelAllUsers, getUserById };
