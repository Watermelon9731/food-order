"use client";

import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { getRecommendFood } from "@/app/api/foods/recommend-food";
import { useEffect } from "react";

export default function CustomCarousel() {
  const getData = async () => {
    try {
      const data = await getRecommendFood();
      console.log(data, data.data);
      data.data.map(item => console.log(item))

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const renderItem = () => {
    const sample = new Array(5).fill(0);
    return sample.map((item, idx) => (
      <CarouselItem key={idx} className="h-[350px] w-[200px] basis-1/2">
        <AspectRatio ratio={3 / 4}>
          <Image
            src="https://picsum.photos/200/300"
            alt="Image"
            fill
            className="rounded-md object-cover"
          />
        </AspectRatio>

        <div className="flex flex-col justify-end pt-2 gap-2">
          <h4 className="font-medium text-lg capitalize line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            cumque ipsam quae quo laudantium
          </h4>
          <div className="flex justify-between">
            <p className="line-clamp-1 text-gray-400 flex-1">
              laudantium! Hic, velit natus voluptatem doloribus magnam suscipit
              excepturi repellat delectus!
            </p>
            <div className="flex-1 flex justify-end">
              <div className="w-fit h-fit px-1 bg-amber-500 rounded-lg">
                <PlusIcon color="white" />
              </div>
            </div>
          </div>
        </div>
      </CarouselItem>
    ));
  };
  return (
    <div className="pt-4">
      <div className="h-[360px] w-full min-w-[200px]">
        <Carousel>
          <CarouselContent>{renderItem()}</CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
