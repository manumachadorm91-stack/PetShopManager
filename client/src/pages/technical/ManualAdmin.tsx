import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Database, Users, FileText, Download } from "lucide-react";
import { Link } from "wouter";

export default function ManualAdmin() {
  return (
    <MainLayout title="Manual de Administración">
      <div className="animate-fade-in space-y-6">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/admin">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a Admin
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-primary">Manual de Administración</h1>
            <p className="text-muted-foreground">Guía técnica para administradores del sistema WPCREATION</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Privilegios y Responsabilidades del Administrador
            </CardTitle>
            <CardDescription>
              Comprende las funciones avanzadas y responsabilidades del rol de administrador
            </CardDescription>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <h3>Acceso al Panel de Administración</h3>
            <p>
              El panel de administración está disponible en la ruta <code>/admin</code> y requiere credenciales de administrador. 
              Solo usuarios con rol "Administrador" pueden acceder a estas funcionalidades.
            </p>

            <h3>Gestión de Usuarios</h3>
            <h4>Crear Nuevos Usuarios</h4>
            <ul>
              <li>Accede a la pestaña "Usuarios" en el panel de administración</li>
              <li>Haz clic en "Nuevo Usuario"</li>
              <li>Completa la información requerida: nombre de usuario, email, contraseña</li>
              <li>Asigna el rol apropiado (Administrador, Vendedor, Inventario, Contabilidad, Soporte)</li>
              <li>El usuario será creado con estado "Activo" por defecto</li>
            </ul>

            <h4>Editar Usuarios Existentes</h4>
            <ul>
              <li>Localiza el usuario en la tabla de usuarios</li>
              <li>Haz clic en el ícono de edición</li>
              <li>Modifica la información necesaria</li>
              <li>La contraseña solo se actualiza si se ingresa una nueva</li>
            </ul>

            <h4>Gestión de Estados</h4>
            <ul>
              <li><strong>Activo:</strong> Usuario puede acceder al sistema normalmente</li>
              <li><strong>Inactivo:</strong> Usuario no puede iniciar sesión</li>
              <li>Usa el switch de estado para cambiar entre activo/inactivo</li>
            </ul>

            <h3>Roles y Permisos</h3>
            <h4>Administrador</h4>
            <ul>
              <li>Acceso completo a todas las funcionalidades</li>
              <li>Gestión de usuarios y permisos</li>
              <li>Configuración del sistema</li>
              <li>Acceso a registros de actividad</li>
              <li>Exportación de base de datos</li>
            </ul>

            <h4>Vendedor</h4>
            <ul>
              <li>Gestión de ventas y cotizaciones</li>
              <li>Acceso al catálogo de productos (solo lectura)</li>
              <li>Gestión de clientes</li>
              <li>Reportes básicos de ventas</li>
            </ul>

            <h4>Inventario</h4>
            <ul>
              <li>Gestión completa de productos</li>
              <li>Control de stock y precios</li>
              <li>Actualización de inventario</li>
              <li>Reportes de inventario</li>
            </ul>

            <h4>Contabilidad</h4>
            <ul>
              <li>Acceso a reportes financieros</li>
              <li>Gestión de precios</li>
              <li>Análisis de ventas</li>
              <li>Exportación de datos contables</li>
            </ul>

            <h4>Soporte</h4>
            <ul>
              <li>Acceso a documentación técnica</li>
              <li>Gestión de incidencias</li>
              <li>Soporte a usuarios</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Gestión de Base de Datos
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <h3>Exportación de Datos</h3>
            <p>El sistema ofrece múltiples formatos de exportación:</p>

            <h4>Exportación JSON</h4>
            <ul>
              <li>Incluye todos los datos del sistema</li>
              <li>Formato estructurado para integración con otros sistemas</li>
              <li>Incluye metadatos y timestamp</li>
              <li>Ideal para backups completos</li>
            </ul>

            <h4>Exportación CSV</h4>
            <ul>
              <li>Enfoque en datos de productos</li>
              <li>Compatible con Excel y herramientas de análisis</li>
              <li>Formato tabular simple</li>
              <li>Ideal para análisis de inventario</li>
            </ul>

            <h4>Exportación SQL</h4>
            <ul>
              <li>Esquema completo de la base de datos</li>
              <li>Incluye estructura de tablas y relaciones</li>
              <li>Comentarios sobre el diseño del sistema</li>
              <li>Ideal para documentación técnica</li>
            </ul>

            <h3>Monitoreo del Sistema</h3>
            <h4>Registro de Actividad</h4>
            <p>El sistema mantiene un log detallado de todas las acciones:</p>
            <ul>
              <li>Inicios de sesión y cierres</li>
              <li>Creación, edición y eliminación de registros</li>
              <li>Cambios en configuración</li>
              <li>Acceso a funciones administrativas</li>
            </ul>

            <h4>Información del Sistema</h4>
            <ul>
              <li>Estado de conexión a la base de datos</li>
              <li>Último respaldo realizado</li>
              <li>Número total de registros</li>
              <li>Tamaño de la base de datos</li>
            </ul>

            <h3>Mantenimiento Preventivo</h3>
            <h4>Respaldos Regulares</h4>
            <ul>
              <li>Realizar backup semanal en formato JSON</li>
              <li>Mantener al menos 3 copias de seguridad</li>
              <li>Verificar integridad de los respaldos</li>
              <li>Documentar fechas y contenido de cada backup</li>
            </ul>

            <h4>Optimización de Base de Datos</h4>
            <ul>
              <li>Usar la función "Optimizar Base de Datos" mensualmente</li>
              <li>Monitorear el crecimiento del tamaño de BD</li>
              <li>Revisar y limpiar registros obsoletos</li>
              <li>Actualizar estadísticas de consulta</li>
            </ul>

            <h3>Seguridad</h3>
            <h4>Mejores Prácticas</h4>
            <ul>
              <li>Cambiar contraseñas administrativas regularmente</li>
              <li>Revisar periódicamente usuarios activos</li>
              <li>Monitorear accesos sospechosos en los logs</li>
              <li>Mantener roles y permisos actualizados</li>
              <li>Realizar auditorías de seguridad trimestrales</li>
            </ul>

            <h3>Soporte Técnico Avanzado</h3>
            <p>Para problemas técnicos complejos:</p>
            <ul>
              <li>Email técnico: admin@wpcreation.com</li>
              <li>Soporte 24/7: +34 900 123 457</li>
              <li>Portal de tickets: https://support.wpcreation.com</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Descarga del Manual Completo</CardTitle>
            <CardDescription>Obtén una copia en PDF del manual de administración</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              <Download className="mr-2 h-4 w-4" />
              Descargar Manual de Administración (PDF)
            </Button>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}