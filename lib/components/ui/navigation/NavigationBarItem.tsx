"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface ItemProps {
  route: string;
  icon: ReactNode;
  label?: string;
}

function NavigationBarItem({ route, icon, label }: ItemProps) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(route);

  return (
    <Link
      href={route}
      className={`rounded-xl ${isActive ? "bg-neutral-100" : "opacity-50"}`}
    >
      <div className="flex flex-col items-center gap-0 rounded-xl p-2 ">
        {icon}
        {label ? <p>{label}</p> : null}
      </div>
    </Link>
  );
}

export default NavigationBarItem;
