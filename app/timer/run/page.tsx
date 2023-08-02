"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { ENDED_TIMER_PATH } from "@/constants/routes";
import TimeTimer from "@/components/timer/TimeTimer";

function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { workTime, breakTime, repeat } = searchParams;
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
  }, [phase]);

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
