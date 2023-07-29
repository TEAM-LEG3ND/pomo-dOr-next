"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
}

function NavigationBar({ children }: Props) {
  return (
    <div className="sticky bottom-0 flex w-full items-center justify-around border border-gray-100 bg-white px-4 py-2">
      {children}
    </div>
  );
}

interface ItemProps {
  route: string;
  icon: ReactNode;
  label?: string;
}

function Item({ route, icon, label }: ItemProps) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(route);

  return (
    <Link
      href={route}
      className={`rounded-xl ${isActive ? "bg-tertiary" : "opacity-50"}`}
    >
      <div className="flex flex-col justify-between gap-1 rounded-xl p-2 hover:bg-tertiary focus:bg-tertiary active:bg-tertiary">
        {icon}
        {label ? <p>{label}</p> : null}
      </div>
    </Link>
  );
}

export default Object.assign(NavigationBar, {
  Item,
});
