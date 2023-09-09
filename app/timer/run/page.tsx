"use client";

import { useContext, useState } from "react";
import TimeTimer from "@/components/timer/timeTimer/TimeTimer";
import { TimerPhasesContext } from "../providers";
import { useRouter } from "next/navigation";
import { ENDED_TIMER_PATH } from "@/constants/routes";
import Timer from "@/components/timer/Timer";
import TimerControlsPanel, {
  TimerControlsPanelPortal,
} from "@/components/timer/TimerControlsPanel";
import TimerInfoPanel from "@/components/timer/TimerInfoPanel";

function Page() {
  const timerPhases = useContext(TimerPhasesContext);
  const [phase, setPhase] = useState(0);
  const router = useRouter();

  const handleTimeout = () => {
    if (phase >= timerPhases.length - 1) {
      router.push(ENDED_TIMER_PATH);
      return;
    }
    setPhase((p) => p + 1);
  };

  return (
    <>
      <section>
        <Timer
          settingTime={{ hour: 0, minute: timerPhases[phase].time, second: 0 }}
          onTimeout={handleTimeout}
        >
          <Timer.View as={<TimeTimer />} />
          <Timer.Control as={<TimerControlsPanel />} />
        </Timer>
      </section>
      <section>
        <TimerInfoPanel phase={{ currentId: phase, total: timerPhases }} />
        <TimerControlsPanelPortal className="mt-auto" />
      </section>
    </>
  );
}

export default Page;
