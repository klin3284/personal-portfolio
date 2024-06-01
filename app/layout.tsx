import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/globals.css";
import Hero from "@components/Hero";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <div className="xl:flex xl:flex-row flex-col">
          <Hero />
          {children}
        </div>
      </body>
    </html>
  );
}