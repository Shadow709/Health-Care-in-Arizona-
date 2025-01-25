import React from "react";
import Link from "next/link";
import Button from "@/components/Buttons";

export default function Hero() {
  return (
    <div>
      <Link href="SS" passHref>
        <Button text="SignUp" />
      </Link>
      <Link href="/dashboard" passHref>
        <Button text="Login" variant="secondary" />
      </Link>
    </div>
  );
}
