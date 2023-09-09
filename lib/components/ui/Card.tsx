import Image from "next/image";
import { HTMLAttributes, ReactElement } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

function Card({ children, className, ...props }: Props) {
  return (
    <div className={`rounded-xl bg-white ${className}`} {...props}>
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

function Panel({ children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div {...props}>{children}</div>;
}

function Heading({ heading }: { heading: string }) {
  return <h3 className="text-xl">{heading}</h3>;
}

function SubHead({ subhead }: { subhead: string }) {
  return <h4 className="text-base">{subhead}</h4>;
}

function SupportingText({ supportingText }: { supportingText: string }) {
  return <p className="text-sm">{supportingText}</p>;
}

function Controls({ as }: { as: ReactElement }) {
  return as;
}

export default Object.assign(Card, {
  Media,
  Panel,
  Heading,
  SubHead,
  SupportingText,
  Controls,
});
