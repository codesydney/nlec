import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { inter } from "@/assets/fonts";
import Footer from "@/components/organisms/footer";
import { Toaster } from "@/components/atoms/ui/toaster";

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
      <body className={cn("bg-nlec-cream antialiased", inter.className)}>
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
