import { HTMLAttributes } from "react";
import Icon from "./Icon";
import { GetIconOptions, getIcon } from "@/apis/asset/api";

interface Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  name: string;
  options?: GetIconOptions;
}

async function ServerIcon({ name, options, ...props }: Props) {
  const svg = await getIcon(name, options);

  return <Icon svg={svg} {...props} />;
}

export default ServerIcon;
