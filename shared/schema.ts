import { pgTable, text, serial, integer, boolean, real, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Definición de tabla de mascotas
export const pets = pgTable("pets", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  species: text("species").notNull(),
  breed: text("breed"),
  age: integer("age"),
  ageUnit: text("age_unit").default("years"),
  gender: text("gender").default("male"),
  weight: real("weight"),
  photo: text("photo"),
  owner: text("owner").notNull(),
  notes: text("notes"),
  active: boolean("active").default(true),
  createdAt: text("created_at"), // Almacenará fecha como texto para simplificar
});

// Esquema para inserción de mascotas
export const insertPetSchema = createInsertSchema(pets)
  .omit({ id: true, createdAt: true })
  .extend({
    age: z.coerce.number().min(0).max(100).optional().nullable(),
    weight: z.coerce.number().min(0).optional().nullable(),
  });

export const petParamsSchema = z.object({
  id: z.coerce.number(),
});

// Definición de tabla de clientes
export const clients = pgTable("clients", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email"),
  phone: text("phone"),
  address: text("address"),
  city: text("city"),
  postalCode: text("postal_code"),
  notes: text("notes"),
  active: boolean("active").default(true),
  createdAt: text("created_at"),
});

// Esquema para inserción de clientes
export const insertClientSchema = createInsertSchema(clients)
  .omit({ id: true, createdAt: true })
  .extend({
    email: z.string().email("Email inválido").optional().nullable(),
    phone: z.string().optional().nullable(),
  });

export const clientParamsSchema = z.object({
  id: z.coerce.number(),
});

// Definición de tabla de productos
export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  category: text("category").notNull(),
  price: real("price").notNull(),
  stock: integer("stock").default(0),
  image: text("image"),
  sku: text("sku"),
  active: boolean("active").default(true),
  createdAt: text("created_at"),
});

// Esquema para inserción de productos
export const insertProductSchema = createInsertSchema(products)
  .omit({ id: true, createdAt: true })
  .extend({
    price: z.coerce.number().min(0, "El precio debe ser mayor a 0"),
    stock: z.coerce.number().min(0, "El stock no puede ser negativo").default(0),
  });

export const productParamsSchema = z.object({
  id: z.coerce.number(),
});

// Definición de tabla de ventas
export const sales = pgTable("sales", {
  id: serial("id").primaryKey(),
  clientName: text("client_name").notNull(),
  total: real("total").notNull(),
  paymentMethod: text("payment_method").notNull(),
  status: text("status").default("completed"),
  notes: text("notes"),
  createdAt: text("created_at"),
});

// Esquema para inserción de ventas
export const insertSaleSchema = createInsertSchema(sales)
  .omit({ id: true, createdAt: true })
  .extend({
    total: z.coerce.number().min(0, "El total debe ser mayor a 0"),
  });

export const saleParamsSchema = z.object({
  id: z.coerce.number(),
});

// Definición de tabla de items de venta
export const saleItems = pgTable("sale_items", {
  id: serial("id").primaryKey(),
  saleId: integer("sale_id").notNull(),
  productName: text("product_name").notNull(),
  quantity: integer("quantity").notNull(),
  unitPrice: real("unit_price").notNull(),
  subtotal: real("subtotal").notNull(),
});

// Esquema para inserción de items de venta
export const insertSaleItemSchema = createInsertSchema(saleItems)
  .omit({ id: true })
  .extend({
    quantity: z.coerce.number().positive("La cantidad debe ser mayor a 0"),
    unitPrice: z.coerce.number().min(0, "El precio unitario debe ser mayor o igual a 0"),
    subtotal: z.coerce.number().min(0, "El subtotal debe ser mayor o igual a 0"),
  });

export type Pet = typeof pets.$inferSelect;
export type InsertPet = z.infer<typeof insertPetSchema>;
export type PetParams = z.infer<typeof petParamsSchema>;

export type Client = typeof clients.$inferSelect;
export type InsertClient = z.infer<typeof insertClientSchema>;
export type ClientParams = z.infer<typeof clientParamsSchema>;

export type Product = typeof products.$inferSelect;
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type ProductParams = z.infer<typeof productParamsSchema>;

export type Sale = typeof sales.$inferSelect;
export type InsertSale = z.infer<typeof insertSaleSchema>;
export type SaleParams = z.infer<typeof saleParamsSchema>;

export type SaleItem = typeof saleItems.$inferSelect;
export type InsertSaleItem = z.infer<typeof insertSaleItemSchema>;
