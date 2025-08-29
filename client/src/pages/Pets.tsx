import { useState } from "react";
import { PetTable } from "@/components/pets/PetTable";
import { PetForm } from "@/components/pets/PetForm";
import { DeleteConfirmationDialog } from "@/components/ui/DeleteConfirmationDialog";
import { Button } from "@/components/ui/button";
import { MainLayout } from "@/components/layout/MainLayout";
import { Plus } from "lucide-react";
import { usePets } from "@/hooks/usePets";
import { Pet, InsertPet } from "@shared/schema";
import { ViewMode } from "@/lib/types";

export default function Pets() {
  // Estado local para controlar la vista actual y la mascota en edición
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [editingPet, setEditingPet] = useState<Pet | null>(null);
  
  // Obtener las funciones y datos del hook personalizado
  const { 
    pets, 
    isLoadingPets,
    createPet, 
    updatePet, 
    isSubmitting,
    confirmDelete,
    cancelDelete,
    handleDelete,
    isDeleteDialogOpen,
    petToDelete
  } = usePets();
  
  // Cambiar a vista de formulario para agregar
  const handleAddNew = () => {
    setEditingPet(null);
    setViewMode("form");
  };
  
  // Cambiar a vista de formulario para editar
  const handleEdit = (pet: Pet) => {
    setEditingPet(pet);
    setViewMode("form");
  };
  
  // Volver a la vista de lista
  const handleCancel = () => {
    setViewMode("list");
    setEditingPet(null);
  };
  
  // Manejar el envío del formulario
  const handleSubmit = (data: InsertPet) => {
    if (editingPet) {
      // Actualizar mascota existente
      updatePet({ id: editingPet.id, pet: data });
    } else {
      // Crear nueva mascota
      createPet(data);
    }
    
    // Volver a la vista de lista después de enviar
    setViewMode("list");
    setEditingPet(null);
  };
  
  return (
    <MainLayout title="Gestión de Mascotas">
      {viewMode === "list" ? (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Mascotas</h1>
              <p className="text-muted-foreground">
                Administra el registro de mascotas en el sistema.
              </p>
            </div>
            <Button 
              onClick={handleAddNew}
              className="bg-accent hover:bg-green-700 text-white"
            >
              <Plus className="mr-2 h-4 w-4" /> Agregar Mascota
            </Button>
          </div>
          
          <PetTable 
            pets={pets}
            onEdit={handleEdit}
            onDelete={confirmDelete}
            isLoading={isLoadingPets}
          />
          
          <DeleteConfirmationDialog
            isOpen={isDeleteDialogOpen}
            onClose={cancelDelete}
            onConfirm={handleDelete}
            title="Confirmar Eliminación"
            description={
              petToDelete 
                ? `¿Está seguro que desea eliminar a ${petToDelete.name}? Esta acción no se puede deshacer.`
                : "¿Está seguro que desea eliminar esta mascota? Esta acción no se puede deshacer."
            }
          />
        </div>
      ) : (
        <PetForm
          initialData={editingPet || undefined}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          isSubmitting={isSubmitting}
        />
      )}
    </MainLayout>
  );
}
