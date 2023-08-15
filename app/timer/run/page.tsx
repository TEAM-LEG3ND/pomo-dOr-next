"use client";

import { useCallback, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ENDED_TIMER_PATH } from "@/constants/routes";
import TimeTimer from "@/components/timer/timeTimer/TimeTimer";
import { TimerPhasesContext } from "../providers";

function Page() {
  const timerPhases = useContext(TimerPhasesContext);
  const [phase, setPhase] = useState(0);
  const router = useRouter();

  const onTimeout = useCallback(() => {
    if (phase >= timerPhases.length - 1) {
      router.push(ENDED_TIMER_PATH);
    }
    setPhase((p) => p + 1);
  }, [phase, router, timerPhases.length]);

  return (
    <>
      <section>
        <TimeTimer phase={timerPhases[phase]} onTimeout={onTimeout} />
      </section>
      <section>Info</section>
    </>
  );
}

export default Page;
