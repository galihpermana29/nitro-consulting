import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientBody from "./ClientBody";

const inter = Inter({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Agung Ventures | Indonesia Venture Capital",
  description: "Agung Ventures is a venture capital company based in Indonesia, focusing on supporting sustainable businesses and creating synergies across various industries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <ClientBody>
        <div className="font-inter">
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </ClientBody>
    </html>
  );
}
