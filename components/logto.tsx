import { useLogto } from "@logto/react";

export const SignIn = () => {
  const { signIn, isAuthenticated } = useLogto();

  if (isAuthenticated) {
    return <div>Signed in</div>;
  }

  return (
    <button type={"button"} onClick={() => signIn("http://localhost:5173/callback")}>
      Sign In
    </button>
  );
};
export const SignOut = () => {
  const { signOut } = useLogto();

  return (
    <button type={"button"} onClick={() => signOut("http://localhost:5173")}>
      Sign out
    </button>
  );
};
