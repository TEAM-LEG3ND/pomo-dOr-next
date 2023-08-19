import { ReactNode, memo } from "react";
import Icon from "../../common/icon/Icon";

interface Props {
  children: ReactNode;
}

function TimeTimerBackground({ children }: Props) {
  return (
    <div className="relative h-full w-full">
      <Icon name="clock" className="absolute left-0 top-0 h-full w-full" />
      {children}
    </div>
  );
}

export default memo(TimeTimerBackground);
