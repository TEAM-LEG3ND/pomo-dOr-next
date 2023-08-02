import { useEffect, useRef } from "react";

function useInterval(callback: () => void, options: { interval: number }) {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  useEffect(() => {
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(callback, options.interval);
    }

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [callback, options.interval]);

  const clear = () => {
    if (intervalRef.current === null) return false;
    clearInterval(intervalRef.current);
    intervalRef.current = null;

    return true;
  };

  return clear;
}

export default useInterval;
