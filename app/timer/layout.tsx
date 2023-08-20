"use client";

import { ReactNode } from "react";
import Providers from "./providers";
import { createIconQuery } from "@/components/common/icon/ClientIcon";
import usePrefetchQuery from "@/hooks/usePrefetchQuery";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  usePrefetchQuery(createIconQuery("clock"));

  return <Providers>{children}</Providers>;
}

export default Layout;
