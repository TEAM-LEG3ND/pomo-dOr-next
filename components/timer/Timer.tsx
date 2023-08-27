"use client";

import useTimer from "@/hooks/useTimer";
import { Children, ReactElement, cloneElement, useEffect } from "react";

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
  children: ReactElement;
}

export interface ExtendedChildrenProps {
  remain?: number;
}

function Timer({
  settingTime,
  onStart,
  onPause,
  onResume,
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

  const handleTimerStart = () => {
    timerControls.start();
    if (onStart) onStart();
  };

  const handleTimerPause = () => {
    timerControls.pause();
    if (onPause) onPause();
  };

  const handleTimerResume = () => {
    timerControls.resume();
    if (onResume) onResume();
  };

  const handleTimerQuit = () => {
    timerControls.terminate();
    if (onTerminate) onTerminate();
  };

  return (
    <>
      {Children.map(children, (child) =>
        cloneElement(child, {
          remain: children.props.remain ?? remainingTime,
        }),
      )}
      <div>
        {isRunning ? (
          <button onClick={handleTimerPause}>정지</button>
        ) : (
          <button onClick={handleTimerResume}>시작</button>
        )}
      </div>
    </>
  );
}

export default Timer;
