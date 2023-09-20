import {
  HTMLAttributes,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import { TimerControlsChildrenProps } from "./Timer";
import { createPortal } from "react-dom";

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
  onTimerRestart,
}: Props) {
  const [timerControlsPanelPortal, _] = useContext(TimerControlsPanelContext);

  return timerControlsPanelPortal
    ? createPortal(
        <div className="flex justify-center gap-4 py-4">
          {isRunning ? (
            <button
              onClick={onTimerPause}
              className="h-14 w-24 rounded-3xl bg-gray-50 text-base text-red-500 shadow-[1px_2px_6px_0px_rgba(0,0,0,0.15)]"
            >
              STOP
            </button>
          ) : (
            <button
              onClick={onTimerResume}
              className="h-14 w-24 rounded-3xl bg-gray-50 text-base text-red-500 shadow-[inset_1px_2px_4px_0px_rgba(0,0,0,0.25)] "
            >
              START
            </button>
          )}
          <button
            onClick={onTimerRestart}
            className="h-14 w-24 rounded-3xl bg-gray-50 text-base text-red-500 shadow-[1px_2px_6px_0px_rgba(0,0,0,0.15)]"
          >
            RESET
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
