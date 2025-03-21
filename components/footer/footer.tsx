"use client";

import { BookOpen, Compass, ListOrdered, User } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Footer() {
  const router = useRouter();
  const renderSectionItem = (type: string) => {
    switch (type) {
      case "explore":
        return (
          <>
            <Compass />
            <span>Explore</span>
          </>
        );
      case "order":
        return (
          <>
            <ListOrdered />
            <span>My Order</span>
          </>
        );
      case "favorite":
        return (
          <>
            <BookOpen />
            <span>Favorite</span>
          </>
        );
      case "profile":
        return (
          <>
            <User />
            <span>Profile</span>
          </>
        );
      default:
        return null;
    }
  };
  const renderSection = () => {
    const section = ["explore", "order", "favorite", "profile"];
    return section.map((item, idx) => {
      return (
        <div
          key={idx}
          className="flex flex-col items-center gap-1 font-medium"
          onClick={() => router.push(`/${item}`)}
        >
          {renderSectionItem(item)}
        </div>
      );
    });
  };
  return (
    <footer className="w-full flex justify-between p-4 fixed bottom-0 left-0 bg-gray-200 rounded-t-lg">
      {renderSection()}
    </footer>
  );
}
