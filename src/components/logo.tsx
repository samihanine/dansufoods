import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/images/logo.png"
      alt="Dansu"
      className="w-auto h-14"
      width={1000}
      height={1000}
    />
  );
}
