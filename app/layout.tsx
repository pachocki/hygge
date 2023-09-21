import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hygge",
  description: "Hygge",
};

export default async function  RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.className}  `}>
        <div>
        {children}
        </div>
      </body>
    </html>
  );
}
