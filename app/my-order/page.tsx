import CustomCarousel from "@/components/custom-carousel/custom-carousel";
import Header from "@/components/header/header";
import React from "react";

export default function MyOrderPage() {
  return (
    <div className="w-full p-4">
      <Header heading="My Order" />
      <h2 className="font-bold text-2xl">From my food</h2>
      <CustomCarousel />
    </div>
  );
}
