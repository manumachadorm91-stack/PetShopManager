import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQuery } from "@tanstack/react-query";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Sale } from "@shared/schema";

const COLORS = ["#26a69a", "#ffba57", "#26c281", "#e74c3c", "#ffb72b", "#7c6e5d"];

export default function Reports() {
  // Consulta para obtener las ventas para los informes
  const { data: sales = [], isLoading: isLoadingSales } = useQuery<Sale[]>({
    queryKey: ["/api/sales"],
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });

  // Datos calculados para los gráficos
  const salesByMonth = calculateSalesByMonth(sales);
  const salesByPaymentMethod = calculateSalesByPaymentMethod(sales);

  // Verificar cantidad de datos para mostrar alternativa si no hay suficiente información
  const hasEnoughData = sales.length > 0;

  return (
    <MainLayout title="Informes">
      <div className="animate-fade-in space-y-4">
        <h1 className="text-2xl font-bold text-primary">Panel de Informes</h1>
        <p className="text-muted-foreground">
          Visualiza estadísticas y reportes de la tienda de mascotas.
        </p>
        
        {!hasEnoughData && (
          <div className="p-4 bg-muted rounded-lg mb-4">
            <h3 className="font-medium text-lg">Información de demostración</h3>
            <p className="text-muted-foreground">
              Actualmente no hay suficientes datos para generar informes completos. Los gráficos mostrados contienen datos de muestra para fines ilustrativos.
            </p>
          </div>
        )}
        
        <Tabs defaultValue="sales" className="w-full mt-6">
          <TabsList className="mb-4">
            <TabsTrigger value="sales">Ventas</TabsTrigger>
            <TabsTrigger value="inventory">Inventario</TabsTrigger>
            <TabsTrigger value="clients">Clientes</TabsTrigger>
          </TabsList>
          
          <TabsContent value="sales" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Gráfico de Ventas Mensuales */}
              <Card>
                <CardHeader>
                  <CardTitle>Ventas por Mes</CardTitle>
                  <CardDescription>
                    Análisis de ventas mensuales del año actual
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  {isLoadingSales ? (
                    <div className="flex items-center justify-center h-full">
                      <p>Cargando datos...</p>
                    </div>
                  ) : (
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={salesByMonth}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip formatter={(value) => [`$${value}`, 'Ventas']} />
                        <Legend />
                        <Bar dataKey="value" fill="#26a69a" name="Ventas ($)" />
                      </BarChart>
                    </ResponsiveContainer>
                  )}
                </CardContent>
              </Card>
              
              {/* Gráfico de Métodos de Pago */}
              <Card>
                <CardHeader>
                  <CardTitle>Métodos de Pago</CardTitle>
                  <CardDescription>
                    Distribución de ventas por método de pago
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  {isLoadingSales ? (
                    <div className="flex items-center justify-center h-full">
                      <p>Cargando datos...</p>
                    </div>
                  ) : (
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={salesByPaymentMethod}
                          cx="50%"
                          cy="50%"
                          labelLine={true}
                          label={renderCustomizedLabel}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {salesByPaymentMethod.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => [`$${value}`, 'Total']} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  )}
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Resumen de Ventas</CardTitle>
                <CardDescription>
                  Estadísticas generales de ventas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="text-lg font-medium">Total Ventas</h3>
                    <p className="text-3xl font-bold text-primary">
                      ${calculateTotalSales(sales || [])}
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="text-lg font-medium">Ventas Mensuales</h3>
                    <p className="text-3xl font-bold text-secondary">
                      ${calculateCurrentMonthSales(sales || [])}
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="text-lg font-medium">Número de Ventas</h3>
                    <p className="text-3xl font-bold text-accent">
                      {sales?.length || 0}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="inventory" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Estado de Inventario</CardTitle>
                <CardDescription>
                  Esta sección está en desarrollo
                </CardDescription>
              </CardHeader>
              <CardContent className="h-60 flex items-center justify-center">
                <p className="text-muted-foreground text-center">
                  El módulo de informes de inventario estará disponible próximamente.<br />
                  Estamos trabajando para proporcionar análisis detallados de stock.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="clients" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Análisis de Clientes</CardTitle>
                <CardDescription>
                  Esta sección está en desarrollo
                </CardDescription>
              </CardHeader>
              <CardContent className="h-60 flex items-center justify-center">
                <p className="text-muted-foreground text-center">
                  El módulo de análisis de clientes estará disponible próximamente.<br />
                  Estamos trabajando para proporcionar insights valiosos sobre sus clientes.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}

// Función para etiquetar el gráfico circular
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }: any) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius * 1.1;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text 
      x={x} 
      y={y} 
      fill={COLORS[index % COLORS.length]}
      textAnchor={x > cx ? 'start' : 'end'} 
      dominantBaseline="central"
      fontSize={12}
    >
      {`${name} (${(percent * 100).toFixed(0)}%)`}
    </text>
  );
};

// Funciones de cálculo para los informes
function calculateSalesByMonth(sales: Sale[]) {
  const monthNames = [
    "Ene", "Feb", "Mar", "Abr", "May", "Jun", 
    "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
  ];

  // Inicializar datos con todos los meses y valores en cero
  const monthlySales = monthNames.map(name => ({ name, value: 0 }));
  
  // Llenar con datos reales
  sales.forEach(sale => {
    if (sale.createdAt) {
      const saleDate = new Date(sale.createdAt);
      const monthIndex = saleDate.getMonth();
      monthlySales[monthIndex].value += sale.total;
    }
  });
  
  return monthlySales;
}

function calculateSalesByPaymentMethod(sales: Sale[]) {
  const paymentMethods: Record<string, number> = {};
  
  sales.forEach(sale => {
    if (sale.paymentMethod) {
      if (!paymentMethods[sale.paymentMethod]) {
        paymentMethods[sale.paymentMethod] = 0;
      }
      paymentMethods[sale.paymentMethod] += sale.total;
    }
  });
  
  return Object.entries(paymentMethods).map(([name, value]) => ({
    name,
    value
  }));
}

function calculateTotalSales(sales: Sale[]) {
  return sales.reduce((total, sale) => total + sale.total, 0).toFixed(2);
}

function calculateCurrentMonthSales(sales: Sale[]) {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  
  const monthlySales = sales.reduce((total, sale) => {
    if (sale.createdAt) {
      const saleDate = new Date(sale.createdAt);
      if (saleDate.getMonth() === currentMonth && saleDate.getFullYear() === currentYear) {
        return total + sale.total;
      }
    }
    return total;
  }, 0);
  
  return monthlySales.toFixed(2);
}