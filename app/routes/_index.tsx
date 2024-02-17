import { useLogto } from "@logto/react";
import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { SignIn, SignOut } from "../../components/logto";

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
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix (SPA Mode)</h1>
      <div>
        {userId && <p>Logged in as {userId}</p>}
        {isAuthenticated
          ? <SignOut />
          : <button type={"button"} onClick={() => signIn("http://localhost:5173/callback")}>Sign In</button>}
      </div>
      <ul>
        <li>
          <SignIn />
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/future/spa-mode"
            rel="noreferrer"
          >
            SPA Mode Guide
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
