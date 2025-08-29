import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertClientSchema,
  clientParamsSchema,
  insertProductSchema,
  productParamsSchema,
  insertSaleSchema,
  saleParamsSchema,
  insertSaleItemSchema 
} from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {

  // Rutas para clientes
  // GET - Obtener todos los clientes
  app.get("/api/clients", async (req, res) => {
    try {
      const clients = await storage.getClients();
      return res.json(clients);
    } catch (error) {
      console.error("Error al obtener clientes:", error);
      return res.status(500).json({ message: "Error al obtener clientes" });
    }
  });

  // GET - Obtener un cliente por ID
  app.get("/api/clients/:id", async (req, res) => {
    try {
      const result = clientParamsSchema.safeParse(req.params);
      
      if (!result.success) {
        return res.status(400).json({ message: "ID de cliente inválido" });
      }
      
      const { id } = result.data;
      const client = await storage.getClient(id);
      
      if (!client) {
        return res.status(404).json({ message: "Cliente no encontrado" });
      }
      
      return res.json(client);
    } catch (error) {
      console.error("Error al obtener cliente:", error);
      return res.status(500).json({ message: "Error al obtener cliente" });
    }
  });

  // POST - Crear un nuevo cliente
  app.post("/api/clients", async (req, res) => {
    try {
      const result = insertClientSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          message: "Datos de cliente inválidos", 
          errors: result.error.format() 
        });
      }
      
      const newClient = await storage.createClient(result.data);
      return res.status(201).json(newClient);
    } catch (error) {
      console.error("Error al crear cliente:", error);
      return res.status(500).json({ message: "Error al crear cliente" });
    }
  });

  // PUT - Actualizar un cliente existente
  app.put("/api/clients/:id", async (req, res) => {
    try {
      const paramsResult = clientParamsSchema.safeParse(req.params);
      
      if (!paramsResult.success) {
        return res.status(400).json({ message: "ID de cliente inválido" });
      }
      
      const { id } = paramsResult.data;
      
      const bodyResult = insertClientSchema.safeParse(req.body);
      
      if (!bodyResult.success) {
        return res.status(400).json({ 
          message: "Datos de cliente inválidos", 
          errors: bodyResult.error.format() 
        });
      }
      
      const updatedClient = await storage.updateClient(id, bodyResult.data);
      
      if (!updatedClient) {
        return res.status(404).json({ message: "Cliente no encontrado" });
      }
      
      return res.json(updatedClient);
    } catch (error) {
      console.error("Error al actualizar cliente:", error);
      return res.status(500).json({ message: "Error al actualizar cliente" });
    }
  });

  // DELETE - Eliminar un cliente
  app.delete("/api/clients/:id", async (req, res) => {
    try {
      const result = clientParamsSchema.safeParse(req.params);
      
      if (!result.success) {
        return res.status(400).json({ message: "ID de cliente inválido" });
      }
      
      const { id } = result.data;
      const success = await storage.deleteClient(id);
      
      if (!success) {
        return res.status(404).json({ message: "Cliente no encontrado" });
      }
      
      return res.json({ success: true });
    } catch (error) {
      console.error("Error al eliminar cliente:", error);
      return res.status(500).json({ message: "Error al eliminar cliente" });
    }
  });

  // Rutas para productos
  // GET - Obtener todos los productos
  app.get("/api/products", async (req, res) => {
    try {
      const products = await storage.getProducts();
      return res.json(products);
    } catch (error) {
      console.error("Error al obtener productos:", error);
      return res.status(500).json({ message: "Error al obtener productos" });
    }
  });

  // GET - Obtener un producto por ID
  app.get("/api/products/:id", async (req, res) => {
    try {
      const result = productParamsSchema.safeParse(req.params);
      
      if (!result.success) {
        return res.status(400).json({ message: "ID de producto inválido" });
      }
      
      const { id } = result.data;
      const product = await storage.getProduct(id);
      
      if (!product) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }
      
      return res.json(product);
    } catch (error) {
      console.error("Error al obtener producto:", error);
      return res.status(500).json({ message: "Error al obtener producto" });
    }
  });

  // POST - Crear un nuevo producto
  app.post("/api/products", async (req, res) => {
    try {
      const result = insertProductSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          message: "Datos de producto inválidos", 
          errors: result.error.format() 
        });
      }
      
      const newProduct = await storage.createProduct(result.data);
      return res.status(201).json(newProduct);
    } catch (error) {
      console.error("Error al crear producto:", error);
      return res.status(500).json({ message: "Error al crear producto" });
    }
  });

  // PUT - Actualizar un producto existente
  app.put("/api/products/:id", async (req, res) => {
    try {
      const paramsResult = productParamsSchema.safeParse(req.params);
      
      if (!paramsResult.success) {
        return res.status(400).json({ message: "ID de producto inválido" });
      }
      
      const { id } = paramsResult.data;
      
      const bodyResult = insertProductSchema.safeParse(req.body);
      
      if (!bodyResult.success) {
        return res.status(400).json({ 
          message: "Datos de producto inválidos", 
          errors: bodyResult.error.format() 
        });
      }
      
      const updatedProduct = await storage.updateProduct(id, bodyResult.data);
      
      if (!updatedProduct) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }
      
      return res.json(updatedProduct);
    } catch (error) {
      console.error("Error al actualizar producto:", error);
      return res.status(500).json({ message: "Error al actualizar producto" });
    }
  });

  // DELETE - Eliminar un producto
  app.delete("/api/products/:id", async (req, res) => {
    try {
      const result = productParamsSchema.safeParse(req.params);
      
      if (!result.success) {
        return res.status(400).json({ message: "ID de producto inválido" });
      }
      
      const { id } = result.data;
      const success = await storage.deleteProduct(id);
      
      if (!success) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }
      
      return res.json({ success: true });
    } catch (error) {
      console.error("Error al eliminar producto:", error);
      return res.status(500).json({ message: "Error al eliminar producto" });
    }
  });

  // Rutas para ventas
  // GET - Obtener todas las ventas
  app.get("/api/sales", async (req, res) => {
    try {
      const sales = await storage.getSales();
      return res.json(sales);
    } catch (error) {
      console.error("Error al obtener ventas:", error);
      return res.status(500).json({ message: "Error al obtener ventas" });
    }
  });

  // GET - Obtener una venta por ID
  app.get("/api/sales/:id", async (req, res) => {
    try {
      const result = saleParamsSchema.safeParse(req.params);
      
      if (!result.success) {
        return res.status(400).json({ message: "ID de venta inválido" });
      }
      
      const { id } = result.data;
      const sale = await storage.getSale(id);
      
      if (!sale) {
        return res.status(404).json({ message: "Venta no encontrada" });
      }
      
      // Obtener los items de la venta
      const items = await storage.getSaleItems(id);
      
      return res.json({ 
        ...sale, 
        items 
      });
    } catch (error) {
      console.error("Error al obtener venta:", error);
      return res.status(500).json({ message: "Error al obtener venta" });
    }
  });

  // POST - Crear una nueva venta con sus items
  app.post("/api/sales", async (req, res) => {
    try {
      // Validar la estructura básica del objeto recibido
      const saleDataSchema = z.object({
        sale: insertSaleSchema,
        items: z.array(insertSaleItemSchema)
      });
      
      const result = saleDataSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          message: "Datos de venta inválidos", 
          errors: result.error.format() 
        });
      }
      
      const { sale, items } = result.data;
      const newSale = await storage.createSale(sale, items);
      
      // Obtener los items asociados a la venta
      const saleItems = await storage.getSaleItems(newSale.id);
      
      return res.status(201).json({
        ...newSale,
        items: saleItems
      });
    } catch (error) {
      console.error("Error al crear venta:", error);
      return res.status(500).json({ message: "Error al crear venta" });
    }
  });

  // DELETE - Eliminar una venta y sus items
  app.delete("/api/sales/:id", async (req, res) => {
    try {
      const result = saleParamsSchema.safeParse(req.params);
      
      if (!result.success) {
        return res.status(400).json({ message: "ID de venta inválido" });
      }
      
      const { id } = result.data;
      const success = await storage.deleteSale(id);
      
      if (!success) {
        return res.status(404).json({ message: "Venta no encontrada" });
      }
      
      return res.json({ success: true });
    } catch (error) {
      console.error("Error al eliminar venta:", error);
      return res.status(500).json({ message: "Error al eliminar venta" });
    }
  });

  // Rutas para descarga de base de datos
  // GET - Descargar datos en formato JSON
  app.get("/api/admin/export/json", async (req, res) => {
    try {
      const clients = await storage.getClients();
      const products = await storage.getProducts();
      const sales = await storage.getSales();

      const data = {
        timestamp: new Date().toISOString(),
        format: "JSON",
        data: {
          clients,
          products,
          sales
        },
        metadata: {
          totalClients: clients.length,
          totalProducts: products.length,
          totalSales: sales.length
        }
      };

      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Content-Disposition', `attachment; filename="wpc_database_${new Date().toISOString().split('T')[0]}.json"`);
      return res.json(data);
    } catch (error) {
      console.error("Error al exportar JSON:", error);
      return res.status(500).json({ message: "Error al exportar base de datos" });
    }
  });

  // GET - Descargar productos en formato CSV
  app.get("/api/admin/export/csv", async (req, res) => {
    try {
      const products = await storage.getProducts();
      
      const csvHeaders = "ID,Nombre,Categoria,Precio,Stock,SKU,Activo\n";
      const csvData = products.map(product => 
        `${product.id},"${product.name}","${product.category}",${product.price},${product.stock},"${product.sku}",${product.active ? 'Sí' : 'No'}`
      ).join('\n');

      const csv = csvHeaders + csvData;

      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', `attachment; filename="wpc_productos_${new Date().toISOString().split('T')[0]}.csv"`);
      return res.send(csv);
    } catch (error) {
      console.error("Error al exportar CSV:", error);
      return res.status(500).json({ message: "Error al exportar CSV" });
    }
  });

  // GET - Descargar esquema en formato SQL
  app.get("/api/admin/export/sql", async (req, res) => {
    try {
      const sqlSchema = `-- WPCREATION Database Export
-- Generated on ${new Date().toISOString()}
-- Sistema de gestión de productos WPC (Wood Plastic Composite)

-- Tabla de clientes
CREATE TABLE clients (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(50),
  address TEXT,
  company VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de productos WPC
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock INTEGER DEFAULT 0,
  image VARCHAR(500),
  sku VARCHAR(100) UNIQUE,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de ventas
CREATE TABLE sales (
  id SERIAL PRIMARY KEY,
  client_name VARCHAR(255) NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  payment_method VARCHAR(50),
  status VARCHAR(50) DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de items de venta
CREATE TABLE sale_items (
  id SERIAL PRIMARY KEY,
  sale_id INTEGER REFERENCES sales(id) ON DELETE CASCADE,
  product_name VARCHAR(255) NOT NULL,
  quantity INTEGER NOT NULL,
  unit_price DECIMAL(10,2) NOT NULL,
  subtotal DECIMAL(10,2) NOT NULL
);

-- Categorías WPC específicas
INSERT INTO product_categories (name, description) VALUES
  ('Pisos-WPC', 'Tablones y sistemas de piso en material compuesto'),
  ('Revestimientos', 'Paneles de revestimiento para paredes exteriores'),
  ('Decking-Exterior', 'Tablones para terrazas y espacios exteriores'),
  ('Techos-WPC', 'Paneles y sistemas de techo en WPC'),
  ('Accesorios-Instalacion', 'Clips, perfiles y accesorios de instalación'),
  ('Perfiles-Estructurales', 'Vigas y perfiles estructurales en WPC');

-- Comentarios sobre el sistema
/*
Este esquema está diseñado para un sistema de gestión específico
de productos WPC (Wood Plastic Composite), optimizado para:
- Gestión de inventario especializado
- Control de ventas y facturación
- Administración de clientes del sector construcción
- Categorización específica de productos WPC
*/`;

      res.setHeader('Content-Type', 'text/sql');
      res.setHeader('Content-Disposition', `attachment; filename="wpc_database_schema_${new Date().toISOString().split('T')[0]}.sql"`);
      return res.send(sqlSchema);
    } catch (error) {
      console.error("Error al exportar SQL:", error);
      return res.status(500).json({ message: "Error al exportar esquema SQL" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
