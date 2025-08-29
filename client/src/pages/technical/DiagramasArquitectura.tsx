import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Layers, GitBranch, Database, Cloud, Download } from "lucide-react";
import { Link } from "wouter";

export default function DiagramasArquitectura() {
  return (
    <MainLayout title="Diagramas de Arquitectura">
      <div className="animate-fade-in space-y-6">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/admin">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a Admin
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-primary">Diagramas de Arquitectura</h1>
            <p className="text-muted-foreground">Diagramas UML y de flujo del sistema WPCREATION</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-5 w-5" />
              Arquitectura del Sistema
            </CardTitle>
            <CardDescription>
              Visión general de la arquitectura técnica del sistema WPCREATION
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-slate-50 border-2 border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-center">Arquitectura de Capas</h3>
              <div className="space-y-4">
                <div className="bg-blue-100 border border-blue-300 rounded p-3 text-center">
                  <div className="font-semibold text-blue-800">Capa de Presentación</div>
                  <div className="text-sm text-blue-600">React 18 + TypeScript + Tailwind CSS</div>
                </div>
                <div className="flex justify-center">
                  <div className="w-px h-6 bg-slate-300"></div>
                </div>
                <div className="bg-green-100 border border-green-300 rounded p-3 text-center">
                  <div className="font-semibold text-green-800">Capa de Aplicación</div>
                  <div className="text-sm text-green-600">Express.js + Node.js + TypeScript</div>
                </div>
                <div className="flex justify-center">
                  <div className="w-px h-6 bg-slate-300"></div>
                </div>
                <div className="bg-purple-100 border border-purple-300 rounded p-3 text-center">
                  <div className="font-semibold text-purple-800">Capa de Acceso a Datos</div>
                  <div className="text-sm text-purple-600">Drizzle ORM + Storage Pattern</div>
                </div>
                <div className="flex justify-center">
                  <div className="w-px h-6 bg-slate-300"></div>
                </div>
                <div className="bg-orange-100 border border-orange-300 rounded p-3 text-center">
                  <div className="font-semibold text-orange-800">Capa de Datos</div>
                  <div className="text-sm text-orange-600">PostgreSQL (Neon Serverless)</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitBranch className="h-5 w-5" />
              Flujo de Datos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-slate-50 border-2 border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-center">Flujo de Petición HTTP</h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                <div className="bg-blue-100 border border-blue-300 rounded p-3 text-center">
                  <div className="font-semibold text-blue-800">Cliente</div>
                  <div className="text-xs text-blue-600">React App</div>
                </div>
                <div className="flex justify-center">
                  <div className="text-slate-400">→</div>
                </div>
                <div className="bg-green-100 border border-green-300 rounded p-3 text-center">
                  <div className="font-semibold text-green-800">API</div>
                  <div className="text-xs text-green-600">Express Routes</div>
                </div>
                <div className="flex justify-center">
                  <div className="text-slate-400">→</div>
                </div>
                <div className="bg-purple-100 border border-purple-300 rounded p-3 text-center">
                  <div className="font-semibold text-purple-800">Storage</div>
                  <div className="text-xs text-purple-600">Business Logic</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border-2 border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-center">Gestión de Estado</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded">
                  <span className="font-medium">Estado del Servidor</span>
                  <span className="text-sm text-slate-600">TanStack Query (React Query)</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded">
                  <span className="font-medium">Estado Local</span>
                  <span className="text-sm text-slate-600">React useState + useReducer</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded">
                  <span className="font-medium">Formularios</span>
                  <span className="text-sm text-slate-600">React Hook Form + Zod</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded">
                  <span className="font-medium">Navegación</span>
                  <span className="text-sm text-slate-600">Wouter Router</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Modelo de Base de Datos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-slate-50 border-2 border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-center">Entidades y Relaciones</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="bg-white border-2 border-blue-300 rounded-lg p-4">
                    <div className="font-semibold text-blue-800 border-b border-blue-200 pb-2 mb-2">Products</div>
                    <div className="text-sm space-y-1">
                      <div>• id (PK)</div>
                      <div>• name</div>
                      <div>• description</div>
                      <div>• category</div>
                      <div>• price</div>
                      <div>• stock</div>
                      <div>• sku</div>
                      <div>• active</div>
                    </div>
                  </div>
                  
                  <div className="bg-white border-2 border-green-300 rounded-lg p-4">
                    <div className="font-semibold text-green-800 border-b border-green-200 pb-2 mb-2">Clients</div>
                    <div className="text-sm space-y-1">
                      <div>• id (PK)</div>
                      <div>• name</div>
                      <div>• email</div>
                      <div>• phone</div>
                      <div>• address</div>
                      <div>• company</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-white border-2 border-purple-300 rounded-lg p-4">
                    <div className="font-semibold text-purple-800 border-b border-purple-200 pb-2 mb-2">Sales</div>
                    <div className="text-sm space-y-1">
                      <div>• id (PK)</div>
                      <div>• client_name</div>
                      <div>• total</div>
                      <div>• payment_method</div>
                      <div>• status</div>
                      <div>• notes</div>
                    </div>
                  </div>
                  
                  <div className="bg-white border-2 border-orange-300 rounded-lg p-4">
                    <div className="font-semibold text-orange-800 border-b border-orange-200 pb-2 mb-2">Sale_Items</div>
                    <div className="text-sm space-y-1">
                      <div>• id (PK)</div>
                      <div>• sale_id (FK)</div>
                      <div>• product_name</div>
                      <div>• quantity</div>
                      <div>• unit_price</div>
                      <div>• subtotal</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Relaciones</h4>
                <div className="text-sm text-yellow-700 space-y-1">
                  <div>• Sales → Clients (Many to One)</div>
                  <div>• Sale_Items → Sales (Many to One)</div>
                  <div>• Sale_Items → Products (Many to One por nombre)</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cloud className="h-5 w-5" />
              Infraestructura de Despliegue
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-slate-50 border-2 border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-center">Arquitectura Cloud</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 text-center">
                  <div className="font-semibold text-blue-800">Frontend</div>
                  <div className="text-sm text-blue-600 mt-2">Replit Static Hosting</div>
                  <div className="text-xs text-blue-500 mt-1">React + Vite Build</div>
                </div>
                
                <div className="bg-green-100 border border-green-300 rounded-lg p-4 text-center">
                  <div className="font-semibold text-green-800">Backend API</div>
                  <div className="text-sm text-green-600 mt-2">Replit Node.js Runtime</div>
                  <div className="text-xs text-green-500 mt-1">Express.js Server</div>
                </div>
                
                <div className="bg-purple-100 border border-purple-300 rounded-lg p-4 text-center">
                  <div className="font-semibold text-purple-800">Base de Datos</div>
                  <div className="text-sm text-purple-600 mt-2">Neon Serverless</div>
                  <div className="text-xs text-purple-500 mt-1">PostgreSQL Cloud</div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-orange-100 border border-orange-300 rounded-lg p-4">
                  <div className="font-semibold text-orange-800 mb-2">Características Técnicas</div>
                  <div className="text-sm text-orange-700 space-y-1">
                    <div>• Auto-scaling serverless</div>
                    <div>• SSL/TLS automático</div>
                    <div>• CDN global integrado</div>
                    <div>• Monitoreo en tiempo real</div>
                  </div>
                </div>
                
                <div className="bg-red-100 border border-red-300 rounded-lg p-4">
                  <div className="font-semibold text-red-800 mb-2">Beneficios</div>
                  <div className="text-sm text-red-700 space-y-1">
                    <div>• Cero configuración de servidor</div>
                    <div>• Escalabilidad automática</div>
                    <div>• Respaldos automáticos</div>
                    <div>• Alta disponibilidad</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Descarga de Diagramas</CardTitle>
            <CardDescription>Documentación visual técnica en formatos profesionales</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start">
              <Download className="mr-2 h-4 w-4" />
              Diagramas UML Completos (PDF)
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Download className="mr-2 h-4 w-4" />
              Diagramas de Flujo de Datos (SVG)
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Download className="mr-2 h-4 w-4" />
              Esquemas de Base de Datos (ERD)
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Download className="mr-2 h-4 w-4" />
              Arquitectura de Infraestructura (Visio)
            </Button>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}