"use server";

import { db } from "@/db";
import { restaurants } from "@/db/schema";

export async function getRecommendFood() {
  const data = await db.select().from(restaurants);
  const res = { message: "Success", status: 200, data };
  return res;
}
