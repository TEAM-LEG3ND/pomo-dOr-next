import { ReactNode, memo } from "react";
import ClientIcon from "@/app/_component/_asset/ClientIcon";

interface Props {
  children: ReactNode;
}

function TimeTimerBackground({ children }: Props) {
  return (
    <div className="relative h-full w-full">
      <ClientIcon
        name="clock"
        className="absolute left-0 top-0 h-full w-full"
      />
      {children}
    </div>
  );
}

export default memo(TimeTimerBackground);
