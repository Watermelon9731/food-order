import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white relative m-2 overflow-hidden rounded-3xl">
      <div className="w-screen h-screen overflow-hidden">
        <Image
          src={
            "https://img.freepik.com/premium-photo/vertical-banner-vietnam-independence-day-national-vietnamese-dishes-asian-cuisine-street-food-spring-rolls-bamboo-leaves-goi-kuon-rolls_595836-5858.jpg"
          }
          fill={true}
          alt="background"
          style={{ filter: "blur(6px) brightness(50%)" }}
        />
        <div className="flex flex-col absolute top-1/3 left-8 gap-2">
          <h1 className="font-bold text-white text-5xl uppercase tracking-wide leading-snug">
            choose your dishes right now
          </h1>
          <h2 className="font-semibold text-gray-300 text-xl normal-case tracking-wide">
            Login to save your valuable time
          </h2>
          <div className="flex flex-col gap-4 pt-5">
            <Button
              variant={"outline"}
              className="w-5/6 rounded-full bg-orange-300 border-none text-white font-semibold text-xl p-6"
            >
              Log In
            </Button>
            <Button
              variant={"outline"}
              className="w-5/6 rounded-full bg-blue-500 border-none text-white font-semibold text-xl p-6"
            >
              Get started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
