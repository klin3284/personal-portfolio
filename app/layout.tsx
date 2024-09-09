import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@components/layout/footer";
import Contact from "@components/sections/contact";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kenny's Portfolio",
  description: "Kenny's personal portfolio website created using NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={montserrat.className}>
        <Analytics />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
