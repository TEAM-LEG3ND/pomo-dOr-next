import { FORM_TEMPORARY_PATH } from "@/constants/routes";
import Link from "next/link";
import Card from "@/lib/components/ui/Card";
import ServerIcon from "../../_component/_asset/ServerIcon";

function DirectStartingCard() {
  return (
    <Link href={`${FORM_TEMPORARY_PATH}`}>
      <Card className="flex justify-between p-4 shadow-xl shadow-neutral-50">
        <Card.Heading heading="바로 시작하기" />
        <Card.Controls
          as={
            <ServerIcon
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
