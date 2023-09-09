"use client";

import { ReactNode, createContext, useState } from "react";

interface Props {
  children: ReactNode;
}

const initialPhases = [{ phase: 0, type: "focus" as const, time: 0 }];

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
