import { SETTING_TIMER_PATH } from "@/constants/routes";
import Link from "next/link";
import Card from "../common/Card";
import Icon from "../common/icon/PrefetchedIcon";

function DirectStartingCard() {
  return (
    <Link href={`${SETTING_TIMER_PATH}`}>
      <Card className="flex justify-between p-4 shadow-xl shadow-neutral-50">
        <Card.Heading heading="바로 시작하기" />
        <Card.Controls
          as={
            <Icon
              name="play"
              className="h-8 w-8 fill-white stroke-primary-700"
            />
          }
        />
      </Card>
    </Link>
  );
}

export default DirectStartingCard;
