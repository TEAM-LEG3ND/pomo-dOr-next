import { S3_BASE_URL } from "@/apis/paths";
import Image from "next/image";

function Logo() {
  const logoSrc = `${S3_BASE_URL}/logo-transparent.svg`;

  return <Image src={logoSrc} alt="logo image" fill priority />;
}

export default Logo;
