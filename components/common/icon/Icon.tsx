"use client";

import { fetchIcon } from "@/apis/common/api";
import { S3_BASE_URL } from "@/constants/common";
import { useQuery } from "@tanstack/react-query";
import { HTMLAttributes } from "react";

interface Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  name: string;
  svg?: string;
}
function Icon({ name, svg = "", ...props }: Props) {
  const { isError, isLoading, data } = useQuery({
    queryKey: [`icon-${name}`],
    queryFn: () =>
      fetchIcon(name, {
        baseUrl: S3_BASE_URL,
      }),
    initialData: svg,
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

export default Icon;
