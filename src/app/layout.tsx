import type { Metadata } from "next";
import { Bebas_Neue, PT_Sans } from "next/font/google";
import "./globals.css";

const ptSans = PT_Sans({
  variable: "--font-pt-sans",
  subsets: ["latin"],
  weight: ["400", "700"], // можно выбрать наборы
});

const BebasNeue = Bebas_Neue({
  variable: "--font-bebas-sans",
  subsets: ["latin"],
  weight: ["400"], // можно выбрать наборы
});

export const metadata: Metadata = {
  title: "Only",
  description: "Time periods slider",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ptSans.variable} ${BebasNeue.variable}`}>
        {children}
      </body>
    </html>
  );
}
