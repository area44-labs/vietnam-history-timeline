import {
  HeadContent,
  Outlet,
  ScrollRestoration,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import * as React from "react";
import "@fontsource-variable/geist";
import "@fontsource-variable/geist-mono";

import "@/index.css";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "Vietnam History Timeline" },
      {
        name: "description",
        content:
          "A chronological journey through modern Vietnam - from independence declaration to a dynamic thriving nation.",
      },
      { property: "og:title", content: "Vietnam History Timeline" },
      {
        property: "og:description",
        content:
          "A chronological journey through modern Vietnam - from independence declaration to a dynamic thriving nation.",
      },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Vietnam History Timeline" },
      {
        name: "twitter:description",
        content:
          "A chronological journey through modern Vietnam - from independence declaration to a dynamic thriving nation.",
      },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [{ rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
