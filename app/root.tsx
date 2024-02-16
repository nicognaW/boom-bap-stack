import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

// noinspection JSUnusedGlobalSymbols
export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <title>DEV</title>
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// noinspection JSUnusedGlobalSymbols
export function HydrateFallback() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <title>Loading</title>
      </head>
      <body>
        <p>Loading...</p>
        <Scripts />
      </body>
    </html>
  );
}
