import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <nav className="p-5 bg-white shadow-md mb-8">
          <h1 className="text-2xl font-bold text-center text-blue-600">
            GitHub Finder Pro 🔍
          </h1>
        </nav>
        {/* ልክ እንደ React Props children እዚህ ጋር ገጾቹ ይቀያየራሉ */}
        <main className="container mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}
