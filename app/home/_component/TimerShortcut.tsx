"use client";

import {
  HTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

function TimerShortcut({ className }: Props) {
  const data = {
    startTime: Date.now() - 1000 * 60 * 0,
    settingTime: 1000 * 60 * 60,
    currentPhase: 2,
  };
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(
    Date.now() - data.startTime,
  );
  useEffect(() => {
    if (timerRef.current === null) {
      timerRef.current = setInterval(() => {
        setCurrentTime(Date.now() - data.startTime);
      }, 10000);
    }
  }, [data.startTime]);

  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  const calculateRatio = (total: number, remain: number) => remain / total;

  const calculateRemainTimeRatio = useCallback(
    (startTime: number, settingTime: number) => {
      const total = 3600000;
      const ratio = calculateRatio(total, settingTime - currentTime);
      return ratio;
    },
    [currentTime],
  );
  const ratio = calculateRemainTimeRatio(data.startTime, data.settingTime);
  if (timerRef.current !== null && ratio < 0) {
    clearInterval(timerRef.current);
  }
  const spaceLength = ratio >= 0 ? circumference * ratio : 0;
  const strokeLength = circumference - spaceLength;

  return (
    <div className={`h-full w-full rounded-2xl ${className}`}>
      <svg viewBox="0 0 100 100">
        <circle
          r={radius}
          cx={50}
          cy={50}
          fill="transparent"
          stroke="white"
          strokeWidth={radius * 2}
          strokeDasharray={`${strokeLength} ${spaceLength}`}
          transform="rotate(-90, 50, 50)"
        />
        <circle
          r={6}
          cx={50}
          cy={50}
          fill="white"
          strokeWidth={0}
          className="z-10"
        />
      </svg>
    </div>
  );
}

export default TimerShortcut;
