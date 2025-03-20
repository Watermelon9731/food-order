"use client";

import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export default function CustomCarousel() {
  const renderItem = () => {
    return (
      <AspectRatio ratio={3 / 4}>
        <Image
          src="https://picsum.photos/200/300"
          alt="Image"
          fill
          className="rounded-md object-cover"
        />
      </AspectRatio>
    );
  };
  return (
    <div>
      <div className="h-[200px] h-">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <AspectRatio ratio={3 / 4}>
                <Image
                  src="https://picsum.photos/200/300"
                  alt="Image"
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <AspectRatio ratio={3 / 4}>
                <Image
                  src="https://picsum.photos/200/300"
                  alt="Image"
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <AspectRatio ratio={3 / 4}>
                <Image
                  src="https://picsum.photos/200/300"
                  alt="Image"
                  fill
                  className="rounded-md object-cotain"
                />
              </AspectRatio>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
