import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

const monaSans = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-mona-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "shandigital.dev",
  description:
    "Chef by day, programmer by night. Web development, Japan localization, and content creation from Kanagawa, Japan.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={monaSans.variable}>
      <body className="font-sans antialiased">
        <Sidebar />
        <main className="md:ml-50">{children}</main>
      </body>
    </html>
  );
}