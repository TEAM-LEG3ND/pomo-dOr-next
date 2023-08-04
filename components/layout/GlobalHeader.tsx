import Link from "next/link";
import Logo from "@/components/layout/Logo";
import { HOME_PATH } from "@/paths";

function GlobalHeader() {
  return (
    <header className="flex items-center justify-between px-4">
      <div className="relative h-12 w-24">
        <Link href={HOME_PATH}>
          <Logo />
        </Link>
      </div>
    </header>
  );
}

export default GlobalHeader;
