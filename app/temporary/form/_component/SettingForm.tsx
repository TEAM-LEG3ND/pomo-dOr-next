"use client";

import { TimerPhasesActionContext } from "@/app/temporary/providers";
import { TIMER_TEMPORARY_PATH } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { createTimerPhases } from "../../utils";

type SettingInputs = {
  focusTime: number;
  breakTime: number;
  repeat: number;
};

function SettingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SettingInputs>();
  const router = useRouter();
  const handleTimerPhases = useContext(TimerPhasesActionContext);

  const onClick: SubmitHandler<SettingInputs> = ({
    focusTime,
    breakTime,
    repeat,
  }) => {
    const timerPhases = createTimerPhases(focusTime, breakTime, repeat);

    handleTimerPhases(timerPhases);
    router.push(TIMER_TEMPORARY_PATH);
  };

  return (
    <form className="flex flex-col">
      <label>집중 시간</label>
      <input
        type="number"
        {...register("focusTime", { required: true, min: 1, max: 60 })}
        className=""
      />
      <label>휴식 시간</label>
      <input
        type="number"
        {...register("breakTime", { required: true, min: 1, max: 60 })}
        className=""
      />
      <label>반복 횟수</label>
      <input
        type="number"
        {...register("repeat", { required: true, min: 1, max: 99 })}
        className=""
      />
      <button type="submit" onClick={handleSubmit(onClick)}>
        시작하기
      </button>
    </form>
  );
}

export default SettingForm;
