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
  title: "拓饗國際 | Tuoxiang International",
  description:
    "拓饗國際整合買吧直銷商城、吃吧餐飲連鎖與共享後勤資源，建立可管理、可複製、可擴張的事業平台。",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
