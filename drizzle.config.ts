import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./db/migrations",
  schema: "./db/schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: "food-order.db",
  },
});
