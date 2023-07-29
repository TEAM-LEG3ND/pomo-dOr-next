import Link from "next/link";
import { Icon } from "../common/Icon";
import ShortcutCard from "./ShortcutCard";
import { CREATE_ROUTINE_PATH } from "@/constants/routes";
import Card from "../common/Card";

function ShortcutList() {
  return (
    <div className="grid w-full grid-cols-3 gap-2">
      <ShortcutCard />
      <ShortcutCard />
      <Link href={`${CREATE_ROUTINE_PATH}`}>
        <Card
          type="fill"
          className="flex h-full items-center justify-center rounded-xl"
        >
          <Icon name="round-plus" className="h-10 w-10 fill-primary-700" />
        </Card>
      </Link>
    </div>
  );
}

export default ShortcutList;
