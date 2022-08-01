import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";
import { join } from "path";
import { ApolloServer } from "apollo-server";
import { addResolversToSchema } from "@graphql-tools/schema";
import resolvers from "./graphql/resolvers";
import { applicationDefault, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const schema = loadSchemaSync(join(__dirname, "../schema.graphql"), {
  loaders: [new GraphQLFileLoader()],
});
const schemaWithResolvers = addResolversToSchema({ schema, resolvers });

const app = initializeApp({ credential: applicationDefault() });
// const auth = getAuth(app);

// const initializeApp({})
const server = new ApolloServer({
  schema: schemaWithResolvers,
  csrfPrevention: true, // see below for more about this
  cache: "bounded",
  cors: {
    origin: ["http://localhost:3000", "https://studio.apollographql.com"],
  },
  context: async ({ req }) => {
    // Note: This example uses the `req` argument to access headers,
    // but the arguments received by `context` vary by integration.
    // This means they vary for Express, Koa, Lambda, etc.
    //
    // To find out the correct arguments for a specific integration,
    // see https://www.apollographql.com/docs/apollo-server/api/apollo-server/#middleware-specific-context-fields

    // Get the user token from the headers.
    const idToken = req.headers.authorization || "";
    console.log("idToken", idToken);
    if (idToken.length === 0) return;

    // const auth = await getAuth(app)
    // const idToken = await (
    //   await getAuth(app)
    // ).verifyIdToken(idToken.replace("Bearer ", ""));
    const decodedToken = await getAuth(app).verifyIdToken(
      idToken.replace("Bearer ", "")
    );
    return { uid: decodedToken.uid };
    // getAuth(app)
    //   .verifyIdToken(idToken.replace("Bearer ", ""))
    //   .then(({ uid }) => {
    //     console.log("uid", uid);
    //     return { uid };
    //   });

    // Try to retrieve a user with the token
    // const user = getUser(token);

    // Add the user to the context
  },
});

server.listen().then((url) => console.log(`🚀  Server ready at ${url}`));
