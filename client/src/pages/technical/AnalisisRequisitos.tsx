import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Database, Users, ShoppingCart, BarChart3, Download } from "lucide-react";
import { Link } from "wouter";

export default function AnalisisRequisitos() {
  return (
    <MainLayout title="Análisis de Requisitos">
      <div className="animate-fade-in space-y-6">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/admin">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a Admin
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-primary">Análisis de Requisitos</h1>
            <p className="text-muted-foreground">Documento completo de requisitos funcionales del sistema WPCREATION</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Visión General del Proyecto
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <h3>Objetivo del Sistema</h3>
            <p>
              WPCREATION es un sistema de gestión empresarial especializado en productos de madera compuesta 
              (Wood Plastic Composite), diseñado para optimizar las operaciones comerciales de empresas del sector 
              de materiales de construcción sostenibles.
            </p>

            <h3>Alcance del Proyecto</h3>
            <ul>
              <li>Gestión integral de catálogo de productos WPC</li>
              <li>Administración de clientes especializados en construcción</li>
              <li>Sistema de ventas y facturación</li>
              <li>Control de inventario y stock</li>
              <li>Reportes y análisis de negocio</li>
              <li>Panel de administración avanzado</li>
            </ul>

            <h3>Stakeholders</h3>
            <h4>Usuarios Primarios</h4>
            <ul>
              <li><strong>Administradores:</strong> Gestión completa del sistema</li>
              <li><strong>Vendedores:</strong> Gestión de ventas y clientes</li>
              <li><strong>Personal de Inventario:</strong> Control de productos y stock</li>
              <li><strong>Contabilidad:</strong> Reportes financieros y análisis</li>
            </ul>

            <h4>Usuarios Secundarios</h4>
            <ul>
              <li><strong>Soporte Técnico:</strong> Mantenimiento y documentación</li>
              <li><strong>Gerencia:</strong> Visualización de KPIs y métricas</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Requisitos Funcionales
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <h3>RF001 - Gestión de Productos WPC</h3>
            <p><strong>Descripción:</strong> El sistema debe permitir la gestión completa de productos WPC categorizados por tipo.</p>
            <p><strong>Prioridad:</strong> Alta</p>
            <h4>Criterios de Aceptación:</h4>
            <ul>
              <li>Crear, editar, eliminar y consultar productos</li>
              <li>Categorización específica: Pisos, Revestimientos, Decking, Techos, Accesorios, Perfiles</li>
              <li>Campos: nombre, descripción, categoría, precio, stock, imagen, SKU, estado</li>
              <li>Validación de datos obligatorios y formatos</li>
              <li>Control de stock con alertas de mínimos</li>
            </ul>

            <h3>RF002 - Administración de Clientes</h3>
            <p><strong>Descripción:</strong> Gestión de clientes especializados en construcción y WPC.</p>
            <p><strong>Prioridad:</strong> Alta</p>
            <h4>Criterios de Aceptación:</h4>
            <ul>
              <li>Registro de clientes con datos de contacto completos</li>
              <li>Categorización: particulares, empresas constructoras, distribuidores</li>
              <li>Historial de compras por cliente</li>
              <li>Búsqueda y filtrado avanzado</li>
            </ul>

            <h3>RF003 - Sistema de Ventas</h3>
            <p><strong>Descripción:</strong> Procesamiento completo de órdenes de venta y facturación.</p>
            <p><strong>Prioridad:</strong> Alta</p>
            <h4>Criterios de Aceptación:</h4>
            <ul>
              <li>Crear órdenes de venta con múltiples productos</li>
              <li>Cálculo automático de totales e impuestos</li>
              <li>Múltiples métodos de pago</li>
              <li>Estados de orden: pendiente, procesando, completada, cancelada</li>
              <li>Actualización automática de stock</li>
            </ul>

            <h3>RF004 - Reportes y Analytics</h3>
            <p><strong>Descripción:</strong> Generación de reportes de negocio y análisis de datos.</p>
            <p><strong>Prioridad:</strong> Media</p>
            <h4>Criterios de Aceptación:</h4>
            <ul>
              <li>Dashboard ejecutivo con KPIs principales</li>
              <li>Reportes de ventas por período, producto, cliente</li>
              <li>Análisis de inventario y rotación</li>
              <li>Gráficos interactivos y exportación de datos</li>
            </ul>

            <h3>RF005 - Panel de Administración</h3>
            <p><strong>Descripción:</strong> Interface administrativa para gestión del sistema.</p>
            <p><strong>Prioridad:</strong> Alta</p>
            <h4>Criterios de Aceptación:</h4>
            <ul>
              <li>Gestión de usuarios y roles</li>
              <li>Configuración del sistema</li>
              <li>Registro de actividad y auditoría</li>
              <li>Exportación de base de datos (JSON, CSV, SQL)</li>
              <li>Herramientas de mantenimiento</li>
            </ul>

            <h3>RF006 - Catálogo WPC Público</h3>
            <p><strong>Descripción:</strong> Catálogo público de productos WPC con navegación por categorías.</p>
            <p><strong>Prioridad:</strong> Media</p>
            <h4>Criterios de Aceptación:</h4>
            <ul>
              <li>Navegación intuitiva por categorías WPC</li>
              <li>Visualización detallada de productos</li>
              <li>Filtros por precio, categoría, disponibilidad</li>
              <li>Diseño responsive y optimizado</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Requisitos No Funcionales</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <h3>RNF001 - Usabilidad</h3>
            <ul>
              <li>Interface intuitiva con curva de aprendizaje máxima de 2 horas</li>
              <li>Diseño responsive para dispositivos móviles y tablets</li>
              <li>Navegación consistente y clara</li>
              <li>Mensajes de error informativos</li>
            </ul>

            <h3>RNF002 - Rendimiento</h3>
            <ul>
              <li>Tiempo de carga de páginas &lt; 3 segundos</li>
              <li>Soporte para hasta 100 usuarios concurrentes</li>
              <li>Base de datos optimizada para consultas frecuentes</li>
              <li>Implementación de caché donde sea apropiado</li>
            </ul>

            <h3>RNF003 - Seguridad</h3>
            <ul>
              <li>Autenticación segura con sesiones</li>
              <li>Control de acceso basado en roles</li>
              <li>Validación de entrada en cliente y servidor</li>
              <li>Logs de auditoría para acciones críticas</li>
            </ul>

            <h3>RNF004 - Mantenibilidad</h3>
            <ul>
              <li>Código bien documentado y estructurado</li>
              <li>Arquitectura modular y escalable</li>
              <li>Pruebas automatizadas para funciones críticas</li>
              <li>Facilidad para actualizaciones y despliegues</li>
            </ul>

            <h3>RNF005 - Compatibilidad</h3>
            <ul>
              <li>Compatibilidad con navegadores modernos (Chrome, Firefox, Safari, Edge)</li>
              <li>Soporte para dispositivos iOS y Android</li>
              <li>Exportación compatible con Excel y herramientas de análisis</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Casos de Uso Principales
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <h3>UC001 - Gestionar Catálogo de Productos</h3>
            <p><strong>Actor:</strong> Personal de Inventario</p>
            <p><strong>Flujo Principal:</strong></p>
            <ol>
              <li>Usuario accede a la sección de productos</li>
              <li>Selecciona "Agregar Producto"</li>
              <li>Completa información del producto WPC</li>
              <li>Selecciona categoría específica</li>
              <li>Carga imagen del producto</li>
              <li>Define precio y stock inicial</li>
              <li>Sistema valida y guarda el producto</li>
            </ol>

            <h3>UC002 - Procesar Venta</h3>
            <p><strong>Actor:</strong> Vendedor</p>
            <p><strong>Flujo Principal:</strong></p>
            <ol>
              <li>Vendedor inicia nueva venta</li>
              <li>Busca y selecciona cliente</li>
              <li>Agrega productos al carrito</li>
              <li>Sistema calcula total automáticamente</li>
              <li>Selecciona método de pago</li>
              <li>Confirma la venta</li>
              <li>Sistema actualiza stock y registra venta</li>
            </ol>

            <h3>UC003 - Generar Reportes</h3>
            <p><strong>Actor:</strong> Administrador/Contabilidad</p>
            <p><strong>Flujo Principal:</strong></p>
            <ol>
              <li>Usuario accede a sección de reportes</li>
              <li>Selecciona tipo de reporte</li>
              <li>Define período de análisis</li>
              <li>Aplica filtros específicos</li>
              <li>Sistema genera reporte</li>
              <li>Usuario visualiza y exporta datos</li>
            </ol>

            <h3>UC004 - Exportar Base de Datos</h3>
            <p><strong>Actor:</strong> Administrador</p>
            <p><strong>Flujo Principal:</strong></p>
            <ol>
              <li>Administrador accede a panel admin</li>
              <li>Navega a sección de base de datos</li>
              <li>Selecciona formato de exportación</li>
              <li>Sistema genera archivo de exportación</li>
              <li>Archivo se descarga automáticamente</li>
              <li>Sistema registra acción en logs</li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Arquitectura del Sistema
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <h3>Arquitectura Técnica</h3>
            <h4>Frontend</h4>
            <ul>
              <li><strong>Framework:</strong> React 18 con TypeScript</li>
              <li><strong>UI Library:</strong> shadcn/ui + Radix UI</li>
              <li><strong>Styling:</strong> Tailwind CSS</li>
              <li><strong>Routing:</strong> Wouter</li>
              <li><strong>State Management:</strong> TanStack Query</li>
              <li><strong>Forms:</strong> React Hook Form + Zod</li>
            </ul>

            <h4>Backend</h4>
            <ul>
              <li><strong>Runtime:</strong> Node.js</li>
              <li><strong>Framework:</strong> Express.js</li>
              <li><strong>Language:</strong> TypeScript</li>
              <li><strong>ORM:</strong> Drizzle ORM</li>
              <li><strong>Database:</strong> PostgreSQL (Neon)</li>
              <li><strong>Authentication:</strong> Express Sessions</li>
            </ul>

            <h4>Infraestructura</h4>
            <ul>
              <li><strong>Hosting:</strong> Replit Cloud</li>
              <li><strong>Database:</strong> Neon Serverless PostgreSQL</li>
              <li><strong>Build Tool:</strong> Vite</li>
              <li><strong>Package Manager:</strong> npm</li>
            </ul>

            <h3>Patrones de Diseño</h3>
            <ul>
              <li><strong>MVC:</strong> Separación de responsabilidades</li>
              <li><strong>Repository Pattern:</strong> Abstracción de acceso a datos</li>
              <li><strong>Component Composition:</strong> Reutilización de UI</li>
              <li><strong>RESTful API:</strong> Interface estándar de comunicación</li>
            </ul>

            <h3>Diagrama de Flujo de Datos</h3>
            <p>
              Cliente → React Router → Component → React Query → API Routes → 
              Storage Layer → Drizzle ORM → PostgreSQL Database
            </p>

            <h3>Modelo de Base de Datos</h3>
            <h4>Entidades Principales</h4>
            <ul>
              <li><strong>Products:</strong> Catálogo de productos WPC</li>
              <li><strong>Clients:</strong> Información de clientes</li>
              <li><strong>Sales:</strong> Órdenes de venta</li>
              <li><strong>SaleItems:</strong> Detalles de productos por venta</li>
              <li><strong>Users:</strong> Usuarios del sistema</li>
            </ul>

            <h4>Relaciones</h4>
            <ul>
              <li>Sales → Clients (Many to One)</li>
              <li>SaleItems → Sales (Many to One)</li>
              <li>SaleItems → Products (Many to One)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Descarga de Documentación</CardTitle>
            <CardDescription>Documentos técnicos completos en formato PDF</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start">
              <Download className="mr-2 h-4 w-4" />
              Análisis de Requisitos Completo (PDF)
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Download className="mr-2 h-4 w-4" />
              Diagramas UML y Casos de Uso
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Download className="mr-2 h-4 w-4" />
              Especificaciones Técnicas de Arquitectura
            </Button>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}