import Card from "../common/Card";
import ServerIcon from "../common/icon/ServerIcon";
import { ROUTINE_PATH } from "@/constants/routes";
import Link from "next/link";

interface Props {
  id: number;
}

function ShortcutCard({ id }: Props) {
  return (
    <Link href={`${ROUTINE_PATH}/${id}`}>
      <Card className="flex flex-col gap-2 p-4 shadow-lg shadow-neutral-50">
        <Card.Heading heading={"25:00"} />
        <Card.SubHead subhead={"뽀모도로"} />
        <Card.Controls
          as={
            <ServerIcon
              name="play"
              className="h-8 w-8 fill-white stroke-primary-700 hover:stroke-primary-600"
            />
          }
        />
      </Card>
    </Link>
  );
}

export default ShortcutCard;
