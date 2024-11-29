import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import { inter } from "@/assets/fonts";

export const metadata: Metadata = {
  title: "NLEC app",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", inter.className)}>
        <Navbar />
        <main className="mt-12">{children}</main>
      </body>
    </html>
  );
}
