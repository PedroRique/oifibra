import type { Metadata } from "next";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";

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
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
