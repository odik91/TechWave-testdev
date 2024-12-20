import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechWave",
  description: "TechWave company",
  keywords: "TechWave company, TechWave hi tech company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-slate-100`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
