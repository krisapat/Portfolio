import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/compronents/Navber";
import { Noto_Sans_Thai } from 'next/font/google'
import Foooter from "@/compronents/Footer";

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai'],
  weight: ['400', '700'],
  variable: '--font-thai',
})

export const metadata: Metadata = {
  title: "Tech Company",
  description: "Tech Company,Tech"
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${notoSansThai.variable} bg-gray-900 scroll-smooth`}>
        <Navbar />
        {children}
        <Foooter />
      </body>
    </html>
  );
}
