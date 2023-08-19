import { useCallback, useRef } from "react";

function useInterval(callback: () => void, interval: number) {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clear = useCallback(() => {
    if (intervalRef.current === null) return false;
    clearInterval(intervalRef.current);
    intervalRef.current = null;

    return true;
  }, []);

  const start = useCallback(() => {
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        callback();
      }, interval);
    }
  }, [callback, interval]);

  return [start, clear];
}

export default useInterval;
