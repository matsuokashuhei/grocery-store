import { Resolvers } from "../types";
import * as customer from "./customer";

const resolvers: Resolvers = {
  Query: {
    customer: customer.customer,
  },
  Mutation: {
    createCustomer: customer.createCustomer,
    deleteCustomer: customer.deleteCustomer,
  },
};

export default resolvers;
