import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Pet, InsertPet } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export function usePets() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  // Estado para el manejo del modal de confirmación de eliminación
  const [petToDelete, setPetToDelete] = useState<Pet | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  
  // Obtener todas las mascotas
  const { 
    data: pets = [],
    isLoading: isLoadingPets,
    isError: isPetsError,
    error: petsError
  } = useQuery({
    queryKey: ['/api/pets'],
  });
  
  // Crear una mascota
  const createPetMutation = useMutation({
    mutationFn: async (newPet: InsertPet) => {
      const res = await apiRequest('POST', '/api/pets', newPet);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/pets'] });
      toast({
        title: "Mascota agregada",
        description: "La mascota ha sido registrada exitosamente.",
        variant: "success"
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: `No se pudo agregar la mascota: ${error.message}`,
        variant: "destructive"
      });
    }
  });
  
  // Actualizar una mascota
  const updatePetMutation = useMutation({
    mutationFn: async ({ id, pet }: { id: number, pet: InsertPet }) => {
      const res = await apiRequest('PUT', `/api/pets/${id}`, pet);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/pets'] });
      toast({
        title: "Mascota actualizada",
        description: "La mascota ha sido actualizada exitosamente.",
        variant: "success"
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: `No se pudo actualizar la mascota: ${error.message}`,
        variant: "destructive"
      });
    }
  });
  
  // Eliminar una mascota
  const deletePetMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await apiRequest('DELETE', `/api/pets/${id}`);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/pets'] });
      toast({
        title: "Mascota eliminada",
        description: "La mascota ha sido eliminada exitosamente.",
        variant: "success"
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: `No se pudo eliminar la mascota: ${error.message}`,
        variant: "destructive"
      });
    }
  });
  
  // Función para confirmar la eliminación
  const confirmDelete = (pet: Pet) => {
    setPetToDelete(pet);
    setIsDeleteDialogOpen(true);
  };
  
  // Función para cancelar la eliminación
  const cancelDelete = () => {
    setPetToDelete(null);
    setIsDeleteDialogOpen(false);
  };
  
  // Función para ejecutar la eliminación
  const handleDelete = () => {
    if (petToDelete) {
      deletePetMutation.mutate(petToDelete.id);
      setIsDeleteDialogOpen(false);
      setPetToDelete(null);
    }
  };
  
  return {
    // Datos
    pets,
    isLoadingPets,
    isPetsError,
    petsError,
    
    // Mutaciones
    createPet: createPetMutation.mutate,
    updatePet: updatePetMutation.mutate,
    isSubmitting: createPetMutation.isPending || updatePetMutation.isPending,
    
    // Manejo de eliminación
    confirmDelete,
    cancelDelete,
    handleDelete,
    isDeleteDialogOpen,
    petToDelete,
    isDeletingPet: deletePetMutation.isPending
  };
}
