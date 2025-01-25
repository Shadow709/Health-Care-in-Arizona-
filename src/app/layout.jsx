/* eslint-disable new-cap */

import "./globals.css";

import { AuthProvider } from "@/context/AuthContext";
import Link from "next/link";
import { LogOut } from "lucide-react";

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <Link href={"/"}></Link>
      <LogOut />
    </header>
  );

  return (
    <html lang="en">
      <AuthProvider>
        <body className="w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800  ">
          {header}
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
