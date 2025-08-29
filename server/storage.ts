import { 
  users, 
  type User, 
  type InsertUser, 
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

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Métodos para clientes
  getClients(): Promise<Client[]>;
  getClient(id: number): Promise<Client | undefined>;
  createClient(client: InsertClient): Promise<Client>;
  updateClient(id: number, client: InsertClient): Promise<Client | undefined>;
  deleteClient(id: number): Promise<boolean>;

  // Métodos para productos
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  updateProduct(id: number, product: InsertProduct): Promise<Product | undefined>;
  deleteProduct(id: number): Promise<boolean>;

  // Métodos para ventas
  getSales(): Promise<Sale[]>;
  getSale(id: number): Promise<Sale | undefined>;
  createSale(sale: InsertSale, items: InsertSaleItem[]): Promise<Sale>;
  updateSale(id: number, sale: InsertSale): Promise<Sale | undefined>;
  deleteSale(id: number): Promise<boolean>;

  // Métodos para items de venta
  getSaleItems(saleId: number): Promise<SaleItem[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private clientStore: Map<number, Client>;
  private productStore: Map<number, Product>;
  private saleStore: Map<number, Sale>;
  private saleItemStore: Map<number, SaleItem>;
  
  private userCurrentId: number;
  private clientCurrentId: number;
  private productCurrentId: number;
  private saleCurrentId: number;
  private saleItemCurrentId: number;

  constructor() {
    this.users = new Map();
    this.clientStore = new Map();
    this.productStore = new Map();
    this.saleStore = new Map();
    this.saleItemStore = new Map();
    
    this.userCurrentId = 1;
    this.clientCurrentId = 1;
    this.productCurrentId = 1;
    this.saleCurrentId = 1;
    this.saleItemCurrentId = 1;
    
    // Agregar datos iniciales para demostración
    this.initializeClients();
    this.initializeProducts();
    this.initializeSales();
  }



  private initializeClients() {
    const initialClients: InsertClient[] = [
      {
        name: "Carlos Ramírez",
        email: "carlos@example.com",
        phone: "555-123-4567",
        address: "Av. Principal 123",
        city: "Madrid",
        postalCode: "28001",
        notes: "Cliente frecuente - Especializado en terrazas",
        active: true
      },
      {
        name: "María González",
        email: "maria@example.com",
        phone: "555-234-5678",
        address: "Calle Secundaria 456",
        city: "Barcelona",
        postalCode: "08001",
        notes: "Prefiere contacto por email - Proyectos residenciales",
        active: true
      },
      {
        name: "Ana Martínez",
        email: "ana@example.com",
        phone: "555-345-6789",
        address: "Plaza Mayor 789",
        city: "Valencia",
        postalCode: "46001",
        notes: "Constructora especializada en WPC",
        active: true
      },
      {
        name: "Juan Rodríguez",
        email: "juan@example.com",
        phone: "555-456-7890",
        address: "Avenida Central 101",
        city: "Sevilla",
        postalCode: "41001",
        notes: "Cliente nuevo - Interesado en revestimientos",
        active: true
      },
      {
        name: "Construcciones WPC Ibérica",
        email: "info@wpciberica.com",
        phone: "555-567-8901",
        address: "Polígono Industrial Norte 45",
        city: "Bilbao",
        postalCode: "48001",
        notes: "Distribuidor mayorista - Pedidos grandes",
        active: true
      },
      {
        name: "Reformas Sostenibles SL",
        email: "contacto@reformassost.es",
        phone: "555-678-9012",
        address: "Calle Verde 88",
        city: "Zaragoza",
        postalCode: "50001",
        notes: "Especialista en construcción ecológica",
        active: true
      },
      {
        name: "Diseños Exteriores Modernos",
        email: "ventas@exterioresmod.com",
        phone: "555-789-0123",
        address: "Urbanización Las Palmas 12",
        city: "Málaga",
        postalCode: "29001",
        notes: "Paisajismo y terrazas de lujo",
        active: true
      },
      {
        name: "Instalaciones Pérez Hermanos",
        email: "hermanos@perezinstal.es",
        phone: "555-890-1234",
        address: "Carretera Nacional 67",
        city: "Santander",
        postalCode: "39001",
        notes: "Instaladores certificados WPC",
        active: true
      }
    ];

    initialClients.forEach(client => {
      this.createClient(client);
    });
  }

  private initializeProducts() {
    const initialProducts: InsertProduct[] = [
      {
        name: "Piso WPC Exterior Gris",
        description: "Tablón de piso WPC para exteriores, resistente al agua y UV",
        category: "Pisos-WPC",
        price: 45.99,
        stock: 100,
        image: "https://images.unsplash.com/photo-1631634673011-2c71db0aef21?ixlib=rb-4.0.3&q=80&w=100&h=100",
        sku: "WPC-PISO-001",
        active: true
      },
      {
        name: "Revestimiento WPC Interior",
        description: "Panel de revestimiento WPC para interiores con acabado madera",
        category: "Paredes-WPC",
        price: 38.50,
        stock: 75,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&q=80&w=100&h=100",
        sku: "WPC-REV-001",
        active: true
      },
      {
        name: "Decking WPC Marrón",
        description: "Tablones de decking WPC para terrazas y patios exteriores",
        category: "Decking-Exterior",
        price: 52.99,
        stock: 60,
        image: "https://images.unsplash.com/photo-1560185009-5bf9f2849488?ixlib=rb-4.0.3&q=80&w=100&h=100",
        sku: "WPC-DECK-001",
        active: true
      },
      {
        name: "Perfil de Inicio WPC",
        description: "Perfil inicial para instalación de revestimientos WPC",
        category: "Accesorios-Instalacion",
        price: 12.99,
        stock: 200,
        image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&q=80&w=100&h=100",
        sku: "WPC-ACC-001",
        active: true
      },
      {
        name: "Techo WPC Blanco",
        description: "Panel de techo WPC con aislamiento térmico integrado",
        category: "Techos-WPC",
        price: 42.99,
        stock: 40,
        image: "https://images.unsplash.com/photo-1585264550248-1778be3b6368?ixlib=rb-4.0.3&q=80&w=100&h=100",
        sku: "WPC-TECHO-001",
        active: true
      },
      {
        name: "Viga Estructural WPC",
        description: "Perfil estructural WPC para construcción y soporte",
        category: "Perfiles-Estructurales",
        price: 68.50,
        stock: 25,
        image: "https://images.unsplash.com/photo-1504222490345-c075b6008014?ixlib=rb-4.0.3&q=80&w=100&h=100",
        sku: "WPC-VIGA-001",
        active: true
      },
      {
        name: "Piso WPC Interior Roble",
        description: "Tablones de piso WPC imitación roble para interiores",
        category: "Pisos-WPC",
        price: 39.99,
        stock: 120,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&q=80&w=100&h=100",
        sku: "WPC-PISO-002",
        active: true
      },
      {
        name: "Revestimiento Exterior Antracita",
        description: "Panel WPC exterior color antracita resistente a intemperie",
        category: "Revestimientos",
        price: 48.75,
        stock: 80,
        image: "https://images.unsplash.com/photo-1560185009-5bf9f2849488?ixlib=rb-4.0.3&q=80&w=100&h=100",
        sku: "WPC-REV-002",
        active: true
      },
      {
        name: "Clips de Instalación Invisibles",
        description: "Sistema de clips para instalación invisible de WPC",
        category: "Accesorios-Instalacion",
        price: 8.99,
        stock: 500,
        image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&q=80&w=100&h=100",
        sku: "WPC-ACC-002",
        active: true
      },
      {
        name: "Decking Premium Teka",
        description: "Tablones de decking WPC premium imitación teka",
        category: "Decking-Exterior",
        price: 65.99,
        stock: 45,
        image: "https://images.unsplash.com/photo-1560185009-5bf9f2849488?ixlib=rb-4.0.3&q=80&w=100&h=100",
        sku: "WPC-DECK-002",
        active: true
      },
      {
        name: "Panel Techo Acústico WPC",
        description: "Panel de techo WPC con propiedades acústicas",
        category: "Techos-WPC",
        price: 52.50,
        stock: 60,
        image: "https://images.unsplash.com/photo-1585264550248-1778be3b6368?ixlib=rb-4.0.3&q=80&w=100&h=100",
        sku: "WPC-TECHO-002",
        active: true
      },
      {
        name: "Perfil Esquina Exterior",
        description: "Perfil de esquina para remates exteriores WPC",
        category: "Perfiles-Estructurales",
        price: 24.99,
        stock: 150,
        image: "https://images.unsplash.com/photo-1504222490345-c075b6008014?ixlib=rb-4.0.3&q=80&w=100&h=100",
        sku: "WPC-PERF-001",
        active: true
      },
      {
        name: "Piso WPC Comercial Gris",
        description: "Piso WPC de alta resistencia para uso comercial",
        category: "Pisos-WPC",
        price: 54.99,
        stock: 90,
        image: "https://images.unsplash.com/photo-1631634673011-2c71db0aef21?ixlib=rb-4.0.3&q=80&w=100&h=100",
        sku: "WPC-PISO-003",
        active: true
      }
    ];

    initialProducts.forEach(product => {
      this.createProduct(product);
    });
  }

  private initializeSales() {
    const initialSales: {sale: InsertSale, items: InsertSaleItem[]}[] = [
      {
        sale: {
          clientName: "Carlos Ramírez",
          total: 158.48,
          paymentMethod: "Tarjeta de crédito",
          status: "completed",
          notes: "Proyecto terraza exterior"
        },
        items: [
          {
            saleId: 1,
            productName: "Decking WPC Marrón",
            quantity: 2,
            unitPrice: 52.99,
            subtotal: 105.98
          },
          {
            saleId: 1,
            productName: "Perfil de Inicio WPC",
            quantity: 4,
            unitPrice: 12.99,
            subtotal: 51.96
          }
        ]
      },
      {
        sale: {
          clientName: "María González",
          total: 84.49,
          paymentMethod: "Efectivo",
          status: "completed",
          notes: "Revestimiento interior sala"
        },
        items: [
          {
            saleId: 2,
            productName: "Revestimiento WPC Interior",
            quantity: 2,
            unitPrice: 38.50,
            subtotal: 77.00
          },
          {
            saleId: 2,
            productName: "Perfil de Inicio WPC",
            quantity: 1,
            unitPrice: 12.99,
            subtotal: 12.99
          }
        ]
      },
      {
        sale: {
          clientName: "Ana Martínez",
          total: 137.98,
          paymentMethod: "Transferencia",
          status: "completed",
          notes: "Piso exterior completo"
        },
        items: [
          {
            saleId: 3,
            productName: "Piso WPC Exterior Gris",
            quantity: 3,
            unitPrice: 45.99,
            subtotal: 137.97
          }
        ]
      },
      {
        sale: {
          clientName: "Construcciones WPC Ibérica",
          total: 1247.50,
          paymentMethod: "Transferencia",
          status: "completed",
          notes: "Pedido mayorista - Proyecto residencial grande"
        },
        items: [
          {
            saleId: 4,
            productName: "Decking Premium Teka",
            quantity: 15,
            unitPrice: 65.99,
            subtotal: 989.85
          },
          {
            saleId: 4,
            productName: "Clips de Instalación Invisibles",
            quantity: 30,
            unitPrice: 8.99,
            subtotal: 269.70
          }
        ]
      },
      {
        sale: {
          clientName: "Reformas Sostenibles SL",
          total: 892.45,
          paymentMethod: "Tarjeta de crédito",
          status: "completed",
          notes: "Proyecto ecológico - Revestimiento completo"
        },
        items: [
          {
            saleId: 5,
            productName: "Revestimiento Exterior Antracita",
            quantity: 15,
            unitPrice: 48.75,
            subtotal: 731.25
          },
          {
            saleId: 5,
            productName: "Perfil Esquina Exterior",
            quantity: 6,
            unitPrice: 24.99,
            subtotal: 149.94
          },
          {
            saleId: 5,
            productName: "Perfil de Inicio WPC",
            quantity: 1,
            unitPrice: 12.99,
            subtotal: 12.99
          }
        ]
      },
      {
        sale: {
          clientName: "Diseños Exteriores Modernos",
          total: 475.96,
          paymentMethod: "Efectivo",
          status: "completed",
          notes: "Proyecto terraza de lujo"
        },
        items: [
          {
            saleId: 6,
            productName: "Piso WPC Comercial Gris",
            quantity: 8,
            unitPrice: 54.99,
            subtotal: 439.92
          },
          {
            saleId: 6,
            productName: "Clips de Instalación Invisibles",
            quantity: 4,
            unitPrice: 8.99,
            subtotal: 35.96
          }
        ]
      }
    ];

    initialSales.forEach(({sale, items}) => {
      this.createSale(sale, items);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }



  // Implementación de métodos para clientes
  async getClients(): Promise<Client[]> {
    return Array.from(this.clientStore.values());
  }

  async getClient(id: number): Promise<Client | undefined> {
    return this.clientStore.get(id);
  }

  async createClient(insertClient: InsertClient): Promise<Client> {
    const id = this.clientCurrentId++;
    const now = new Date().toISOString();
    
    const client: Client = { 
      id,
      name: insertClient.name,
      email: insertClient.email || null,
      phone: insertClient.phone || null,
      address: insertClient.address || null,
      city: insertClient.city || null,
      postalCode: insertClient.postalCode || null,
      notes: insertClient.notes || null,
      active: insertClient.active === undefined ? true : insertClient.active,
      createdAt: now
    };
    
    this.clientStore.set(id, client);
    return client;
  }

  async updateClient(id: number, updateClient: InsertClient): Promise<Client | undefined> {
    const existingClient = await this.getClient(id);
    
    if (!existingClient) {
      return undefined;
    }

    const updatedClient: Client = { 
      id,
      name: updateClient.name,
      email: updateClient.email || null,
      phone: updateClient.phone || null,
      address: updateClient.address || null,
      city: updateClient.city || null,
      postalCode: updateClient.postalCode || null,
      notes: updateClient.notes || null,
      active: updateClient.active === undefined ? existingClient.active : updateClient.active,
      createdAt: existingClient.createdAt 
    };
    
    this.clientStore.set(id, updatedClient);
    return updatedClient;
  }

  async deleteClient(id: number): Promise<boolean> {
    const exists = this.clientStore.has(id);
    
    if (!exists) {
      return false;
    }
    
    return this.clientStore.delete(id);
  }

  // Implementación de métodos para productos
  async getProducts(): Promise<Product[]> {
    return Array.from(this.productStore.values());
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.productStore.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.productCurrentId++;
    const now = new Date().toISOString();
    
    const product: Product = { 
      id,
      name: insertProduct.name,
      description: insertProduct.description || null,
      category: insertProduct.category,
      price: insertProduct.price,
      stock: insertProduct.stock || 0,
      image: insertProduct.image || null,
      sku: insertProduct.sku || null,
      active: insertProduct.active === undefined ? true : insertProduct.active,
      createdAt: now 
    };
    
    this.productStore.set(id, product);
    return product;
  }

  async updateProduct(id: number, updateProduct: InsertProduct): Promise<Product | undefined> {
    const existingProduct = await this.getProduct(id);
    
    if (!existingProduct) {
      return undefined;
    }

    const updatedProduct: Product = { 
      id,
      name: updateProduct.name,
      description: updateProduct.description || null,
      category: updateProduct.category,
      price: updateProduct.price,
      stock: updateProduct.stock === undefined ? existingProduct.stock : updateProduct.stock,
      image: updateProduct.image || null,
      sku: updateProduct.sku || null,
      active: updateProduct.active === undefined ? existingProduct.active : updateProduct.active,
      createdAt: existingProduct.createdAt 
    };
    
    this.productStore.set(id, updatedProduct);
    return updatedProduct;
  }

  async deleteProduct(id: number): Promise<boolean> {
    const exists = this.productStore.has(id);
    
    if (!exists) {
      return false;
    }
    
    return this.productStore.delete(id);
  }

  // Implementación de métodos para ventas
  async getSales(): Promise<Sale[]> {
    return Array.from(this.saleStore.values());
  }

  async getSale(id: number): Promise<Sale | undefined> {
    return this.saleStore.get(id);
  }

  async createSale(insertSale: InsertSale, items: InsertSaleItem[]): Promise<Sale> {
    const id = this.saleCurrentId++;
    const now = new Date().toISOString();
    
    const sale: Sale = { 
      id,
      clientName: insertSale.clientName,
      total: insertSale.total,
      paymentMethod: insertSale.paymentMethod,
      status: insertSale.status || "completed",
      notes: insertSale.notes || null,
      createdAt: now 
    };
    
    this.saleStore.set(id, sale);
    
    // Crear los ítems de la venta
    items.forEach(item => {
      const itemId = this.saleItemCurrentId++;
      const saleItem: SaleItem = { 
        id: itemId,
        saleId: id,
        productName: item.productName,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
        subtotal: item.subtotal
      };
      this.saleItemStore.set(itemId, saleItem);
    });

    return sale;
  }

  async updateSale(id: number, updateSale: InsertSale): Promise<Sale | undefined> {
    const existingSale = await this.getSale(id);
    
    if (!existingSale) {
      return undefined;
    }

    const updatedSale: Sale = { 
      id,
      clientName: updateSale.clientName,
      total: updateSale.total,
      paymentMethod: updateSale.paymentMethod,
      status: updateSale.status || existingSale.status,
      notes: updateSale.notes || existingSale.notes,
      createdAt: existingSale.createdAt 
    };
    
    this.saleStore.set(id, updatedSale);
    return updatedSale;
  }

  async deleteSale(id: number): Promise<boolean> {
    const exists = this.saleStore.has(id);
    
    if (!exists) {
      return false;
    }
    
    // Eliminar los items asociados a esta venta
    const saleItems = await this.getSaleItems(id);
    saleItems.forEach(item => {
      this.saleItemStore.delete(item.id);
    });
    
    return this.saleStore.delete(id);
  }

  // Método para obtener los ítems de una venta
  async getSaleItems(saleId: number): Promise<SaleItem[]> {
    return Array.from(this.saleItemStore.values()).filter(item => item.saleId === saleId);
  }
}

// Importamos la implementación de almacenamiento de base de datos
import { DatabaseStorage } from "./dbStorage";

// Cambiamos de MemStorage a DatabaseStorage para persistencia de datos
export const storage = new DatabaseStorage();
