import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Product, InsertProduct } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export function useProducts() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  // Estado para el manejo del modal de confirmación de eliminación
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  
  // Obtener todos los productos
  const { 
    data: products = [],
    isLoading: isLoadingProducts,
    isError: isProductsError,
    error: productsError
  } = useQuery({
    queryKey: ['/api/products'],
  });
  
  // Crear un producto
  const createProductMutation = useMutation({
    mutationFn: async (newProduct: InsertProduct) => {
      const res = await apiRequest('POST', '/api/products', newProduct);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/products'] });
      toast({
        title: "Producto agregado",
        description: "El producto ha sido registrado exitosamente."
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: `No se pudo agregar el producto: ${error.message}`,
        variant: "destructive"
      });
    }
  });
  
  // Actualizar un producto
  const updateProductMutation = useMutation({
    mutationFn: async ({ id, product }: { id: number, product: InsertProduct }) => {
      const res = await apiRequest('PUT', `/api/products/${id}`, product);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/products'] });
      toast({
        title: "Producto actualizado",
        description: "El producto ha sido actualizado exitosamente."
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: `No se pudo actualizar el producto: ${error.message}`,
        variant: "destructive"
      });
    }
  });
  
  // Eliminar un producto
  const deleteProductMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await apiRequest('DELETE', `/api/products/${id}`);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/products'] });
      toast({
        title: "Producto eliminado",
        description: "El producto ha sido eliminado exitosamente."
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: `No se pudo eliminar el producto: ${error.message}`,
        variant: "destructive"
      });
    }
  });
  
  // Función para confirmar la eliminación
  const confirmDelete = (product: Product) => {
    setProductToDelete(product);
    setIsDeleteDialogOpen(true);
  };
  
  // Función para cancelar la eliminación
  const cancelDelete = () => {
    setProductToDelete(null);
    setIsDeleteDialogOpen(false);
  };
  
  // Función para ejecutar la eliminación
  const handleDelete = () => {
    if (productToDelete) {
      deleteProductMutation.mutate(productToDelete.id);
      setIsDeleteDialogOpen(false);
      setProductToDelete(null);
    }
  };
  
  return {
    // Datos
    products,
    isLoadingProducts,
    isProductsError,
    productsError,
    
    // Mutaciones
    createProduct: createProductMutation.mutate,
    updateProduct: updateProductMutation.mutate,
    isSubmitting: createProductMutation.isPending || updateProductMutation.isPending,
    
    // Manejo de eliminación
    confirmDelete,
    cancelDelete,
    handleDelete,
    isDeleteDialogOpen,
    productToDelete,
    isDeletingProduct: deleteProductMutation.isPending
  };
}