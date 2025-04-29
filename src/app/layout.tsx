import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientBody from "./ClientBody";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nitro Consulting & Advisory",
  description:
    "Nitro Consulting & Advisory is a boutique consulting and advisory firm specializing in assisting early-stage enterprises in validating their valuation, creating compelling pitch decks, and providing strategic business consulting.",
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
          <main>{children}</main>
          <Footer />
        </div>
      </ClientBody>
    </html>
  );
}
