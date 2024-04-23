// this is the layout for the whole page, it has the navbar and footer components and the children component
import type { Metadata } from "next";
import { Nokora } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const nokora = Nokora({ weight: "400", subsets: ["khmer"] });

export const metadata: Metadata = {
  title: "Doulumáttur",
  description: "Doula services in Iceland",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nokora.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
