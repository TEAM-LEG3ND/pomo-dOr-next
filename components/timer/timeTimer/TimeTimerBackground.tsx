import { ReactNode, memo } from "react";
import { fetchIcon } from "@/apis/common/api";
import { useQuery } from "@tanstack/react-query";
import { S3_BASE_URL } from "@/constants/common";

interface Props {
  children: ReactNode;
}

export const clockBackgroundImageQuery = {
  queryKey: ["image", "clock-background"],
  queryFn: () => fetchIcon("clock", { baseUrl: S3_BASE_URL }),
};

function TimeTimerBackground({ children }: Props) {
  const { data: clockBackgroundImage } = useQuery(clockBackgroundImageQuery);

  return (
    <div className="relative h-full w-full">
      <span
        className="absolute left-0 top-0 h-full w-full"
        dangerouslySetInnerHTML={
          clockBackgroundImage
            ? {
                __html: clockBackgroundImage,
              }
            : undefined
        }
      />
      {children}
    </div>
  );
}

export default memo(TimeTimerBackground);
