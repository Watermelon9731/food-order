import CustomCarousel from "@/components/custom-carousel/custom-carousel";
import Header from "@/components/header/header";
import RestaurantPost from "@/components/restaurant-posts/restaurant-post";
import React from "react";

export default function MyOrderPage() {
  return (
    <div className="w-full p-4 mb-[84px]">
      <Header heading="My Order" />
      <h2 className="font-bold text-2xl tracking-wide">From my foods</h2>
      <CustomCarousel />
      <h3 className="text-xl font-bold tracking-wide">
        Posted by Restaunrants
      </h3>
      <RestaurantPost />
    </div>
  );
}
