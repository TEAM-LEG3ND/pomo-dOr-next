import "./globals.css";
import type { Metadata } from "next";
import { notoSansKr } from "@/styles/fonts";
import Providers from "./providers";
import GlobalHeader from "@/components/layout/GlobalHeader";
import GlobalNavigationBar from "@/components/layout/GlobalNavigationBar";

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
      <body className="h-full min-h-screen font-notokr">
        <Providers>
          <GlobalHeader />
          <main className="mb-14 px-4">{children}</main>
          <GlobalNavigationBar />
        </Providers>
      </body>
    </html>
  );
}
