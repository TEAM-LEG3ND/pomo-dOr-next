"use client";

import { ReactNode } from "react";
import Providers from "./providers";
import usePrefetchIconQuery from "@/queries/asset/usePrefetchIconQuery";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  usePrefetchIconQuery("clock");

  return <Providers>{children}</Providers>;
}

export default Layout;
