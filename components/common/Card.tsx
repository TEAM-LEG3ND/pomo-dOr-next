import Image from "next/image";
import { HTMLAttributes, ReactElement } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  type: "fill" | "outlined" | "elevated";
}

function Card({ type, children, className, ...props }: Props) {
  return (
    <div
      data-type={type}
      className={`data-[type=outlined]:border-2 data-[type=outlined]:border-black data-[type=fill]:bg-neutral-50 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

function Media({ type, src }: { type: "img" | "etc"; src: string }) {
  return (
    <div>
      <Image src={src} alt="" />
    </div>
  );
}

function Heading({ heading }: { heading: string }) {
  return <h3 className="text-xl">{heading}</h3>;
}

function SubHead({ subhead }: { subhead: string }) {
  return <h4 className="">{subhead}</h4>;
}

function SupportingText({ supportingText }: { supportingText: string }) {
  return <p>{supportingText}</p>;
}

function Controls({ as }: { as: ReactElement }) {
  return as;
}

export default Object.assign(Card, {
  Media,
  Heading,
  SubHead,
  SupportingText,
  Controls,
});
