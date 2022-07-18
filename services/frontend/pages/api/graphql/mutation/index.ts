import { gql } from "@apollo/client";

gql`
  mutation CreateCustomer($input: CreateCustomerInput!) {
    createCustomer(input: $input) {
      uid
      name
    }
  }
`;

gql`
  mutation DeleteCustomer($input: DeleteCustomerInput!) {
    deleteCustomer(input: $input) {
      uid
      name
    }
  }
`;
