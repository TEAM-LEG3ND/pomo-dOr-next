import { TimerControlsChildrenProps } from "./Timer";

interface Props extends TimerControlsChildrenProps {}

function PlayButton({ isRunning, onTimerPause, onTimerResume }: Props) {
  return isRunning ? (
    <button onClick={onTimerPause}>일시정지</button>
  ) : (
    <button onClick={onTimerResume}>계속</button>
  );
}

export default PlayButton;
