import { createClient } from "@libsql/client";
import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";

const client = createClient({ url: 'file:food-order.db' });
export const db = drizzle(client);