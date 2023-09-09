import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useInterval from "./useInterval";

export type TimerHooksOption = {
  initialTime: number;
  updateInterval: number;
};

function useTimer(onTimeout: () => void = () => {}, options: TimerHooksOption) {
  const [remainingTime, setRemainingTime] = useState(options.initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const initialTimeRef = useRef(options.initialTime);
  const startTimeRef = useRef(new Date());
  const lastPausePointRef = useRef(new Date());
  const totalPausedTimeRef = useRef(0);

  const [start, clear] = useInterval(() => {
    const updatedRemainingTime =
      initialTimeRef.current -
      (Date.now() -
        startTimeRef.current.getTime() -
        totalPausedTimeRef.current);
    setRemainingTime(updatedRemainingTime > 0 ? updatedRemainingTime : 0);
  }, options.updateInterval);

  useEffect(() => {
    if (remainingTime > 0 || isRunning === false) return;

    clear();
    onTimeout();
    setIsRunning(false);
  }, [remainingTime, clear, onTimeout, isRunning]);

  const startTimer = useCallback(() => {
    start();
    startTimeRef.current = new Date();
    setIsRunning(true);
  }, [start]);

  const pauseTimer = useCallback(() => {
    clear();
    lastPausePointRef.current = new Date();
    setIsRunning(false);
  }, [clear]);

  const resumeTimer = useCallback(() => {
    totalPausedTimeRef.current +=
      Date.now() - lastPausePointRef.current.getTime();
    start();
    setIsRunning(true);
  }, [start]);

  const terminateTimer = useCallback(() => {
    clear();
    totalPausedTimeRef.current = 0;
    setRemainingTime(0);
    setIsRunning(false);
  }, [clear]);

  const resetTimer = useCallback(
    (time: number) => {
      clear();
      totalPausedTimeRef.current = 0;
      setRemainingTime(time);
      initialTimeRef.current = time;
      setIsRunning(false);
    },
    [clear],
  );

  const actions = useMemo(
    () => ({
      start: startTimer,
      pause: pauseTimer,
      resume: resumeTimer,
      terminate: terminateTimer,
      reset: resetTimer,
    }),
    [startTimer, pauseTimer, resumeTimer, terminateTimer, resetTimer],
  );

  return [remainingTime, isRunning, actions] as const;
}

export default useTimer;
