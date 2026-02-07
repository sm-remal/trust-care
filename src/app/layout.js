import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import NextAuthProvider from "@/NextAuthProvider/NextAuthProvider";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Trust Care | Baby Sitting & Elderly Care Platform",
    template: "%s | Trust Care",
  },
  description:
    "Trust Care helps you find trusted baby sitters and elderly caregivers easily and securely.",
  metadataBase: new URL("https://care-xyz.vercel.app"),
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <NextAuthProvider>
          <Toaster position="top-center" />
          <header>
            <Navbar></Navbar>
          </header>
          <main className="flex-1 mt-20">
            {children}
          </main>
          <footer>
            <Footer></Footer>
          </footer>
        </NextAuthProvider>
      </body>
    </html>
  );
}
