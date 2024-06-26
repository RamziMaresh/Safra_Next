
import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/Footer"
//
import { Providers } from './providers';
import ScrollToTop from "./components/scrollToTop/Stt";
import Navbar from "./components/header/Navbar";

export const metadata: Metadata = {
  title: "Safra | Solutions For Better Living",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" >
      <body >
        <Providers>
          <Navbar transparent />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
