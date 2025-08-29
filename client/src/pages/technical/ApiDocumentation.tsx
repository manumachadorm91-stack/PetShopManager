import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Code, Server, Download, Copy } from "lucide-react";
import { Link } from "wouter";
import { toast } from "@/hooks/use-toast";

export default function ApiDocumentation() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copiado",
      description: "Código copiado al portapapeles"
    });
  };

  return (
    <MainLayout title="API Documentation">
      <div className="animate-fade-in space-y-6">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/admin">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a Admin
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-primary">API Documentation</h1>
            <p className="text-muted-foreground">Documentación técnica de endpoints del sistema WPCREATION</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-5 w-5" />
              Información General de la API
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <h3>Base URL</h3>
            <div className="bg-slate-100 p-3 rounded-lg font-mono text-sm">
              https://tu-dominio.replit.app/api
            </div>

            <h3>Autenticación</h3>
            <p>
              La API utiliza autenticación basada en sesiones. Los usuarios deben iniciar sesión 
              a través del frontend para obtener una sesión válida.
            </p>

            <h3>Formato de Respuesta</h3>
            <p>Todas las respuestas de la API están en formato JSON:</p>
            <div className="bg-slate-100 p-3 rounded-lg">
              <pre className="text-sm">
{`{
  "data": { ... },
  "message": "string",
  "status": "success|error"
}`}
              </pre>
            </div>

            <h3>Códigos de Estado HTTP</h3>
            <ul>
              <li><strong>200:</strong> Solicitud exitosa</li>
              <li><strong>201:</strong> Recurso creado exitosamente</li>
              <li><strong>400:</strong> Error en los datos de entrada</li>
              <li><strong>404:</strong> Recurso no encontrado</li>
              <li><strong>500:</strong> Error interno del servidor</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Endpoints de Productos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="default">GET</Badge>
                <code className="bg-slate-100 px-2 py-1 rounded">/api/products</code>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Obtener lista de todos los productos WPC</p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm">Respuesta de ejemplo:</h4>
                  <div className="bg-slate-100 p-3 rounded relative">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="absolute top-1 right-1"
                      onClick={() => copyToClipboard(`[
  {
    "id": 1,
    "name": "Piso WPC Exterior Gris",
    "description": "Tablones de piso WPC para espacios exteriores",
    "category": "Pisos-WPC",
    "price": 45.99,
    "stock": 100,
    "sku": "WPC-PISO-001",
    "active": true
  }
]`)}
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                    <pre className="text-xs overflow-x-auto">
{`[
  {
    "id": 1,
    "name": "Piso WPC Exterior Gris",
    "description": "Tablones de piso WPC para espacios exteriores",
    "category": "Pisos-WPC",
    "price": 45.99,
    "stock": 100,
    "sku": "WPC-PISO-001",
    "active": true
  }
]`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary">POST</Badge>
                <code className="bg-slate-100 px-2 py-1 rounded">/api/products</code>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Crear un nuevo producto WPC</p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm">Cuerpo de la petición:</h4>
                  <div className="bg-slate-100 p-3 rounded relative">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="absolute top-1 right-1"
                      onClick={() => copyToClipboard(`{
  "name": "Nuevo Producto WPC",
  "description": "Descripción del producto",
  "category": "Pisos-WPC",
  "price": 89.99,
  "stock": 50,
  "image": "https://example.com/image.jpg",
  "sku": "WPC-NEW-001",
  "active": true
}`)}
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                    <pre className="text-xs overflow-x-auto">
{`{
  "name": "Nuevo Producto WPC",
  "description": "Descripción del producto",
  "category": "Pisos-WPC",
  "price": 89.99,
  "stock": 50,
  "image": "https://example.com/image.jpg",
  "sku": "WPC-NEW-001",
  "active": true
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="default">GET</Badge>
                <code className="bg-slate-100 px-2 py-1 rounded">/api/products/:id</code>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Obtener un producto específico por ID</p>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="outline">PUT</Badge>
                <code className="bg-slate-100 px-2 py-1 rounded">/api/products/:id</code>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Actualizar un producto existente</p>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="destructive">DELETE</Badge>
                <code className="bg-slate-100 px-2 py-1 rounded">/api/products/:id</code>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Eliminar un producto</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Endpoints de Clientes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="default">GET</Badge>
                <code className="bg-slate-100 px-2 py-1 rounded">/api/clients</code>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Obtener lista de todos los clientes</p>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary">POST</Badge>
                <code className="bg-slate-100 px-2 py-1 rounded">/api/clients</code>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Crear un nuevo cliente</p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm">Cuerpo de la petición:</h4>
                  <div className="bg-slate-100 p-3 rounded relative">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="absolute top-1 right-1"
                      onClick={() => copyToClipboard(`{
  "name": "Constructora ABC",
  "email": "contacto@construcciones-abc.com",
  "phone": "+34 666 123 456",
  "address": "Calle Principal 123, Madrid",
  "company": "Construcciones ABC SL"
}`)}
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                    <pre className="text-xs overflow-x-auto">
{`{
  "name": "Constructora ABC",
  "email": "contacto@construcciones-abc.com",
  "phone": "+34 666 123 456",
  "address": "Calle Principal 123, Madrid",
  "company": "Construcciones ABC SL"
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Endpoints de Ventas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="default">GET</Badge>
                <code className="bg-slate-100 px-2 py-1 rounded">/api/sales</code>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Obtener lista de todas las ventas</p>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary">POST</Badge>
                <code className="bg-slate-100 px-2 py-1 rounded">/api/sales</code>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Crear una nueva venta</p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm">Cuerpo de la petición:</h4>
                  <div className="bg-slate-100 p-3 rounded relative">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="absolute top-1 right-1"
                      onClick={() => copyToClipboard(`{
  "sale": {
    "clientName": "Constructora ABC",
    "total": 245.97,
    "paymentMethod": "Transferencia",
    "status": "pending",
    "notes": "Proyecto residencial fase 1"
  },
  "items": [
    {
      "productName": "Piso WPC Exterior Gris",
      "quantity": 5,
      "unitPrice": 45.99,
      "subtotal": 229.95
    }
  ]
}`)}
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                    <pre className="text-xs overflow-x-auto">
{`{
  "sale": {
    "clientName": "Constructora ABC",
    "total": 245.97,
    "paymentMethod": "Transferencia",
    "status": "pending",
    "notes": "Proyecto residencial fase 1"
  },
  "items": [
    {
      "productName": "Piso WPC Exterior Gris",
      "quantity": 5,
      "unitPrice": 45.99,
      "subtotal": 229.95
    }
  ]
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Endpoints de Administración</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="default">GET</Badge>
                <code className="bg-slate-100 px-2 py-1 rounded">/api/admin/export/json</code>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Exportar toda la base de datos en formato JSON</p>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="default">GET</Badge>
                <code className="bg-slate-100 px-2 py-1 rounded">/api/admin/export/csv</code>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Exportar productos en formato CSV</p>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="default">GET</Badge>
                <code className="bg-slate-100 px-2 py-1 rounded">/api/admin/export/sql</code>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Exportar esquema de base de datos en formato SQL</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Categorías WPC Específicas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Categorías de Productos</h4>
                <div className="space-y-1 text-sm">
                  <div>• <code>Pisos-WPC</code> - Tablones de piso interior y exterior</div>
                  <div>• <code>Revestimientos</code> - Paneles de revestimiento</div>
                  <div>• <code>Decking-Exterior</code> - Tablones para terrazas</div>
                  <div>• <code>Techos-WPC</code> - Paneles de techo</div>
                  <div>• <code>Accesorios-Instalacion</code> - Clips y accesorios</div>
                  <div>• <code>Perfiles-Estructurales</code> - Vigas y perfiles</div>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Estados de Venta</h4>
                <div className="space-y-1 text-sm">
                  <div>• <code>pending</code> - Pendiente de procesamiento</div>
                  <div>• <code>processing</code> - En proceso</div>
                  <div>• <code>completed</code> - Completada</div>
                  <div>• <code>cancelled</code> - Cancelada</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Descarga de Documentación</CardTitle>
            <CardDescription>Documentación API en formatos técnicos</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start">
              <Download className="mr-2 h-4 w-4" />
              Documentación API Completa (PDF)
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Download className="mr-2 h-4 w-4" />
              Colección Postman (JSON)
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Download className="mr-2 h-4 w-4" />
              Especificación OpenAPI (YAML)
            </Button>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}