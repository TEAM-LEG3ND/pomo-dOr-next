"use client";

import useInterval from "@/hooks/useInterval";
import {
  Children,
  ReactElement,
  cloneElement,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

interface Props {
  settingTime: {
    hour: number;
    minute: number;
    second: number;
  };
  options?: {
    running: boolean;
  };
  onStart?: () => void;
  onPause?: () => void;
  onResume?: () => void;
  onReset?: () => void;
  onTimeout?: () => void;
  children: ReactElement;
}

export interface ExtendedChildrenProps {
  remain?: number;
}

function Timer({
  settingTime,
  options = {
    running: true,
  },
  onStart,
  onPause,
  onResume,
  onReset,
  onTimeout,
  children,
}: Props) {
  const settingTimeInMs =
    (settingTime.hour * 60 * 60 +
      settingTime.minute * 60 +
      settingTime.second) *
    1000;
  const interval = 10;
  const [remainTime, setRemainTime] = useState(settingTimeInMs);
  const [isRunning, setIsRunning] = useState(options.running);
  const startTimeRef = useRef(new Date());
  const lastPausePointRef = useRef(new Date());
  const totalPausedTimeRef = useRef(0);
  const [start, clear] = useInterval(() => {
    const updatedRemainTime =
      settingTimeInMs -
      (Date.now() -
        startTimeRef.current.getTime() -
        totalPausedTimeRef.current);
    if (updatedRemainTime <= 0) {
      setRemainTime(0);
      return;
    }
    setRemainTime(updatedRemainTime);
  }, interval);

  useLayoutEffect(() => {
    startTimeRef.current = new Date();
    setRemainTime(settingTimeInMs);
    start();
    console.time("timer");

    return () => {
      clear();
    };
  }, [settingTime]);

  useEffect(() => {
    const updatedRemainTime =
      settingTimeInMs -
      (Date.now() -
        startTimeRef.current.getTime() -
        totalPausedTimeRef.current);
    if (updatedRemainTime > 0) return;
    clear();
    console.timeEnd("timer");
    totalPausedTimeRef.current = 0;
    if (onTimeout) onTimeout();
  }, [settingTime, remainTime, onTimeout, clear]);

  const startTimer = () => {
    if (isRunning) return;
    setIsRunning(true);
    startTimeRef.current = new Date();
    start();
  };

  const pauseTimer = () => {
    if (!isRunning) return;
    clear();
    console.time("pause");
    lastPausePointRef.current = new Date();
    setIsRunning(false);
  };

  const resumeTimer = () => {
    if (isRunning) return;
    setIsRunning(true);
    totalPausedTimeRef.current +=
      Date.now() - lastPausePointRef.current.getTime();
    start();
    console.timeEnd("pause");
  };

  const resetTimer = () => {
    clear();
    setRemainTime(settingTimeInMs);
    setIsRunning(false);
  };

  const handleTimerStart = () => {
    startTimer();
    if (onStart) onStart();
  };

  const handleTimerPause = () => {
    pauseTimer();
    if (onPause) onPause();
  };
  const handleTimerResume = () => {
    resumeTimer();
    if (onResume) onResume();
  };
  const handleTimerReset = () => {
    resetTimer();
    if (onReset) onReset();
  };

  return (
    <>
      {Children.map(children, (child) =>
        cloneElement(child, {
          remain: children.props.remain ?? remainTime,
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
