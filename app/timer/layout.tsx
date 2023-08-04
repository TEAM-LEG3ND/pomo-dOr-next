"use client";

import { ReactNode } from "react";
import Providers from "./providers";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return <Providers>{children}</Providers>;
}

export default Layout;
