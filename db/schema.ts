import { sqliteTable, integer, text, real } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  userId: integer("user_id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").unique().notNull(),
  password: text("password").notNull(),
  phone: text("phone"),
  address: text("address"),
  createdAt: integer("created_at", { mode: "timestamp" }).defaultNow(),
});

export const restaurants = sqliteTable("restaurants", {
  restaurantId: integer("restaurant_id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").unique().notNull(),
  phone: text("phone"),
  address: text("address"),
  createdAt: integer("created_at", { mode: "timestamp" }).defaultNow(),
});

export const menuItems = sqliteTable("menu_items", {
  itemId: integer("item_id").primaryKey({ autoIncrement: true }),
  restaurantId: integer("restaurant_id").references(() => restaurants.restaurantId, { onDelete: "cascade" }),
  name: text("name").notNull(),
  description: text("description"),
  price: real("price").notNull(),
  category: text("category"),
  isAvailable: integer("is_available", { mode: "boolean" }).default(true),
});

export const orders = sqliteTable("orders", {
  orderId: integer("order_id").primaryKey({ autoIncrement: true }),
  userId: integer("user_id").references(() => users.userId, { onDelete: "cascade" }),
  restaurantId: integer("restaurant_id").references(() => restaurants.restaurantId, { onDelete: "cascade" }),
  status: text("status").notNull().default("Pending"), // Handle status validation in app
  totalAmount: real("total_amount").notNull(),
  orderTime: integer("order_time", { mode: "timestamp" }).defaultNow(),
});

export const orderItems = sqliteTable("order_items", {
  orderItemId: integer("order_item_id").primaryKey({ autoIncrement: true }),
  orderId: integer("order_id").references(() => orders.orderId, { onDelete: "cascade" }),
  itemId: integer("item_id").references(() => menuItems.itemId, { onDelete: "cascade" }),
  quantity: integer("quantity").notNull(), // Ensure quantity > 0 in application logic
  price: real("price").notNull(),
});

export const payments = sqliteTable("payments", {
  paymentId: integer("payment_id").primaryKey({ autoIncrement: true }),
  orderId: integer("order_id").references(() => orders.orderId, { onDelete: "cascade" }),
  userId: integer("user_id").references(() => users.userId, { onDelete: "cascade" }),
  paymentMethod: text("payment_method").notNull(), // Validate values ("Credit Card", "UPI", etc.) in app
  amount: real("amount").notNull(),
  paymentStatus: text("payment_status").notNull().default("Pending"), // Validate in app
  paymentTime: integer("payment_time", { mode: "timestamp" }).defaultNow(),
});

export const reviews = sqliteTable("reviews", {
  reviewId: integer("review_id").primaryKey({ autoIncrement: true }),
  userId: integer("user_id").references(() => users.userId, { onDelete: "cascade" }),
  restaurantId: integer("restaurant_id").references(() => restaurants.restaurantId, { onDelete: "cascade" }),
  rating: integer("rating").notNull(), // Ensure rating is between 1-5 in application logic
  comment: text("comment"),
  reviewTime: integer("review_time", { mode: "timestamp" }).defaultNow(),
});
