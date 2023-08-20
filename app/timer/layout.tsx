"use client";

import { ReactNode, useEffect } from "react";
import Providers from "./providers";
import { useQueryClient } from "@tanstack/react-query";
import { createIconQuery } from "@/components/common/icon/ClientIcon";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  const queryClient = useQueryClient();
  useEffect(() => {
    const prefetchClockBackground = async () => {
      await queryClient.prefetchQuery(createIconQuery("clock"));
    };
    prefetchClockBackground();
  }, []);

  return <Providers>{children}</Providers>;
}

export default Layout;
