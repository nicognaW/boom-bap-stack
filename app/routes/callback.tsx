import { useHandleSignInCallback } from "@logto/react";
import { useNavigate } from "@remix-run/react";

export default function Callback() {
  const navigate = useNavigate();
  const { isLoading } = useHandleSignInCallback(() => {
    // Navigate to root path when finished
    navigate("/");
  });

  // When it's working in progress
  if (isLoading) {
    return <div>Redirecting...</div>;
  }
  navigate("/");
  return <div>Invalid callback, redirecting to the root.</div>;
}
