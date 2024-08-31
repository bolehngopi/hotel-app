"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="flex items-center cursor-pointer gap-2"
      aria-label="Navigate to homepage"
    >
      <Image
        className="hidden md:block"
        src="/images/logo.jpg"
        alt="TrauBall Logo"
        width="50"
        height="50"
        layout="fixed"
        priority
      />
      <span className="travball">TrauBall</span>
    </div>
  );
};

export default Logo;
