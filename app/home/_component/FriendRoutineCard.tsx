import Card from "@/lib/components/ui/Card";
import TimerShortcut from "./TimerShortcut";

function FriendRoutineCard() {
  return (
    <Card className="flex h-24 w-full gap-4 shadow-2xl shadow-neutral-50">
      <Card.Panel className="aspect-1 h-full w-auto flex-shrink-0">
        <TimerShortcut className="bg-primary-700 stroke-tertiary " />
      </Card.Panel>
      <Card.Panel className="flex-1 self-stretch py-2">
        <Card.Heading heading="뽀모도로 1" />
        <Card.SubHead subhead="dory.m" />
      </Card.Panel>
    </Card>
  );
}

export default FriendRoutineCard;
