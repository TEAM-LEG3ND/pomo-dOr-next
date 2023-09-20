import { FORM_TEMPORARY_PATH } from "@/constants/routes";
import Link from "next/link";

function Page() {
  return (
    <section>
      <h2 className="w-full text-center text-2xl">타이머 끝</h2>
      <div className="flex flex-col py-8">
        <Link href={FORM_TEMPORARY_PATH}>
          <div className="rounded-2xl bg-primary-700 px-8 py-4 text-center text-lg text-gray-100">
            시간 설정 화면으로 돌아가기
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Page;
