import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/compronents/Navber";
import { IBM_Plex_Sans } from 'next/font/google'
import Foooter from "@/compronents/Footer";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'], // ถ้าใช้ภาษาไทย อาจต้องใช้ฟอนต์อื่น (IBM Plex Sans ไม่มี subset thai)
  weight: ['400', '700','600'], // เลือกน้ำหนักที่ต้องการ
  display: 'swap', // แนะนำเพื่อ UX ที่ดี
})


export const metadata: Metadata = {
  title: "Tech Company",
  description: "Tech Company,Tech"
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 scroll-smooth {ibmPlexSans.className}">
        <Navbar />
        {children}
        <Foooter />
      </body>
    </html>
  );
}
