"use client";

import Icon from "./Icon";
import useIconQuery from "@/queries/asset/useIconQuery";
import { HTMLAttributes } from "react";

interface Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  name: string;
}

function ClientIcon({ name, ...props }: Props) {
  const { isError, isLoading, icon } = useIconQuery(name);

  return <Icon svg={icon} {...props} />;
}

export default ClientIcon;
