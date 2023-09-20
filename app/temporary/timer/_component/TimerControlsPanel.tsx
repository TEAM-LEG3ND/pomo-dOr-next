import {
  HTMLAttributes,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import { TimerControlsChildrenProps } from "./Timer";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { END_TEMPORARY_PATH } from "@/constants/routes";

const TimerControlsPanelContext = createContext<
  ReturnType<typeof useState<HTMLElement | null>>
>([null, () => {}]);

export function TimerControlsPanelProvider({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  const timerControlState = useState<HTMLElement | null | undefined>(null);
  return (
    <TimerControlsPanelContext.Provider value={timerControlState}>
      {children}
    </TimerControlsPanelContext.Provider>
  );
}

interface Props extends TimerControlsChildrenProps {}

function TimerControlsPanel({
  isRunning,
  onTimerPause,
  onTimerResume,
  onTimerTerminate,
}: Props) {
  const router = useRouter();
  const [timerControlsPanelPortal, _] = useContext(TimerControlsPanelContext);

  const handleTimerTerminate = () => {
    if (onTimerTerminate) onTimerTerminate();
    router.push(END_TEMPORARY_PATH);
  };

  return timerControlsPanelPortal
    ? createPortal(
        <div className="flex justify-center gap-4 py-4">
          {isRunning ? (
            <button
              onClick={onTimerPause}
              className="h-14 w-24 rounded-3xl bg-gray-50 text-base text-red-500 shadow-[1px_2px_6px_0px_rgba(0,0,0,0.15)]"
            >
              정지
            </button>
          ) : (
            <button
              onClick={onTimerResume}
              className="h-14 w-24 rounded-3xl bg-gray-50 text-base text-red-500 shadow-[inset_1px_2px_4px_0px_rgba(0,0,0,0.25)] "
            >
              시작
            </button>
          )}
          <button
            onClick={handleTimerTerminate}
            className="h-14 w-24 rounded-3xl bg-gray-50 text-base text-red-500 shadow-[1px_2px_6px_0px_rgba(0,0,0,0.15)]"
          >
            종료
          </button>
        </div>,
        timerControlsPanelPortal,
      )
    : null;
}

export function TimerControlsPanelPortal({
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const [_, setTimerControlsPanelPortal] = useContext(
    TimerControlsPanelContext,
  );

  return <div ref={setTimerControlsPanelPortal} {...props} />;
}

export default TimerControlsPanel;
