"use client";

import { RUNNING_TIMER_PATH } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

type SettingInputs = {
  workTime: number;
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

  const onSubmit: SubmitHandler<SettingInputs> = (data) => {
    console.log(data);
  };
  const onClick: SubmitHandler<SettingInputs> = (data) => {
    router.push(
      `${RUNNING_TIMER_PATH}?workTime=${data.workTime}&breakTime=${data.breakTime}&repeat=${data.repeat}`,
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
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
