"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="flex items-center cursor-pointer"
    >
      <Image
        className="hidden md:block"
        src="/images/logo.jpg"
        alt="Logo"
        width="50"
        height="50"
      />
      <span className="travball">TrauBall</span>
    </div>
  );
};

export default Logo;
