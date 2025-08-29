import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Grid3X3, Users, Package, ShoppingCart, Building, Layers, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <MainLayout title="Panel Principal">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary mb-4">WPC Solutions Admin</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sistema de gestión integral para productos de madera compuesta (WPC). 
            Administra catálogo, clientes, inventario y ventas de manera profesional.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">Wood Plastic Composite</h2>
          <p className="text-muted-foreground mb-4">
            Soluciones innovadoras en madera compuesta que combinan la belleza natural de la madera 
            con la durabilidad del plástico. Productos ideales para aplicaciones de interior y exterior 
            con mínimo mantenimiento y máxima resistencia.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm">Resistente a humedad y UV</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm">Bajo mantenimiento</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm">Ecológicamente responsable</span>
            </div>
          </div>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Link href="/wpc">
            <Card className="cursor-pointer hover:shadow-md transition-all hover:scale-105">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-primary">Catálogo WPC</CardTitle>
                <Grid3X3 className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Explorar Productos</div>
                <p className="text-xs text-muted-foreground">
                  Interior, exterior y accesorios WPC
                </p>
              </CardContent>
            </Card>
          </Link>
          
          <Link href="/clients">
            <Card className="cursor-pointer hover:shadow-md transition-all hover:scale-105">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-primary">Clientes</CardTitle>
                <Users className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Gestionar Clientes</div>
                <p className="text-xs text-muted-foreground">
                  Administra tu cartera de clientes
                </p>
              </CardContent>
            </Card>
          </Link>
          
          <Link href="/products">
            <Card className="cursor-pointer hover:shadow-md transition-all hover:scale-105">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-primary">Inventario</CardTitle>
                <Package className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Control Stock</div>
                <p className="text-xs text-muted-foreground">
                  Gestiona inventario de productos WPC
                </p>
              </CardContent>
            </Card>
          </Link>
          
          <Link href="/sales">
            <Card className="cursor-pointer hover:shadow-md transition-all hover:scale-105">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-primary">Ventas</CardTitle>
                <ShoppingCart className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Gestionar Ventas</div>
                <p className="text-xs text-muted-foreground">
                  Registra y analiza tus ventas
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/reports">
            <Card className="cursor-pointer hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-primary">Informes y Análisis</CardTitle>
                <TrendingUp className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">Reportes de Negocio</div>
                <p className="text-xs text-muted-foreground">
                  Estadísticas de ventas y rendimiento
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin">
            <Card className="cursor-pointer hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-primary">Administración</CardTitle>
                <Building className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">Panel Admin</div>
                <p className="text-xs text-muted-foreground">
                  Configuración y gestión de usuarios
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
