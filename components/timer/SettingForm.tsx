"use client";

import { TimerSetting, TimerSettingActionContext } from "@/app/timer/providers";
import { RUNNING_TIMER_PATH } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type SettingInputs = TimerSetting;

function SettingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SettingInputs>();
  const router = useRouter();
  const setTimerSetting = useContext(TimerSettingActionContext);

  const onClick: SubmitHandler<SettingInputs> = ({
    workTime,
    breakTime,
    repeat,
  }) => {
    setTimerSetting({
      workTime,
      breakTime,
      repeat,
    });
    router.push(
      RUNNING_TIMER_PATH,
      // `${RUNNING_TIMER_PATH}?workTime=${data.workTime}&breakTime=${data.breakTime}&repeat=${data.repeat}`,
    );
  };

  return (
    <form className="flex flex-col">
      <label>집중 시간</label>
      <input
        type="number"
        {...register("workTime", { required: true, min: 1, max: 60 })}
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
