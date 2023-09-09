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
  onRestart?: () => void;
  onTerminate?: () => void;
  onTimeout?: () => void;
  children: ReactElement | ReactElement[];
}

const TimerContext = createContext<Record<string, any>>({});
const TimerControlContext = createContext<Record<string, any>>({});

function Timer({
  settingTime,
  onStart,
  onPause,
  onResume,
  onRestart,
  onTerminate,
  onTimeout,
  children,
}: Props) {
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

  const handleTimerStart = useCallback(() => {
    if (isRunning === true) return;

    timerControls.start();
    if (onStart) onStart();
  }, [isRunning, timerControls, onStart]);

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

  const handleTimerRestart = useCallback(() => {
    timerControls.reset(settingTimeInMs);
    timerControls.start();

    if (onRestart) onRestart();
  }, [settingTimeInMs, timerControls, onRestart]);

  const handleTimerTerminate = useCallback(() => {
    if (isRunning === false) return;

    timerControls.terminate();
    if (onTerminate) onTerminate();
  }, [timerControls, onTerminate, isRunning]);

  const timerControlsMemo = useMemo(
    () => ({
      isRunning,
      handleTimerStart,
      handleTimerPause,
      handleTimerResume,
      handleTimerRestart,
      handleTimerTerminate,
    }),
    [
      isRunning,
      handleTimerStart,
      handleTimerPause,
      handleTimerResume,
      handleTimerRestart,
      handleTimerTerminate,
    ],
  );

  return (
    <TimerContext.Provider value={{ remainingTime }}>
      <TimerControlContext.Provider value={timerControlsMemo}>
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
  onTimerRestart?: () => void;
}

function TimerControl({ as }: ControlsProps) {
  const { isRunning, handleTimerPause, handleTimerResume, handleTimerRestart } =
    useContext(TimerControlContext);
  const control = Children.only(as);

  return (
    <>
      {cloneElement(control, {
        isRunning,
        onTimerPause: handleTimerPause,
        onTimerResume: handleTimerResume,
        onTimerRestart: handleTimerRestart,
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
