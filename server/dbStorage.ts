import { 
  users, 
  type User, 
  type InsertUser, 
  pets, 
  type Pet, 
  type InsertPet,
  clients,
  type Client,
  type InsertClient,
  products,
  type Product,
  type InsertProduct,
  sales,
  type Sale,
  type InsertSale,
  saleItems,
  type SaleItem,
  type InsertSaleItem
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";
import { IStorage } from "./storage";

export class DatabaseStorage implements IStorage {
  // Métodos para usuarios
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  // Métodos para mascotas
  async getPets(): Promise<Pet[]> {
    return await db.select().from(pets);
  }

  async getPet(id: number): Promise<Pet | undefined> {
    const [pet] = await db.select().from(pets).where(eq(pets.id, id));
    return pet || undefined;
  }

  async createPet(insertPet: InsertPet): Promise<Pet> {
    const now = new Date().toISOString();
    const petData = {
      ...insertPet,
      createdAt: now
    };
    
    const [pet] = await db
      .insert(pets)
      .values(petData)
      .returning();
    
    return pet;
  }

  async updatePet(id: number, updatePet: InsertPet): Promise<Pet | undefined> {
    const [existingPet] = await db
      .select()
      .from(pets)
      .where(eq(pets.id, id));
    
    if (!existingPet) {
      return undefined;
    }

    const [updatedPet] = await db
      .update(pets)
      .set({
        ...updatePet,
      })
      .where(eq(pets.id, id))
      .returning();
    
    return updatedPet;
  }

  async deletePet(id: number): Promise<boolean> {
    const [existingPet] = await db
      .select()
      .from(pets)
      .where(eq(pets.id, id));
    
    if (!existingPet) {
      return false;
    }
    
    await db
      .delete(pets)
      .where(eq(pets.id, id));
    
    return true;
  }

  // Métodos para clientes
  async getClients(): Promise<Client[]> {
    return await db.select().from(clients);
  }

  async getClient(id: number): Promise<Client | undefined> {
    const [client] = await db.select().from(clients).where(eq(clients.id, id));
    return client || undefined;
  }

  async createClient(insertClient: InsertClient): Promise<Client> {
    const now = new Date().toISOString();
    const clientData = {
      ...insertClient,
      createdAt: now
    };
    
    const [client] = await db
      .insert(clients)
      .values(clientData)
      .returning();
    
    return client;
  }

  async updateClient(id: number, updateClient: InsertClient): Promise<Client | undefined> {
    const [existingClient] = await db
      .select()
      .from(clients)
      .where(eq(clients.id, id));
    
    if (!existingClient) {
      return undefined;
    }

    const [updatedClient] = await db
      .update(clients)
      .set({
        ...updateClient,
      })
      .where(eq(clients.id, id))
      .returning();
    
    return updatedClient;
  }

  async deleteClient(id: number): Promise<boolean> {
    const [existingClient] = await db
      .select()
      .from(clients)
      .where(eq(clients.id, id));
    
    if (!existingClient) {
      return false;
    }
    
    await db
      .delete(clients)
      .where(eq(clients.id, id));
    
    return true;
  }

  // Métodos para productos
  async getProducts(): Promise<Product[]> {
    return await db.select().from(products);
  }

  async getProduct(id: number): Promise<Product | undefined> {
    const [product] = await db.select().from(products).where(eq(products.id, id));
    return product || undefined;
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const now = new Date().toISOString();
    const productData = {
      ...insertProduct,
      createdAt: now
    };
    
    const [product] = await db
      .insert(products)
      .values(productData)
      .returning();
    
    return product;
  }

  async updateProduct(id: number, updateProduct: InsertProduct): Promise<Product | undefined> {
    const [existingProduct] = await db
      .select()
      .from(products)
      .where(eq(products.id, id));
    
    if (!existingProduct) {
      return undefined;
    }

    const [updatedProduct] = await db
      .update(products)
      .set({
        ...updateProduct,
      })
      .where(eq(products.id, id))
      .returning();
    
    return updatedProduct;
  }

  async deleteProduct(id: number): Promise<boolean> {
    const [existingProduct] = await db
      .select()
      .from(products)
      .where(eq(products.id, id));
    
    if (!existingProduct) {
      return false;
    }
    
    await db
      .delete(products)
      .where(eq(products.id, id));
    
    return true;
  }

  // Métodos para ventas
  async getSales(): Promise<Sale[]> {
    return await db.select().from(sales);
  }

  async getSale(id: number): Promise<Sale | undefined> {
    const [sale] = await db.select().from(sales).where(eq(sales.id, id));
    return sale || undefined;
  }

  async createSale(insertSale: InsertSale, items: InsertSaleItem[]): Promise<Sale> {
    const now = new Date().toISOString();
    const saleData = {
      ...insertSale,
      createdAt: now
    };
    
    // Iniciar una transacción para crear la venta y sus items
    const [sale] = await db
      .insert(sales)
      .values(saleData)
      .returning();
    
    // Crear los items de la venta con el ID de la venta
    for (const item of items) {
      await db
        .insert(saleItems)
        .values({
          ...item,
          saleId: sale.id
        });
    }
    
    return sale;
  }

  async updateSale(id: number, updateSale: InsertSale): Promise<Sale | undefined> {
    const [existingSale] = await db
      .select()
      .from(sales)
      .where(eq(sales.id, id));
    
    if (!existingSale) {
      return undefined;
    }

    const [updatedSale] = await db
      .update(sales)
      .set({
        ...updateSale,
      })
      .where(eq(sales.id, id))
      .returning();
    
    return updatedSale;
  }

  async deleteSale(id: number): Promise<boolean> {
    const [existingSale] = await db
      .select()
      .from(sales)
      .where(eq(sales.id, id));
    
    if (!existingSale) {
      return false;
    }
    
    // Primero eliminar los items asociados a esta venta
    await db
      .delete(saleItems)
      .where(eq(saleItems.saleId, id));
    
    // Luego eliminar la venta
    await db
      .delete(sales)
      .where(eq(sales.id, id));
    
    return true;
  }

  // Método para obtener los ítems de una venta
  async getSaleItems(saleId: number): Promise<SaleItem[]> {
    return await db
      .select()
      .from(saleItems)
      .where(eq(saleItems.saleId, saleId));
  }
}