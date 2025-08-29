import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Sale, InsertSale, InsertSaleItem } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export function useSales() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  // Estado para el manejo del modal de confirmación de eliminación
  const [saleToDelete, setSaleToDelete] = useState<Sale | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  
  // Obtener todas las ventas
  const { 
    data: sales = [],
    isLoading: isLoadingSales,
    isError: isSalesError,
    error: salesError
  } = useQuery({
    queryKey: ['/api/sales'],
  });
  
  // Crear una venta con sus items
  const createSaleMutation = useMutation({
    mutationFn: async ({ sale, items }: { sale: InsertSale, items: InsertSaleItem[] }) => {
      const res = await apiRequest('POST', '/api/sales', { sale, items });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/sales'] });
      toast({
        title: "Venta registrada",
        description: "La venta ha sido registrada exitosamente."
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: `No se pudo registrar la venta: ${error.message}`,
        variant: "destructive"
      });
    }
  });
  
  // Eliminar una venta
  const deleteSaleMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await apiRequest('DELETE', `/api/sales/${id}`);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/sales'] });
      toast({
        title: "Venta eliminada",
        description: "La venta ha sido eliminada exitosamente."
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: `No se pudo eliminar la venta: ${error.message}`,
        variant: "destructive"
      });
    }
  });
  
  // Obtener una venta específica con sus items
  const getSale = (id: number) => {
    return useQuery({
      queryKey: [`/api/sales/${id}`],
      queryFn: async () => {
        const res = await apiRequest('GET', `/api/sales/${id}`);
        return res.json();
      },
    });
  };
  
  // Función para confirmar la eliminación
  const confirmDelete = (sale: Sale) => {
    setSaleToDelete(sale);
    setIsDeleteDialogOpen(true);
  };
  
  // Función para cancelar la eliminación
  const cancelDelete = () => {
    setSaleToDelete(null);
    setIsDeleteDialogOpen(false);
  };
  
  // Función para ejecutar la eliminación
  const handleDelete = () => {
    if (saleToDelete) {
      deleteSaleMutation.mutate(saleToDelete.id);
      setIsDeleteDialogOpen(false);
      setSaleToDelete(null);
    }
  };
  
  return {
    // Datos
    sales,
    isLoadingSales,
    isSalesError,
    salesError,
    
    // Mutaciones
    createSale: createSaleMutation.mutate,
    isSubmitting: createSaleMutation.isPending,
    
    // Obtener una venta específica
    getSale,
    
    // Manejo de eliminación
    confirmDelete,
    cancelDelete,
    handleDelete,
    isDeleteDialogOpen,
    saleToDelete,
    isDeletingSale: deleteSaleMutation.isPending
  };
}