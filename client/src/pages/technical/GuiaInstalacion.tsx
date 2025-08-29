import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Wrench, AlertTriangle, CheckCircle, Download } from "lucide-react";
import { Link } from "wouter";

export default function GuiaInstalacion() {
  return (
    <MainLayout title="Guía de Instalación WPC">
      <div className="animate-fade-in space-y-6">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/admin">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a Admin
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-primary">Guía de Instalación WPC</h1>
            <p className="text-muted-foreground">Instrucciones técnicas para la instalación de productos WPC</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wrench className="h-5 w-5" />
              Consideraciones Generales de Instalación WPC
            </CardTitle>
            <CardDescription>
              Información esencial antes de comenzar cualquier instalación de productos WPC
            </CardDescription>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                <h4 className="text-yellow-800 font-semibold mb-0">Importante</h4>
              </div>
              <p className="text-yellow-800 mb-0">
                Los productos WPC requieren técnicas de instalación específicas. Seguir estas instrucciones 
                garantiza la durabilidad y estética del producto final.
              </p>
            </div>

            <h3>Herramientas Necesarias</h3>
            <h4>Herramientas Básicas</h4>
            <ul>
              <li>Sierra circular con disco de dientes finos (60+ dientes)</li>
              <li>Taladro/atornillador</li>
              <li>Nivel de burbuja</li>
              <li>Cinta métrica</li>
              <li>Lápiz de carpintero</li>
              <li>Escuadra</li>
            </ul>

            <h4>Herramientas Especializadas</h4>
            <ul>
              <li>Broca piloto para pre-perforado</li>
              <li>Clips de instalación invisible (cuando aplique)</li>
              <li>Separadores de dilatación</li>
              <li>Lima o cepillo para acabados</li>
            </ul>

            <h3>Preparación del Área</h3>
            <h4>Superficie de Instalación</h4>
            <ul>
              <li>La superficie debe estar nivelada, limpia y seca</li>
              <li>Eliminar cualquier resto de instalaciones anteriores</li>
              <li>Verificar que la estructura de soporte esté en buen estado</li>
              <li>Asegurar drenaje adecuado en instalaciones exteriores</li>
            </ul>

            <h4>Aclimatación del Material</h4>
            <ul>
              <li>Dejar el material WPC en el sitio de instalación 24-48 horas antes</li>
              <li>Almacenar en superficie plana y ventilada</li>
              <li>Proteger de la humedad directa</li>
              <li>Temperatura ambiente recomendada: 15-25°C</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Instalación de Pisos WPC</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <h3>Instalación Interior</h3>
            <h4>Paso 1: Preparación del Sustrato</h4>
            <ul>
              <li>Verificar que el sustrato esté completamente nivelado</li>
              <li>Instalar barrera de vapor si es necesario</li>
              <li>Colocar base aislante acústica (recomendado)</li>
            </ul>

            <h4>Paso 2: Primera Fila</h4>
            <ul>
              <li>Comenzar desde la pared más larga y recta</li>
              <li>Dejar junta de dilatación de 8-10mm en perímetro</li>
              <li>Usar separadores para mantener la distancia</li>
              <li>Verificar que la primera fila esté perfectamente recta</li>
            </ul>

            <h4>Paso 3: Instalación Progresiva</h4>
            <ul>
              <li>Instalar fila por fila, escalonando las juntas</li>
              <li>Usar sistema de machihembrado del producto</li>
              <li>Golpear suavemente con taco de goma para asegurar unión</li>
              <li>Verificar nivel cada 3-4 filas</li>
            </ul>

            <h3>Instalación Exterior (Decking)</h3>
            <h4>Estructura de Soporte</h4>
            <ul>
              <li>Usar vigas de soporte cada 40cm máximo</li>
              <li>Asegurar pendiente de drenaje mínima 1%</li>
              <li>Dejar ventilación bajo la superficie</li>
              <li>Usar soportes ajustables en altura si es necesario</li>
            </ul>

            <h4>Fijación de Tablones</h4>
            <ul>
              <li>Pre-perforar siempre antes de atornillar</li>
              <li>Usar tornillos de acero inoxidable</li>
              <li>Dejar junta de dilatación de 5-8mm entre tablones</li>
              <li>Comenzar fijación desde el centro hacia los extremos</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Instalación de Revestimientos</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <h3>Revestimiento Exterior</h3>
            <h4>Sistema de Fijación</h4>
            <ul>
              <li>Instalar estructura de soporte vertical cada 60cm</li>
              <li>Usar clips de fijación invisible cuando esté disponible</li>
              <li>Asegurar ventilación trasera del revestimiento</li>
              <li>Verificar nivel y plomada constantemente</li>
            </ul>

            <h4>Juntas y Acabados</h4>
            <ul>
              <li>Usar perfiles de esquina y remate apropiados</li>
              <li>Sellar juntas expuestas con silicona neutra</li>
              <li>Instalar goteros en partes superiores</li>
              <li>Verificar que no haya puntos de acumulación de agua</li>
            </ul>

            <h3>Instalación de Techos WPC</h3>
            <h4>Estructura de Soporte</h4>
            <ul>
              <li>Calcular cargas según normativa local</li>
              <li>Instalar estructura metálica o de madera tratada</li>
              <li>Asegurar pendiente mínima para evacuación de agua</li>
              <li>Dejar paso para instalaciones (iluminación, ventilación)</li>
            </ul>

            <h4>Montaje de Paneles</h4>
            <ul>
              <li>Comenzar desde un extremo y avanzar sistemáticamente</li>
              <li>Usar sistema de unión machihembrado</li>
              <li>Verificar alineación cada panel instalado</li>
              <li>Instalar elementos de iluminación integrada si aplica</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Mantenimiento Post-Instalación</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <h3>Período de Asentamiento</h3>
            <ul>
              <li>Evitar cargas pesadas primeras 48 horas</li>
              <li>No usar productos de limpieza abrasivos</li>
              <li>Verificar que no hay elementos sueltos</li>
              <li>Revisar juntas y fijaciones después de una semana</li>
            </ul>

            <h3>Mantenimiento Regular</h3>
            <h4>Limpieza</h4>
            <ul>
              <li>Limpieza regular con agua y jabón neutro</li>
              <li>Para manchas difíciles: solución de agua y vinagre blanco</li>
              <li>Evitar productos químicos agresivos</li>
              <li>Secar completamente después de la limpieza</li>
            </ul>

            <h4>Inspección Periódica</h4>
            <ul>
              <li>Revisar estado de juntas y sellados (cada 6 meses)</li>
              <li>Verificar fijaciones en instalaciones exteriores</li>
              <li>Limpiar sistemas de drenaje</li>
              <li>Revisar elementos de acabado y perfiles</li>
            </ul>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <h4 className="text-green-800 font-semibold mb-0">Garantía</h4>
              </div>
              <p className="text-green-800 mb-0">
                Siguiendo estas instrucciones de instalación, nuestros productos WPC mantienen 
                garantía completa por 10 años en uso residencial y 5 años en uso comercial.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Descarga de Guías Técnicas</CardTitle>
            <CardDescription>Documentación técnica detallada en formato PDF</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start">
              <Download className="mr-2 h-4 w-4" />
              Guía de Instalación Completa (PDF)
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Download className="mr-2 h-4 w-4" />
              Especificaciones Técnicas por Producto
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Download className="mr-2 h-4 w-4" />
              Videos Tutoriales de Instalación
            </Button>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}