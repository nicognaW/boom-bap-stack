import { SignIn, SignOut } from "@/components/logto";
import { useLogto } from "@logto/react";
import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";

// noinspection JSUnusedGlobalSymbols
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export default function Index() {
  const { isAuthenticated, getIdTokenClaims, signIn, signOut } = useLogto();
  const [userId, setUserId] = useState("");

  useEffect(() => {
    (async () => {
      if (isAuthenticated) {
        const claims = await getIdTokenClaims();
        if (claims) setUserId(claims.sub);
      }
    })();
  }, [getIdTokenClaims, isAuthenticated]);

  return (
    <div>
      <h1 className="text-5xl font-bold border-4 text-red-600 inline-block underline">
        Hello world!
      </h1>
      {userId && <p>Logged in as {userId}</p>}
      {isAuthenticated
        ? <SignOut />
        : <SignIn />}
    </div>
  );
}
