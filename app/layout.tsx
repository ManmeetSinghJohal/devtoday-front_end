import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans as IBMPlexSans } from "next/font/google";
import "./globals.css";
import React from "react";

import NextAuthProvider from "@/components/NextAuthProvider";
import { Toaster } from "@/components/ui/toaster";
import { ThemeLoader } from "@/context/ThemeLoader";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const ibmPlexSans = IBMPlexSans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
});

export const metadata: Metadata = {
  title: "DevToday",
  description: "A Content Creation Platform for Developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${ibmPlexSans.className} bg-white-200 dark:bg-dark-900`}
      >
        <main className="custom-scrollbar mx-auto min-h-screen w-full flex-auto">
          <NextAuthProvider>
            <ThemeLoader />
            <Toaster />
            {children}
          </NextAuthProvider>
        </main>
      </body>
    </html>
  );
}
