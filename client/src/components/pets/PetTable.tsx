import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pet } from "@shared/schema";
import { Edit, Trash2 } from "lucide-react";
import { formatAge } from "@/lib/utils/formatUtils";
import { DEFAULT_PET_PHOTO } from "@/lib/constants";
import { 
  Pagination, 
  PaginationContent,
  PaginationItem,
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

interface PetTableProps {
  pets: Pet[];
  onEdit: (pet: Pet) => void;
  onDelete: (pet: Pet) => void;
  isLoading?: boolean;
}

export function PetTable({ pets, onEdit, onDelete, isLoading = false }: PetTableProps) {
  const handleEdit = (pet: Pet) => {
    onEdit(pet);
  };

  const handleDelete = (pet: Pet) => {
    onDelete(pet);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 animate-fade-in">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">ID</TableHead>
              <TableHead className="w-[70px]">Foto</TableHead>
              <TableHead>Nombre</TableHead>
              <TableHead>Especie</TableHead>
              <TableHead>Raza</TableHead>
              <TableHead>Edad</TableHead>
              <TableHead>Propietario</TableHead>
              <TableHead className="w-[100px]">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-10">
                  Cargando mascotas...
                </TableCell>
              </TableRow>
            ) : pets.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-10">
                  No hay mascotas registradas.
                </TableCell>
              </TableRow>
            ) : (
              pets.map((pet) => (
                <TableRow key={pet.id}>
                  <TableCell className="font-medium">{pet.id}</TableCell>
                  <TableCell>
                    <img
                      src={pet.photo || DEFAULT_PET_PHOTO}
                      alt={pet.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </TableCell>
                  <TableCell className="font-medium">{pet.name}</TableCell>
                  <TableCell>{pet.species}</TableCell>
                  <TableCell>{pet.breed || 'N/A'}</TableCell>
                  <TableCell>{formatAge(pet.age, pet.ageUnit || 'years')}</TableCell>
                  <TableCell>{pet.owner}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-primary/80 hover:bg-primary/10"
                        onClick={() => handleEdit(pet)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:text-destructive/80 hover:bg-destructive/10"
                        onClick={() => handleDelete(pet)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div className="text-sm text-gray-600">
          {isLoading ? "Cargando..." : `Mostrando ${pets.length} mascotas`}
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
