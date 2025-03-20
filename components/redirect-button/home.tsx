"use client";

import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function HomeButton() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 pt-5">
      <Button
        variant={"outline"}
        className="w-5/6 rounded-full bg-orange-300 border-none text-white font-semibold text-xl p-6"
        onClick={() => router.push('/login')}
      >
        Log In
      </Button>
      <Button
        variant={"outline"}
        className="w-5/6 rounded-full bg-blue-500 border-none text-white font-semibold text-xl p-6"
        onClick={() => router.push("/explore")}
      >
        Get started
      </Button>
    </div>
  );
}
