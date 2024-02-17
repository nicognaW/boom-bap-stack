import { useHandleSignInCallback } from "@logto/react";
import { useNavigate } from "@remix-run/react";
import { useEffect } from "react";

export default function Callback() {
  const navigate = useNavigate();
  const { isLoading, error, isAuthenticated } = useHandleSignInCallback(() => {
    navigate("/");
  });
  console.dir([isLoading, error, isAuthenticated]);
  useEffect(() => {
    navigate("/"); // Adjust the path as needed
  }, [navigate]);

  if (isLoading) {
    return <div>Redirecting...</div>;
  }

  return <div>Invalid callback, redirecting...</div>;
}
