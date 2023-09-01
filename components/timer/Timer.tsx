"use client";

import useTimer from "@/hooks/useTimer";
import {
  Children,
  ReactElement,
  cloneElement,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";

interface Props {
  settingTime: {
    hour: number;
    minute: number;
    second: number;
  };
  onStart?: () => void;
  onPause?: () => void;
  onResume?: () => void;
  onTerminate?: () => void;
  onTimeout?: () => void;
  children: ReactElement | ReactElement[];
}

const TimerContext = createContext<Record<string, any>>({});
const TimerControlContext = createContext<Record<string, () => void>>({});

function Timer({ settingTime, onPause, onResume, onTimeout, children }: Props) {
  const settingTimeInMs =
    (settingTime.hour * 60 * 60 +
      settingTime.minute * 60 +
      settingTime.second) *
    1000;

  const [remainingTime, isRunning, timerControls] = useTimer(onTimeout, {
    initialTime: settingTimeInMs,
    updateInterval: 10,
  });

  useEffect(() => {
    timerControls.reset(settingTimeInMs);
    timerControls.start();

    return () => {
      timerControls.terminate();
    };
  }, [settingTime, timerControls, settingTimeInMs]);

  const handleTimerPause = useCallback(() => {
    if (isRunning === false) return;

    timerControls.pause();
    if (onPause) onPause();
  }, [timerControls, onPause, isRunning]);

  const handleTimerResume = useCallback(() => {
    if (isRunning === true) return;

    timerControls.resume();
    if (onResume) onResume();
  }, [timerControls, onResume, isRunning]);

  const timerHandlersMemo = useMemo(
    () => ({ handleTimerPause, handleTimerResume }),
    [handleTimerPause, handleTimerResume],
  );

  return (
    <TimerContext.Provider value={{ remainingTime, isRunning }}>
      <TimerControlContext.Provider value={timerHandlersMemo}>
        {children}
      </TimerControlContext.Provider>
    </TimerContext.Provider>
  );
}

interface ControlsProps {
  as: ReactElement;
}

export interface TimerControlsChildrenProps {
  isRunning?: boolean;
  onTimerPause?: () => void;
  onTimerResume?: () => void;
}

function TimerControl({ as }: ControlsProps) {
  const { handleTimerPause, handleTimerResume } =
    useContext(TimerControlContext);
  const { isRunning } = useContext(TimerContext);
  const control = Children.only(as);

  return (
    <>
      {cloneElement(control, {
        isRunning,
        onTimerPause: handleTimerPause,
        onTimerResume: handleTimerResume,
      })}
    </>
  );
}

interface ViewProps {
  as: ReactElement;
}

export interface TimerViewChildrenProps {
  remain?: number;
}

function TimerView({ as }: ViewProps) {
  const { remainingTime } = useContext(TimerContext);

  return (
    <>
      {Children.map(as, (child) =>
        cloneElement(child, {
          remain: as.props.remain ?? remainingTime,
        }),
      )}
    </>
  );
}

export default Object.assign(Timer, {
  Control: TimerControl,
  View: TimerView,
});
