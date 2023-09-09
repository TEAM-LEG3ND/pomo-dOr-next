export const createTimerPhases = (
  focusTime: number,
  breakTime: number,
  repeat: number,
) => {
  return Array.from({ length: Number(repeat) * 2 }, (_, i) =>
    i % 2 === 0
      ? { phase: i, type: "focus" as const, time: focusTime }
      : { phase: i, type: "break" as const, time: breakTime },
  );
};
