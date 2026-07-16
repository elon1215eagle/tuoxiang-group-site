import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "拓饗企業 | Top Xiang Group",
  description:
    "拓饗企業以產業整合與科技應用為核心，布局 AI 算力、區塊鏈技術、國際貿易、智慧餐飲、品牌通路與會員電商。",
  icons: {
    icon: "/tuoxiang-logo.png",
    shortcut: "/tuoxiang-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
