import TimeTimerBackground from "./TimeTimerBackground";
import TimeTimerCore from "./TimeTimerCore";

interface Props {
  phase: {
    set: number;
    type: string;
    time: number;
  };
  onTimeout: () => void;
}

function TimeTimer(props: Props) {
  return (
    <div className="aspect-1 h-auto w-full overflow-hidden rounded-3xl p-[10%]">
      <TimeTimerBackground>
        <TimeTimerCore {...props} />
      </TimeTimerBackground>
    </div>
  );
}

export default TimeTimer;
