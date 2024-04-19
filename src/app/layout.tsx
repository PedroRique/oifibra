import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import Head from "next/head";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oi Fibra",
  description: "Oi Fibra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <GoogleTagManager gtmId="GTM-T7B2JN4H" />
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
