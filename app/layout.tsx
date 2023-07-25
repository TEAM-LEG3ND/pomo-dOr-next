import "./globals.css";
import type { Metadata } from "next";
import { notoSansKr } from "@/styles/fonts";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Pomo d'Or",
  description: "Run and share timer templates with friends",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${notoSansKr.variable}`}>
      <body className="font-notokr">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
