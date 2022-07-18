import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { initializeApp } from "firebase/app";
import type { AppProps } from "next/app";
import "../styles/globals.css";

// initializeApp({
//   apiKey: process.env.NEXT_PUBLIC_NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
// });

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
