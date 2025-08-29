import { useState } from "react";
import { ClientTable } from "@/components/clients/ClientTable";
import { ClientForm } from "@/components/clients/ClientForm";
import { DeleteConfirmationDialog } from "@/components/ui/DeleteConfirmationDialog";
import { Button } from "@/components/ui/button";
import { MainLayout } from "@/components/layout/MainLayout";
import { Plus } from "lucide-react";
import { useClients } from "@/hooks/useClients";
import { Client, InsertClient } from "@shared/schema";
import { ViewMode } from "@/lib/types";

export default function Clients() {
  // Estado local para controlar la vista actual y el cliente en edición
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [editingClient, setEditingClient] = useState<Client | null>(null);
  
  // Obtener las funciones y datos del hook personalizado
  const { 
    clients, 
    isLoadingClients,
    createClient, 
    updateClient, 
    isSubmitting,
    confirmDelete,
    cancelDelete,
    handleDelete,
    isDeleteDialogOpen,
    clientToDelete
  } = useClients();
  
  // Cambiar a vista de formulario para agregar
  const handleAddNew = () => {
    setEditingClient(null);
    setViewMode("form");
  };
  
  // Cambiar a vista de formulario para editar
  const handleEdit = (client: Client) => {
    setEditingClient(client);
    setViewMode("form");
  };
  
  // Volver a la vista de lista
  const handleCancel = () => {
    setViewMode("list");
    setEditingClient(null);
  };
  
  // Manejar el envío del formulario
  const handleSubmit = (data: InsertClient) => {
    if (editingClient) {
      // Actualizar cliente existente
      updateClient({ id: editingClient.id, client: data });
    } else {
      // Crear nuevo cliente
      createClient(data);
    }
    
    // Volver a la vista de lista después de enviar
    setViewMode("list");
    setEditingClient(null);
  };
  
  return (
    <MainLayout title="Gestión de Clientes">
      {viewMode === "list" ? (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Clientes</h1>
              <p className="text-muted-foreground">
                Administra el registro de clientes en el sistema.
              </p>
            </div>
            <Button 
              onClick={handleAddNew}
              className="bg-accent hover:bg-green-700 text-white"
            >
              <Plus className="mr-2 h-4 w-4" /> Agregar Cliente
            </Button>
          </div>
          
          <ClientTable 
            clients={clients}
            onEdit={handleEdit}
            onDelete={confirmDelete}
            isLoading={isLoadingClients}
          />
          
          <DeleteConfirmationDialog
            isOpen={isDeleteDialogOpen}
            onClose={cancelDelete}
            onConfirm={handleDelete}
            title="Confirmar Eliminación"
            description={
              clientToDelete 
                ? `¿Está seguro que desea eliminar a ${clientToDelete.name}? Esta acción no se puede deshacer.`
                : "¿Está seguro que desea eliminar este cliente? Esta acción no se puede deshacer."
            }
          />
        </div>
      ) : (
        <ClientForm
          initialData={editingClient || undefined}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          isSubmitting={isSubmitting}
        />
      )}
    </MainLayout>
  );
}