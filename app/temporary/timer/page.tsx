"use client";

import { useContext, useState } from "react";
import { TimerPhasesContext } from "../providers";
import { useRouter } from "next/navigation";
import { END_TEMPORARY_PATH } from "@/constants/routes";
import Timer from "@/app/temporary/timer/_component/Timer";
import TimeTimer from "./_component/timeTimer/TimeTimer";
import TimerControlsPanel, {
  TimerControlsPanelPortal,
} from "./_component/TimerControlsPanel";
import TimerInfoPanel from "./_component/TimerInfoPanel";

function Page() {
  const timerPhases = useContext(TimerPhasesContext);
  const [phase, setPhase] = useState(0);
  const router = useRouter();

  const handleTimeout = () => {
    if (phase >= timerPhases.length - 1) {
      router.push(END_TEMPORARY_PATH);
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
