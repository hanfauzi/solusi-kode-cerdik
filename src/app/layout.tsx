import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Solusi Kode Cerdik",
  description:
    "Solusi Terintegrasi Biller Agregator PPOB untuk Bisnis Digital Anda",
  icons: {
    icon: "/assets/logo/logo.svg",
    shortcut: "/assets/logo/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} antialiased`}>
        <Navbar />
        {children}
        <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      </body>
    </html>
  );
}
