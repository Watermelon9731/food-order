import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import React from "react";

interface Props {
  type?: "vertical" | "horizontal";
}

export default function Post({ type = "vertical" }: Props) {
  const renderPost = () => {
    if (type === "horizontal") {
      return (
        <div>
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
            <div className="flex">
              <p className="line-clamp-1 text-gray-400">
                laudantium! Hic, velit natus voluptatem doloribus magnam
                suscipit excepturi repellat delectus!
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="col-span-2">
          <AspectRatio ratio={2}>
            <Image
              src="https://picsum.photos/300/200"
              alt="Image"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
          <div className="grid flex-col justify-end pt-2 gap-2">
            <h4 className="font-medium text-lg capitalize line-clamp-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              cumque ipsam quae quo laudantium
            </h4>
            <div className="flex">
              <p className="line-clamp-1 text-gray-400">
                laudantium! Hic, velit natus voluptatem doloribus magnam
                suscipit excepturi repellat delectus!
              </p>
            </div>
          </div>
        </div>
      );
    }
  };
  return <>{renderPost()}</>;
}
