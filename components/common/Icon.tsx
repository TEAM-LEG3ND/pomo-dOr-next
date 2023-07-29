"use client";

import { useQuery } from "@tanstack/react-query";
import { HTMLAttributes } from "react";

interface Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  name: string;
}
export function Icon({ name, ...props }: Props) {
  const { isError, isLoading, data } = useQuery({
    queryKey: [`icon-${name}`],
    queryFn: () =>
      fetchIcon(name, {
        baseUrl: "https://pomo-dor.s3.ap-northeast-2.amazonaws.com",
      }),
  });

  if (isLoading) {
    return <div {...props} />;
  }

  return (
    <span
      dangerouslySetInnerHTML={
        data
          ? {
              __html: data,
            }
          : undefined
      }
      {...props}
    />
  );
}

async function fetchIcon(name: string, { baseUrl }: { baseUrl: string }) {
  const res = await fetch(`${baseUrl}/icons/${name}.svg`);
  const icon = await res.text();

  return icon;
}
