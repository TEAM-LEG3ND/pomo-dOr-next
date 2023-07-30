"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "../common/Icon";

function TimeTimer() {
  const data = {
    startTime: Date.now() - 1000 * 60 * 0,
    settingTime: 1000 * 60 * 20,
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
      }, 1000);
    }
  }, [data.startTime]);

  const radius = 128;
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
  const strokeLength = ratio >= 0 ? circumference * ratio : 0;
  const spaceLength = circumference - strokeLength;
  const strokeOffset = circumference * (0.25 + ratio);
  const degree = 360 * ratio;
  return (
    <div className="aspect-1 h-auto w-full overflow-hidden rounded-3xl p-[10%]">
      <div className="relative h-full w-full">
        <Icon name="clock" className="absolute left-0 top-0 h-full w-full" />
        <span>
          <svg
            viewBox={`0 0 ${radius * 2} ${radius * 2}`}
            className="absolute h-full w-full"
          >
            <defs>
              <clipPath id="circle-clip">
                <circle r={radius - 22} cx={radius} cy={radius} />
              </clipPath>
            </defs>
            <circle
              r={radius}
              cx={radius}
              cy={radius}
              stroke="white"
              strokeWidth={radius * 2}
              strokeDasharray={`${strokeLength} ${spaceLength}`}
              strokeDashoffset={strokeOffset}
              className="fill-transparent stroke-red-500"
              clipPath={"url(#circle-clip)"}
            />
            <g className="fill-white drop-shadow-[0_1px_2px_rgba(0_0_0/0.25)]">
              <circle r={radius / 8} cx={radius} cy={radius} />
              <rect
                width={radius / 10}
                height={radius / 3}
                ry={radius / 20}
                x={radius - radius / 20}
                y={radius - radius / 3}
                transform={`rotate(-${degree})`}
                className="transform-origin-center"
              />
            </g>
          </svg>
        </span>
      </div>
    </div>
  );
}

export default TimeTimer;
