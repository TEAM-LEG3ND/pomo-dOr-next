import Card from "@/components/common/Card";
import { Icon } from "@/components/common/Icon";
import Board from "@/components/home/Board";
import DirectStartingCard from "@/components/home/DirectStartingCard";
import FriendRoutineList from "@/components/home/FriendRoutineList";
import ShortcutList from "@/components/home/ShortcutList";
import { ROUTINE_PATH } from "@/constants/routes";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-grow flex-col gap-8 p-4">
      <Board
        title="내 루틴"
        addon={
          <Link
            href={ROUTINE_PATH}
            className="rounded-lg px-3 py-2 font-light text-gray-600 hover:bg-gray-50 active:bg-gray-50"
          >
            <div>더보기</div>
          </Link>
        }
      >
        <ShortcutList />
      </Board>
      <Board>
        <DirectStartingCard />
      </Board>
      <Board title="실시간 친구들">
        <FriendRoutineList />
      </Board>
    </main>
  );
}
