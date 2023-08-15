"use client";

import { memo, useCallback, useEffect, useState } from "react";
import useInterval from "@/hooks/useInterval";
import Timer from "@/vo/timeTimer";

interface Props {
  phase: {
    set: number;
    type: string;
    time: number;
  };
  onTimeout: () => void;
}

function TimeTimerCore({ phase, onTimeout }: Props) {
  const settingTime = phase?.time ?? 0;
  const timeTimer = new Timer(settingTime, Date.now());
  const [remainRatio, setRemainRatio] = useState<number>(
    timeTimer.calculateRemainTimeRatio(),
  );

  const clearTickTock = useInterval(
    useCallback(() => {
      const newRemainTimeRatio = timeTimer.calculateRemainTimeRatio();
      if (newRemainTimeRatio < 0) {
        clearTickTock();
        onTimeout();
        return;
      }
      setRemainRatio(newRemainTimeRatio);
    }, [onTimeout]),
    { interval: 1000 },
  );

  const radius = 128;
  const circumference = 2 * Math.PI * radius;
  const strokeLength = remainRatio >= 0 ? circumference * remainRatio : 0;
  const spaceLength = circumference - strokeLength;
  const strokeOffset = circumference * (0.25 + remainRatio);
  const degree = 360 * remainRatio;

  return (
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
  );
}

export default memo(TimeTimerCore);
