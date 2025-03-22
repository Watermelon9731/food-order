CREATE TABLE `menu_items` (
	`item_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`restaurant_id` integer,
	`name` text NOT NULL,
	`description` text,
	`price` real NOT NULL,
	`category` text,
	`is_available` integer DEFAULT true,
	FOREIGN KEY (`restaurant_id`) REFERENCES `restaurants`(`restaurant_id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `order_items` (
	`order_item_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`order_id` integer,
	`item_id` integer,
	`quantity` integer NOT NULL,
	`price` real NOT NULL,
	FOREIGN KEY (`order_id`) REFERENCES `orders`(`order_id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`item_id`) REFERENCES `menu_items`(`item_id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `orders` (
	`order_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer,
	`restaurant_id` integer,
	`status` text DEFAULT 'Pending' NOT NULL,
	`total_amount` real NOT NULL,
	`order_time` integer DEFAULT (cast((julianday('now') - 2440587.5)*86400000 as integer)),
	FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`restaurant_id`) REFERENCES `restaurants`(`restaurant_id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `payments` (
	`payment_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`order_id` integer,
	`user_id` integer,
	`payment_method` text NOT NULL,
	`amount` real NOT NULL,
	`payment_status` text DEFAULT 'Pending' NOT NULL,
	`payment_time` integer DEFAULT (cast((julianday('now') - 2440587.5)*86400000 as integer)),
	FOREIGN KEY (`order_id`) REFERENCES `orders`(`order_id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `restaurants` (
	`restaurant_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text,
	`address` text,
	`created_at` integer DEFAULT (cast((julianday('now') - 2440587.5)*86400000 as integer))
);
--> statement-breakpoint
CREATE UNIQUE INDEX `restaurants_email_unique` ON `restaurants` (`email`);--> statement-breakpoint
CREATE TABLE `reviews` (
	`review_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer,
	`restaurant_id` integer,
	`rating` integer NOT NULL,
	`comment` text,
	`review_time` integer DEFAULT (cast((julianday('now') - 2440587.5)*86400000 as integer)),
	FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`restaurant_id`) REFERENCES `restaurants`(`restaurant_id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `users` (
	`user_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL,
	`phone` text,
	`address` text,
	`created_at` integer DEFAULT (cast((julianday('now') - 2440587.5)*86400000 as integer))
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);