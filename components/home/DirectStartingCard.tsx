import { ROUTINE_PATH } from "@/constants/routes";
import Link from "next/link";
import Card from "../common/Card";
import { Icon } from "../common/Icon";

function DirectStartingCard() {
  return (
    <Link href={`${ROUTINE_PATH}/1/timer`}>
      <Card type="fill" className="flex justify-between rounded-xl p-4">
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
