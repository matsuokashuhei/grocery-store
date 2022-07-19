import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User,
  signOut,
} from "firebase/auth";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import {
  CreateCustomerInput,
  useCreateCustomerMutation,
} from "./api/generated";

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
};
console.log("config", config);

const Home: NextPage = () => {
  const app = initializeApp(config);
  const auth = getAuth(app);
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<String>();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, [auth]);

  useEffect(() => {
    if (user) {
      user.getIdToken().then((token) => setToken(token));
    }
  }, [user]);

  const [createCustomer, { data, loading, error }] =
    useCreateCustomerMutation();

  const [name, setName] = useState("matsuokashuhei");
  const [email, setEmail] = useState("matsuokashuheiii@gmail.com");
  const [password, setPassword] = useState("test1234");
  const renderSignUpForm = () => {
    if (user !== null) return <></>;
    return (
      <form>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          id="email"
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="password"
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          disabled={
            name.length === 0 || email.length === 0 || password.length === 0
          }
          onClick={async (e) => {
            e.preventDefault();
            const input: CreateCustomerInput = {
              name,
              email,
              password,
            };
            await createCustomer({ variables: { input } });
          }}
        >
          Sign Up
        </button>
      </form>
    );
  };

  const renderSignInForm = () => {
    if (user !== null) return <></>;

    return (
      <form>
        <input
          id="email"
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="password"
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          disabled={email.length === 0 || password.length === 0}
          onClick={async (e) => {
            e.preventDefault();
            signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                console.log("userCredential", userCredential);
              })
              .catch((error) => {
                console.error(error);
              });
          }}
        >
          Sign In
        </button>
      </form>
    );
  };

  const renderSignOutForm = () => {
    if (user === null) return <></>;
    return (
      <form>
        <button
          type="submit"
          onClick={() => {
            signOut(auth);
          }}
        >
          Sign Out
        </button>
      </form>
    );
  };

  const renderUser = () => {
    if (user === null) return <></>;
    return <>{JSON.stringify(user)}</>;
  };

  const renderToken = () => {
    if (token === null) return <></>;
    return <>{token}</>;
  };

  return (
    <>
      {renderSignUpForm()}
      {renderSignInForm()}
      {renderToken()}
      {renderSignOutForm()}
    </>
  );
};

export default Home;
