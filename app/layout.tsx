import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "購入者限定・あおい執筆室",
  description:
    "あおいが実際の原稿制作で使っている手法、実例、配布ファイルをまとめた購入者限定ページです。",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
