import { LogtoConfig, LogtoProvider } from "@logto/react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import "./tailwind.css";

const config: LogtoConfig = {
  endpoint: "https://1ried1.logto.app/",
  appId: "xwqroef0gyjrcwuh6g0ow",
};
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
      <body suppressHydrationWarning>
        <LogtoProvider config={config}>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
        </LogtoProvider>
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
        <Scripts />
      </body>
    </html>
  );
}
