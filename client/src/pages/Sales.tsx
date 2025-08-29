import { useState } from "react";
import { SaleTable } from "@/components/sales/SaleTable";
import { SaleDetail } from "@/components/sales/SaleDetail";
import { DeleteConfirmationDialog } from "@/components/ui/DeleteConfirmationDialog";
import { Button } from "@/components/ui/button";
import { MainLayout } from "@/components/layout/MainLayout";
import { useSales } from "@/hooks/useSales";
import { Sale, SaleItem } from "@shared/schema";

type ViewMode = 'list' | 'detail';

export default function Sales() {
  // Estado local para controlar la vista actual y la venta seleccionada
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [selectedSale, setSelectedSale] = useState<Sale | null>(null);
  const [saleItems, setSaleItems] = useState<SaleItem[]>([]);
  
  // Obtener las funciones y datos del hook personalizado
  const { 
    sales, 
    isLoadingSales,
    confirmDelete,
    cancelDelete,
    handleDelete,
    isDeleteDialogOpen,
    saleToDelete,
    getSale
  } = useSales();
  
  // Ver detalles de una venta
  const handleViewSale = async (sale: Sale) => {
    setSelectedSale(sale);
    
    // Obtener los items de la venta
    try {
      const { data } = getSale(sale.id);
      if (data) {
        setSaleItems(data.items || []);
      }
    } catch (error) {
      console.error("Error al obtener los items de la venta:", error);
      setSaleItems([]);
    }
    
    setViewMode("detail");
  };
  
  // Volver a la vista de lista
  const handleBackToList = () => {
    setViewMode("list");
    setSelectedSale(null);
    setSaleItems([]);
  };
  
  return (
    <MainLayout title="Gestión de Ventas">
      {viewMode === "list" ? (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Ventas</h1>
              <p className="text-muted-foreground">
                Consulta el historial de ventas realizadas
              </p>
            </div>
          </div>
          
          <SaleTable 
            sales={sales}
            onView={handleViewSale}
            onDelete={confirmDelete}
            isLoading={isLoadingSales}
          />
          
          <DeleteConfirmationDialog
            isOpen={isDeleteDialogOpen}
            onClose={cancelDelete}
            onConfirm={handleDelete}
            title="Confirmar Eliminación"
            description={
              saleToDelete 
                ? `¿Está seguro que desea eliminar la venta #${saleToDelete.id}? Esta acción no se puede deshacer.`
                : "¿Está seguro que desea eliminar esta venta? Esta acción no se puede deshacer."
            }
          />
        </div>
      ) : selectedSale && (
        <SaleDetail
          sale={selectedSale}
          saleItems={saleItems}
          onBack={handleBackToList}
        />
      )}
    </MainLayout>
  );
}