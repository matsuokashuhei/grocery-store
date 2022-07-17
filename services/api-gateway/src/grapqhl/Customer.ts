import { credentials } from "grpc";
import {
  extendType,
  inputObjectType,
  nonNull,
  objectType,
  stringArg,
} from "nexus";
import { CustomerServiceClient } from "../proto/grocery_grpc_pb";
import { SignUpRequest, DeleteRequest } from "../proto/grocery_pb";

export const Customer = objectType({
  name: "Customer",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("uid");
    t.nonNull.string("name");
  },
});

export const CustomerInput = inputObjectType({
  name: "CustomerInput",
  definition(t) {
    t.nonNull.string("name");
    t.nonNull.string("email");
    t.nonNull.string("password");
  },
});

export const CustomerMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createCustomer", {
      type: "Customer",
      args: {
        name: nonNull(stringArg()),
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      async resolve(parent, args, context) {
        const { name, email, password } = args;
        const client = new CustomerServiceClient(
          "customer-service:50051",
          credentials.createInsecure()
        );
        const req = new SignUpRequest();
        req.setName(name);
        req.setEmail(email);
        req.setPassword(password);
        return new Promise((resolve, reject) => {
          client.signUp(req, (error, res) => {
            if (error) {
              console.error(error);
              reject(error);
            } else {
              console.log("res", res);
              resolve({ id: 1, uid: res.getUid(), name: name });
            }
          });
        });
      },
    });
    t.nonNull.field("deleteCustomer", {
      type: "Customer",
      args: {
        uid: nonNull(stringArg()),
      },
      async resolve(parent, args, context) {
        const { uid } = args;
        const client = new CustomerServiceClient(
          "customer-service:50051",
          credentials.createInsecure()
        );
        const req = new DeleteRequest();
        req.setUid(uid);
        return new Promise((resolve, reject) => {
          client.delete(req, (error, res) => {
            if (error) {
              reject(error);
            } else {
              resolve({ id: 1, uid: uid, name: "matsu" });
            }
          });
        });
      },
    });
  },
});
