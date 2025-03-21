import React from "react";
import Post from "./post/post";

export default function RestaurantPost() {
  return (
    <div className="pt-4">
      <div className="grid grid-flow-col gap-4">
        <div className="row-span-2 grid grid-flow-row gap-4">
          <Post type="horizontal" />
          <Post type="horizontal" />
        </div>
        <div className="col-span-2 grid grid-flow-row gap-4">
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
}
