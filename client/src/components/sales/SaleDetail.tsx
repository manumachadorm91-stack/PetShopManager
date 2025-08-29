import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sale, SaleItem } from "@shared/schema";
import { 
  ArrowLeft, 
  Calendar, 
  CreditCard, 
  User,
  ShoppingBag,
  Truck,
  FileText
} from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface SaleDetailProps {
  sale: Sale;
  saleItems: SaleItem[];
  onBack: () => void;
  isLoading?: boolean;
}

export function SaleDetail({ sale, saleItems = [], onBack, isLoading = false }: SaleDetailProps) {
  // Función para formatear precio
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('es-ES', { 
      style: 'currency', 
      currency: 'EUR'
    }).format(price);
  };

  // Función para formatear fecha
  const formatDate = (dateString: string | null): string => {
    if (!dateString) return 'N/A';
    
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  // Función para obtener el color de la insignia de estado
  const getStatusBadgeStyle = (status: string | null) => {
    if (!status) return 'bg-gray-50 text-gray-700 border-gray-200';
    
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'pending':
        return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'canceled':
        return 'bg-red-50 text-red-700 border-red-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  // Traducciones de estados
  const translateStatus = (status: string | null) => {
    if (!status) return 'Desconocido';
    
    switch (status.toLowerCase()) {
      case 'completed':
        return 'Completada';
      case 'pending':
        return 'Pendiente';
      case 'canceled':
        return 'Cancelada';
      default:
        return status;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Detalle de Venta #{sale.id}</h2>
          <p className="text-muted-foreground">
            Información completa de la venta
          </p>
        </div>
        <Button
          variant="outline"
          onClick={onBack}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Listado
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Información básica de la venta */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Información de la Venta
              </span>
              <Badge variant="outline" className={getStatusBadgeStyle(sale.status)}>
                {translateStatus(sale.status)}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Cliente</p>
                <p className="flex items-center gap-2 font-medium">
                  <User className="h-4 w-4 text-muted-foreground" />
                  {sale.clientName}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Fecha</p>
                <p className="flex items-center gap-2 font-medium">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  {formatDate(sale.createdAt)}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Método de pago</p>
                <p className="flex items-center gap-2 font-medium">
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                  {sale.paymentMethod}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Total</p>
                <p className="text-xl font-bold text-primary">
                  {formatPrice(sale.total)}
                </p>
              </div>
            </div>
            {sale.notes && (
              <div className="mt-4 border-t pt-4">
                <p className="text-sm text-muted-foreground">Notas</p>
                <p className="mt-1">{sale.notes}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Resumen */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-primary" />
              Resumen
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Cantidad de productos</span>
                <span className="font-medium">{saleItems.length}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Unidades totales</span>
                <span className="font-medium">
                  {saleItems.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              </div>
              <div className="flex justify-between text-sm border-t border-dashed border-gray-200 pt-2 mt-2">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">
                  {formatPrice(saleItems.reduce((acc, item) => acc + item.subtotal, 0))}
                </span>
              </div>
              <div className="flex justify-between text-sm font-bold">
                <span>Total</span>
                <span className="text-primary">{formatPrice(sale.total)}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detalle de productos */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Truck className="h-5 w-5 text-primary" />
            Productos
          </CardTitle>
          <CardDescription>
            Detalle de los productos incluidos en esta venta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Producto</TableHead>
                <TableHead className="text-right">Cantidad</TableHead>
                <TableHead className="text-right">Precio Unitario</TableHead>
                <TableHead className="text-right">Subtotal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {saleItems.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-4">
                    No hay productos en esta venta
                  </TableCell>
                </TableRow>
              ) : (
                saleItems.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.productName}</TableCell>
                    <TableCell className="text-right">{item.quantity}</TableCell>
                    <TableCell className="text-right">{formatPrice(item.unitPrice)}</TableCell>
                    <TableCell className="text-right font-medium">{formatPrice(item.subtotal)}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-end">
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Total</p>
            <p className="text-xl font-bold text-primary">{formatPrice(sale.total)}</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}