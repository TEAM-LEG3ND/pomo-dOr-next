"use client";

import { useCallback, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { ENDED_TIMER_PATH } from "@/constants/routes";
import TimeTimer from "@/components/timer/timeTimer/TimeTimer";
import { TimerSettingContext } from "../providers";

function Page() {
  const { workTime, breakTime, repeat } = useContext(TimerSettingContext);
  const [phase, setPhase] = useState(0);
  const router = useRouter();

  const timePhases = Array.from({ length: Number(repeat) }, () => [
    Number(workTime),
    Number(breakTime),
  ]).flat();

  const onTimeout = useCallback(() => {
    if (phase >= timePhases.length - 1) {
      router.push(ENDED_TIMER_PATH);
    }
    setPhase((p) => p + 1);
  }, [phase, router, timePhases.length]);

  return (
    <>
      <section>
        <TimeTimer settingTime={timePhases[phase]} onTimeout={onTimeout} />
      </section>
      <section>Info</section>
    </>
  );
}

export default Page;
