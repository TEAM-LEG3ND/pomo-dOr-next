import { HTMLAttributes } from "react";
import Icon from "./Icon";
import { fetchIcon } from "@/apis/common/api";
import { S3_BASE_URL } from "@/constants/common";

interface Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  name: string;
}

async function PrefetchedIcon({ name, ...props }: Props) {
  const initialData = await fetchIcon(name, { baseUrl: S3_BASE_URL });
  return <Icon name={name} svg={initialData} {...props} />;
}

export default PrefetchedIcon;
