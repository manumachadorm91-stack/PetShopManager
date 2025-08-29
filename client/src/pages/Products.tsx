import { useState } from "react";
import { ProductTable } from "@/components/products/ProductTable";
import { ProductForm } from "@/components/products/ProductForm";
import { DeleteConfirmationDialog } from "@/components/ui/DeleteConfirmationDialog";
import { Button } from "@/components/ui/button";
import { MainLayout } from "@/components/layout/MainLayout";
import { Plus } from "lucide-react";
import { useProducts } from "@/hooks/useProducts";
import { Product, InsertProduct } from "@shared/schema";
import { ViewMode } from "@/lib/types";

export default function Products() {
  // Estado local para controlar la vista actual y el producto en edición
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  
  // Obtener las funciones y datos del hook personalizado
  const { 
    products, 
    isLoadingProducts,
    createProduct, 
    updateProduct, 
    isSubmitting,
    confirmDelete,
    cancelDelete,
    handleDelete,
    isDeleteDialogOpen,
    productToDelete
  } = useProducts();
  
  // Cambiar a vista de formulario para agregar
  const handleAddNew = () => {
    setEditingProduct(null);
    setViewMode("form");
  };
  
  // Cambiar a vista de formulario para editar
  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setViewMode("form");
  };
  
  // Volver a la vista de lista
  const handleCancel = () => {
    setViewMode("list");
    setEditingProduct(null);
  };
  
  // Manejar el envío del formulario
  const handleSubmit = (data: InsertProduct) => {
    if (editingProduct) {
      // Actualizar producto existente
      updateProduct({ id: editingProduct.id, product: data });
    } else {
      // Crear nuevo producto
      createProduct(data);
    }
    
    // Volver a la vista de lista después de enviar
    setViewMode("list");
    setEditingProduct(null);
  };
  
  return (
    <MainLayout title="Gestión de Productos">
      {viewMode === "list" ? (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Productos</h1>
              <p className="text-muted-foreground">
                Administra el catálogo de productos del sistema.
              </p>
            </div>
            <Button 
              onClick={handleAddNew}
              className="bg-accent hover:bg-green-700 text-white"
            >
              <Plus className="mr-2 h-4 w-4" /> Agregar Producto
            </Button>
          </div>
          
          <ProductTable 
            products={products}
            onEdit={handleEdit}
            onDelete={confirmDelete}
            isLoading={isLoadingProducts}
          />
          
          <DeleteConfirmationDialog
            isOpen={isDeleteDialogOpen}
            onClose={cancelDelete}
            onConfirm={handleDelete}
            title="Confirmar Eliminación"
            description={
              productToDelete 
                ? `¿Está seguro que desea eliminar el producto "${productToDelete.name}"? Esta acción no se puede deshacer.`
                : "¿Está seguro que desea eliminar este producto? Esta acción no se puede deshacer."
            }
          />
        </div>
      ) : (
        <ProductForm
          initialData={editingProduct || undefined}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          isSubmitting={isSubmitting}
        />
      )}
    </MainLayout>
  );
}