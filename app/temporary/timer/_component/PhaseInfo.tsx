import { TimerPhase, TimerPhaseState, TimerPhaseType } from "../../types";

interface Props {
  phase: {
    currentId: number;
    total: TimerPhase[];
  };
}

function PhaseInfo({ phase }: Props) {
  const { currentId, total } = phase;

  const getItemState = (itemId: number): TimerPhaseState => {
    let res: TimerPhaseState = "current";

    if (itemId < currentId) res = "past";
    else if (itemId === currentId) res = "current";
    else if (itemId > currentId) res = "post";
    else throw new Error("unexpected phase item state");

    return res;
  };

  return (
    <ol className="flex w-full flex-wrap justify-center gap-5">
      {total.map((phase, i) => (
        <PhaseInfoItem key={i} state={getItemState(i)} type={phase.type} />
      ))}
    </ol>
  );
}

interface ItemProps {
  state: TimerPhaseState;
  type: TimerPhaseType;
}

function PhaseInfoItem({ state, type }: ItemProps) {
  return (
    <li
      data-state-type={`${state}-${type}`}
      className="aspect-1 w-5 rounded-full data-[state-type=current-break]:bg-green-500 data-[state-type=current-focus]:bg-red-500 data-[state-type^=past]:bg-gray-500 data-[state-type^=post]:bg-gray-300 data-[state-type^=current]:outline-2 data-[state-type^=current]:outline-offset-2 data-[state-type^=current]:outline-gray-300"
    />
  );
}

export default Object.assign(PhaseInfo, {
  Item: PhaseInfoItem,
});
