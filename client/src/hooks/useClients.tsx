import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Client, InsertClient } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export function useClients() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  // Estado para el manejo del modal de confirmación de eliminación
  const [clientToDelete, setClientToDelete] = useState<Client | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  
  // Obtener todos los clientes
  const { 
    data: clients = [],
    isLoading: isLoadingClients,
    isError: isClientsError,
    error: clientsError
  } = useQuery({
    queryKey: ['/api/clients'],
  });
  
  // Crear un cliente
  const createClientMutation = useMutation({
    mutationFn: async (newClient: InsertClient) => {
      const res = await apiRequest('POST', '/api/clients', newClient);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/clients'] });
      toast({
        title: "Cliente agregado",
        description: "El cliente ha sido registrado exitosamente."
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: `No se pudo agregar el cliente: ${error.message}`,
        variant: "destructive"
      });
    }
  });
  
  // Actualizar un cliente
  const updateClientMutation = useMutation({
    mutationFn: async ({ id, client }: { id: number, client: InsertClient }) => {
      const res = await apiRequest('PUT', `/api/clients/${id}`, client);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/clients'] });
      toast({
        title: "Cliente actualizado",
        description: "El cliente ha sido actualizado exitosamente."
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: `No se pudo actualizar el cliente: ${error.message}`,
        variant: "destructive"
      });
    }
  });
  
  // Eliminar un cliente
  const deleteClientMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await apiRequest('DELETE', `/api/clients/${id}`);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/clients'] });
      toast({
        title: "Cliente eliminado",
        description: "El cliente ha sido eliminado exitosamente."
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: `No se pudo eliminar el cliente: ${error.message}`,
        variant: "destructive"
      });
    }
  });
  
  // Función para confirmar la eliminación
  const confirmDelete = (client: Client) => {
    setClientToDelete(client);
    setIsDeleteDialogOpen(true);
  };
  
  // Función para cancelar la eliminación
  const cancelDelete = () => {
    setClientToDelete(null);
    setIsDeleteDialogOpen(false);
  };
  
  // Función para ejecutar la eliminación
  const handleDelete = () => {
    if (clientToDelete) {
      deleteClientMutation.mutate(clientToDelete.id);
      setIsDeleteDialogOpen(false);
      setClientToDelete(null);
    }
  };
  
  return {
    // Datos
    clients,
    isLoadingClients,
    isClientsError,
    clientsError,
    
    // Mutaciones
    createClient: createClientMutation.mutate,
    updateClient: updateClientMutation.mutate,
    isSubmitting: createClientMutation.isPending || updateClientMutation.isPending,
    
    // Manejo de eliminación
    confirmDelete,
    cancelDelete,
    handleDelete,
    isDeleteDialogOpen,
    clientToDelete,
    isDeletingClient: deleteClientMutation.isPending
  };
}