import Card from "../common/Card";
import { Icon } from "../common/Icon";
import TimerShortcut from "./TimerShortcut";

function FriendRoutineCard() {
  return (
    <Card
      type="fill"
      className="flex h-24 w-full gap-4 overflow-hidden rounded-2xl"
    >
      <div className="aspect-1 h-full w-auto flex-shrink-0 overflow-hidden">
        <TimerShortcut className="bg-primary-700 stroke-tertiary " />
      </div>
      <div className="flex-1 self-stretch py-2">
        <Card.Heading heading="뽀모도로 1" />
        <Card.SubHead subhead="dory.m" />
      </div>
      <Card.Controls
        as={
          <button className="flex items-center justify-end gap-1 pr-4">
            <Icon name="like" className="h-7 w-7 fill-primary-700" />
          </button>
        }
      />
    </Card>
  );
}

export default FriendRoutineCard;
