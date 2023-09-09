import PhaseInfo from "./PhaseInfo";
import { TimerPhase } from "./types";

interface Props {
  phase: {
    currentId: number;
    total: TimerPhase[];
  };
}

function TimerInfoPanel({ phase }: Props) {
  const { currentId, total } = phase;
  let label = "FOCUS";

  switch (total[currentId].type) {
    case "focus":
      label = "FOCUS";
      break;
    case "break":
      label = "BREAK";
      break;
    default:
      throw new Error("unexpected type in phase");
  }

  return (
    <div>
      <div className="px-10">
        <PhaseInfo phase={phase} />
      </div>
      <div className="py-6 text-center text-2xl font-light text-gray-500">
        {label}
      </div>
    </div>
  );
}

export default TimerInfoPanel;
