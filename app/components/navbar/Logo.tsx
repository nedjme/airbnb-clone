"use client";
import Image from "next/image";

import { useRouter } from "next/navigation";

const Logo: React.FC = () => {
  const router = useRouter();
  return (
    <Image
      alt="this is a logo"
      src="/images/logo.png"
      className="cursor-pointer md:block hidden"
      placeholder="empty"
      priority={true}
      height={100}
      width={100}
    />
  );
};

export default Logo;
