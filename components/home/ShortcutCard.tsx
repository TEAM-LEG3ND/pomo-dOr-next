"use client";

import { useRouter } from "next/navigation";
import Card from "../common/Card";
import { Icon } from "../common/Icon";
import { ROUTINE_PATH } from "@/constants/routes";
import Link from "next/link";

function ShortcutCard() {
  const router = useRouter();
  const id = 1;

  const onClickPlay = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    router.push(`${ROUTINE_PATH}/${id}/play`);
  };

  return (
    <Link href={`${ROUTINE_PATH}/${id}`}>
      <Card
        type="fill"
        className="flex min-w-fit flex-col gap-2 rounded-xl bg-white p-2 hover:cursor-pointer"
      >
        <Card.Heading heading={"25:00"} />
        <Card.SubHead subhead={"뽀모도로"} />
        <Card.Controls
          as={
            <button onClick={onClickPlay}>
              <Icon
                name="play"
                className="h-8 w-8 fill-white stroke-primary-700 hover:stroke-primary-600"
              />
            </button>
          }
        />
      </Card>
    </Link>
  );
}

export default ShortcutCard;
