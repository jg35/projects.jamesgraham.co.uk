import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const RobotoMono = Roboto_Mono({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "James Graham - Projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={RobotoMono.className}>
      <body className="font-mono antialiased text-black min-h-screen flex flex-col relative">
        <Header />
        <main className="mb-12 w-full max-w-screen-2xl mx-auto p-4">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
