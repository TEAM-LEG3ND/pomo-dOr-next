interface Props {
  remain?: number;
}

function TimeTimerCore({ remain = 0 }: Props) {
  const remainRatio = remain / (60 * 60 * 1000);

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
          <filter id="shadow">
            <feDropShadow
              dx={1}
              dy={2}
              stdDeviation={2}
              floodColor="rgba(0, 0, 0, 0.25)"
              floodOpacity={0.5}
            />
          </filter>
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
        <g className="fill-white" filter={"url(#shadow)"}>
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

export default TimeTimerCore;
