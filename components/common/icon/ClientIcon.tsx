"use client";

import Icon from "./Icon";
import { fetchIcon } from "@/apis/common/api";
import { S3_BASE_URL } from "@/constants/common";
import { useQuery } from "@tanstack/react-query";
import { HTMLAttributes } from "react";

interface Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  name: string;
}

export const createIconQuery = (name: string) => ({
  queryKey: ["icon", name],
  queryFn: () =>
    fetchIcon(name, {
      baseUrl: S3_BASE_URL,
    }),
});

function ClientIcon({ name, ...props }: Props) {
  let svg = "";
  const { isError, isLoading, data } = useQuery(createIconQuery(name));

  if (!isLoading && !isError) svg = data;

  return <Icon svg={svg} {...props} />;
}

export default ClientIcon;
