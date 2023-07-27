import Image from "next/image";

function Logo() {
  const logoSrc = `${process.env.S3_BUCKET_ENDPOINT}/logo-transparent.svg`;

  return <Image src={logoSrc} alt="logo image" fill priority />;
}

export default Logo;
