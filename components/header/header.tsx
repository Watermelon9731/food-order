"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
  heading: string;
}

export default function Header({ heading }: Props) {
  const router = useRouter();
  return (
    <div className="w-full h-10 flex justify-between align-middle">
      <div className="w-1/4">
        <ArrowLeft onClick={() => router.back()} />
      </div>
      <h1 className="w-2/4 text-center font-semibold text-xl">{heading}</h1>;
      <div className="w-1/4"></div>
    </div>
  );
}
