"use client";
import "./globals.css";

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";
import { HeaderMegaMenu } from "./ui/HeaderMegaMenu";
import { FooterLinks } from "./FooterLinks";
import { color } from "framer-motion";
import classes from "./layout.module.css";
import MegaMenu from "./component/MegaMenu/MegaMenu";

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",

  defaultRadius: "xs",

  fontFamilyMonospace: "Monaco, Courier, monospace",
  headings: { fontFamily: "Greycliff CF, sans-serif" },
  fontSizes: {
    xxs: "0.125rem",
    xxl: "2rem",
  },

  colors: {
    // override dark colors to change them for all components

    dark: [
      "#d5d7e0",
      "#acaebf",
      "#8c8fa3",
      "#666980",
      "#4d4f66",
      "#34354a",
      "#2b2c3d",
      "#1d1e30",
      "#0c0d21",
      "#01010a",
    ],
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <ColorSchemeScript defaultColorScheme="dark" />
        <MantineProvider defaultColorScheme="dark" theme={theme}>
          <div className={classes.masking}>
          <MegaMenu />
          </div>

          {children}
          <FooterLinks />
        </MantineProvider>
      </body>
    </html>
  );
}
