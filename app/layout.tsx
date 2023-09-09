import "./_styles/globals.css";
import type { Metadata } from "next";
import { notoSansKr } from "@/app/_styles/fonts";
import Providers from "./providers";
import GlobalHeader from "./_component/GlobalHeader";
import GlobalNavigationBar from "./_component/GlobalNavigationBar";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
          <ReactQueryDevtools initialIsOpen={true} />
          <GlobalNavigationBar />
        </Providers>
      </body>
    </html>
  );
}
