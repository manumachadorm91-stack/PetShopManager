import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Download } from "lucide-react";
import { Link } from "wouter";

export default function ManualUsuario() {
  return (
    <MainLayout title="Manual de Usuario">
      <div className="animate-fade-in space-y-6">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/admin">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a Admin
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-primary">Manual de Usuario Final</h1>
            <p className="text-muted-foreground">Guía completa para usuarios del sistema WPCREATION</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Introducción al Sistema WPC Solutions
            </CardTitle>
            <CardDescription>
              Bienvenido al sistema de gestión de productos WPC (Wood Plastic Composite)
            </CardDescription>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <h3>¿Qué es WPCREATION?</h3>
            <p>
              WPCREATION es un sistema especializado para la gestión integral de productos de madera compuesta (Wood Plastic Composite). 
              Este sistema está diseñado específicamente para empresas del sector de construcción y materiales composites.
            </p>

            <h3>Características Principales</h3>
            <ul>
              <li><strong>Catálogo WPC Especializado:</strong> Gestión de productos categorizados por pisos, revestimientos, decking, techos, accesorios y perfiles estructurales</li>
              <li><strong>Control de Inventario:</strong> Seguimiento en tiempo real de stock y disponibilidad</li>
              <li><strong>Gestión de Clientes:</strong> Administración de clientes especializados en construcción</li>
              <li><strong>Sistema de Ventas:</strong> Procesamiento completo de pedidos y facturación</li>
              <li><strong>Reportes y Analytics:</strong> Análisis detallado de ventas y tendencias del mercado</li>
            </ul>

            <h3>Navegación del Sistema</h3>
            <h4>Panel Principal (Inicio)</h4>
            <p>El dashboard principal muestra un resumen ejecutivo con métricas clave:</p>
            <ul>
              <li>Ventas totales del período</li>
              <li>Número de productos activos</li>
              <li>Clientes registrados</li>
              <li>Gráficos de tendencias</li>
            </ul>

            <h4>Catálogo WPC</h4>
            <p>Acceso desde el menú "WPC" donde encontrarás:</p>
            <ul>
              <li><strong>Pisos WPC:</strong> Tablones y sistemas de piso interior y exterior</li>
              <li><strong>Revestimientos:</strong> Paneles para paredes exteriores e interiores</li>
              <li><strong>Decking Exterior:</strong> Tablones para terrazas y espacios exteriores</li>
              <li><strong>Techos WPC:</strong> Paneles de techo con propiedades acústicas</li>
              <li><strong>Accesorios:</strong> Clips, perfiles y elementos de instalación</li>
              <li><strong>Perfiles Estructurales:</strong> Vigas y elementos de soporte</li>
            </ul>

            <h4>Gestión de Productos</h4>
            <p>En la sección "Productos" puedes:</p>
            <ul>
              <li>Ver lista completa de productos WPC</li>
              <li>Agregar nuevos productos con especificaciones técnicas</li>
              <li>Editar información de productos existentes</li>
              <li>Controlar stock y precios</li>
              <li>Activar/desactivar productos</li>
            </ul>

            <h4>Administración de Clientes</h4>
            <p>La sección "Clientes" permite:</p>
            <ul>
              <li>Registrar nuevos clientes especializados</li>
              <li>Mantener datos de contacto actualizados</li>
              <li>Historial de compras por cliente</li>
              <li>Gestión de empresas constructoras</li>
            </ul>

            <h4>Sistema de Ventas</h4>
            <p>En "Ventas" encontrarás:</p>
            <ul>
              <li>Crear nuevas órdenes de venta</li>
              <li>Gestionar cotizaciones</li>
              <li>Seguimiento de estado de pedidos</li>
              <li>Historial completo de transacciones</li>
            </ul>

            <h3>Buenas Prácticas</h3>
            <h4>Gestión de Inventario</h4>
            <ul>
              <li>Actualizar stock regularmente después de recibir mercancía</li>
              <li>Configurar alertas de stock mínimo</li>
              <li>Revisar productos inactivos periódicamente</li>
            </ul>

            <h4>Atención al Cliente</h4>
            <ul>
              <li>Mantener información de contacto actualizada</li>
              <li>Registrar notas importantes en cada venta</li>
              <li>Seguimiento post-venta para proyectos grandes</li>
            </ul>

            <h3>Soporte Técnico</h3>
            <p>Para soporte técnico o consultas sobre el sistema:</p>
            <ul>
              <li>Email: soporte@wpcreation.com</li>
              <li>Teléfono: +34 900 123 456</li>
              <li>Horario: Lunes a Viernes 9:00 - 18:00</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Descarga del Manual Completo</CardTitle>
            <CardDescription>Obtén una copia en PDF del manual completo</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              <Download className="mr-2 h-4 w-4" />
              Descargar Manual de Usuario (PDF)
            </Button>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}