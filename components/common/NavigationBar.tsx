import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
}

function NavigationBar({ children }: Props) {
  return (
    <div className="sticky bottom-0 flex w-full items-center justify-around px-4 py-2 ">
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
  return (
    <Link href={route}>
      <div className="flex flex-col gap-1 p-2">
        {icon}
        {label ? <p>{label}</p> : null}
      </div>
    </Link>
  );
}

export default Object.assign(NavigationBar, {
  Item,
});
