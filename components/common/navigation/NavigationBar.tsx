import { ReactNode } from "react";
import NavigationBarItem from "./NavigationBarItem";

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

export default Object.assign(NavigationBar, {
  Item: NavigationBarItem,
});
