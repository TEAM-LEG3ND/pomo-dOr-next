import Link from "next/link";
import ServerIcon from "@/app/_component/_asset/ServerIcon";
import ShortcutCard from "./ShortcutCard";
import { CREATE_ROUTINE_PATH } from "@/constants/routes";
import Card from "@/lib/components/ui/Card";

function ShortcutList() {
  return (
    <div className="grid w-full grid-cols-3 gap-2">
      <ShortcutCard id={1} />
      <ShortcutCard id={2} />
      <Link href={`${CREATE_ROUTINE_PATH}`}>
        <Card className="flex h-full items-center justify-center shadow-lg shadow-neutral-50">
          <ServerIcon
            name="round-plus"
            className="h-10 w-10 fill-primary-700"
          />
        </Card>
      </Link>
    </div>
  );
}

export default ShortcutList;
