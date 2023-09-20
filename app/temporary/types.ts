export type TimerPhaseType = "focus" | "break";

export type TimerPhaseState = "past" | "current" | "post";

export type TimerPhase = {
  phase: number;
  type: TimerPhaseType;
  time: number;
};
