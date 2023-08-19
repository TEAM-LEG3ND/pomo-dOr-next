"use client";

import { ReactNode, createContext, useState } from "react";

interface Props {
  children: ReactNode;
}

export type TimerPhase = {
  set: number;
  type: string;
  time: number;
};

const initialPhases = [{ set: 0, type: "", time: 0 }];

export const TimerPhasesContext = createContext<TimerPhase[]>(initialPhases);
export const TimerPhasesActionContext = createContext<
  (phases: TimerPhase[]) => void
>((phases) => {});

function Providers({ children }: Props) {
  const [timerPhases, setTimerPhases] = useState<TimerPhase[]>(initialPhases);

  const onChangeTimerPhases = (phases: TimerPhase[]) => {
    setTimerPhases(phases);
  };

  return (
    <TimerPhasesContext.Provider value={timerPhases}>
      <TimerPhasesActionContext.Provider value={onChangeTimerPhases}>
        {children}
      </TimerPhasesActionContext.Provider>
    </TimerPhasesContext.Provider>
  );
}

export default Providers;
