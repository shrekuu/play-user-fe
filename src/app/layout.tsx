import "@/app/globals.css";
import localFont from "next/font/local";
import React from "react";

export const metadata = {
  title: "Play",
  description: "Bond's Playground",
};

// local font
const interFont = localFont({ src: "../../public/fonts/inter/inter-optimized.woff2" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={interFont.className} lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>{children}</body>
    </html>
  );
}
