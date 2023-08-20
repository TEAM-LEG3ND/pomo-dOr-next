"use client";

import { HTMLAttributes } from "react";

interface Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  svg?: string;
}
function Icon({ svg = "", ...props }: Props) {
  return (
    <span
      dangerouslySetInnerHTML={
        svg
          ? {
              __html: svg,
            }
          : undefined
      }
      {...props}
    />
  );
}

export default Icon;
