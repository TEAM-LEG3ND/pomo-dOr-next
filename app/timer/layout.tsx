"use client";

import { ReactNode, useEffect } from "react";
import Providers from "./providers";
import { useQueryClient } from "@tanstack/react-query";
import { clockBackgroundImageQuery } from "@/components/timer/timeTimer/TimeTimerBackground";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  const queryClient = useQueryClient();
  useEffect(() => {
    const prefetchClockBackground = async () => {
      await queryClient.prefetchQuery(clockBackgroundImageQuery);
    };
    prefetchClockBackground();
  }, []);

  return <Providers>{children}</Providers>;
}

export default Layout;
