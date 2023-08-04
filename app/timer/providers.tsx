"use client";

// import { ValueOf } from "@/utils/types";
import { ReactNode, createContext, useState } from "react";

interface Props {
  children: ReactNode;
}

// const TimerPage = {
//   set: 0,
//   run: 1,
//   end: 2,
// } as const;

export type TimerSetting = {
  workTime: number;
  breakTime: number;
  repeat: number;
};

// export const PageChangeContext = createContext<
//   (page: keyof typeof TimerPage) => void
// >((page) => {});

const initialSetting = {
  workTime: 1,
  breakTime: 1,
  repeat: 1,
};

export const TimerSettingContext = createContext<TimerSetting>(initialSetting);
export const TimerSettingActionContext = createContext<
  (setting: TimerSetting) => void
>((setting) => {});

function Providers({ children }: Props) {
  // const [page, setPage] = useState<ValueOf<typeof TimerPage>>(TimerPage.set);
  const [timerSetting, setTimerSetting] =
    useState<TimerSetting>(initialSetting);

  // const onChangePage = (page: keyof typeof TimerPage) => {
  //   setPage(TimerPage[page]);
  // };

  const onChangeTimerSetting = (setting: TimerSetting) => {
    setTimerSetting(setting);
  };

  return (
    <TimerSettingContext.Provider value={timerSetting}>
      <TimerSettingActionContext.Provider value={onChangeTimerSetting}>
        {children}
      </TimerSettingActionContext.Provider>
    </TimerSettingContext.Provider>
  );
}

export default Providers;
