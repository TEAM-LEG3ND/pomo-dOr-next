import { ReactNode } from "react";
import NavigationBarItem from "./NavigationBarItem";

interface Props {
  children: ReactNode | ReactNode[];
}

function NavigationBar({ children }: Props) {
  return (
    <div className="flex h-full w-full items-center justify-around bg-white px-4 py-2">
      {children}
    </div>
  );
}

export default Object.assign(NavigationBar, {
  Item: NavigationBarItem,
});
