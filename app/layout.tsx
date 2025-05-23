import { Montserrat } from "next/font/google";
import "@styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@components/layout/footer";
import Contact from "@components/sections/contact";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://kenny-lin.me"),
  title: "Kenny Lin | Software Engineer Portfolio",
  description:
    "Junior Software Engineer with a BS in Computer Engineering and Computer Science from Northeastern University. View my projects, skills, and experience.",
  keywords: [
    "software engineer",
    "web developer",
    "Kenny Lin",
    "portfolio",
    "Northeastern University",
    "computer science",
    "computer engineering",
    "backend developer",
    "fullstack developer",
  ],
  openGraph: {
    type: "website",
    url: "https://kenny-lin.me",
    title: "Kenny Lin | Software Engineer Portfolio",
    description:
      "Junior Software Engineer with a BS in Computer Engineering and Computer Science from Northeastern University. View my projects, skills, and experience.",
    siteName: "Kenny Lin SWE Portfolio",
  },
  authors: [{ name: "Kenny Lin" }],
  creator: "Kenny Lin",
  verification: {
    google: "vu3hGMVma5wy4OOVnQMkXiVhaXvbeEwwAWdRYo7pKrE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Analytics />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
