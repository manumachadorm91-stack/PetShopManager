import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { insertPetSchema, InsertPet, Pet } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, PawPrint } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AGE_UNIT_OPTIONS, PET_OWNERS, SPECIES_OPTIONS } from "@/lib/types";
import { DEFAULT_PET_PHOTO } from "@/lib/constants";

// Extendemos el esquema para añadir validaciones específicas del formulario
const formSchema = insertPetSchema.extend({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  species: z.string().min(1, { message: "Seleccione una especie" }),
  owner: z.string().min(1, { message: "Seleccione un propietario" }),
});

interface PetFormProps {
  initialData?: Pet;
  onSubmit: (data: InsertPet) => void;
  onCancel: () => void;
  isSubmitting?: boolean;
}

export function PetForm({ initialData, onSubmit, onCancel, isSubmitting = false }: PetFormProps) {
  // Estado para la vista previa de la foto
  const [photoPreview, setPhotoPreview] = useState<string>(initialData?.photo || DEFAULT_PET_PHOTO);
  
  // Inicializar el formulario con react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: initialData?.name || "",
      species: initialData?.species || "",
      breed: initialData?.breed || "",
      age: initialData?.age || null,
      ageUnit: initialData?.ageUnit || "years",
      gender: initialData?.gender || "male",
      owner: initialData?.owner || "",
      weight: initialData?.weight || null,
      photo: initialData?.photo || "",
      notes: initialData?.notes || "",
      active: initialData?.active !== false,
    },
  });

  // Función para simular la carga de una foto (en un entorno real, usaríamos un servicio de almacenamiento)
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // En una implementación real, subiríamos el archivo y obtendríamos una URL
      // Aquí solo simulamos la vista previa
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPhotoPreview(result);
        form.setValue("photo", result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Función para manejar el envío del formulario
  const handleSubmit = form.handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <Card className="bg-white rounded-lg shadow-sm animate-fade-in">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-800">
            {initialData ? "Editar Mascota" : "Registrar Nueva Mascota"}
          </h3>
          <Button
            variant="outline"
            onClick={onCancel}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Listado
          </Button>
        </div>

        <Form {...form}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2 space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre de la Mascota *</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Nombre" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="species"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Especie *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar especie" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {SPECIES_OPTIONS.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="breed"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Raza</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Raza" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Edad</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            value={field.value || ""}
                            onChange={(e) => {
                              const value = e.target.value ? parseInt(e.target.value) : null;
                              field.onChange(value);
                            }}
                            min={0}
                            max={100}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="ageUnit"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Unidad</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Unidad" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {AGE_UNIT_OPTIONS.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Género</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex space-x-4"
                        >
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value="male" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">
                              Macho
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value="female" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">
                              Hembra
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full md:w-1/2 space-y-4">
                <FormField
                  control={form.control}
                  name="owner"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Propietario *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar propietario" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {PET_OWNERS.map((owner) => (
                            <SelectItem key={owner.id} value={owner.name}>
                              {owner.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="photo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Foto</FormLabel>
                      <div className="mt-1 flex items-center">
                        <span className="inline-block h-16 w-16 rounded-full overflow-hidden bg-gray-100 mr-4">
                          {photoPreview ? (
                            <img
                              src={photoPreview}
                              alt="Vista previa"
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="h-full w-full flex items-center justify-center">
                              <PawPrint className="h-8 w-8 text-gray-400" />
                            </div>
                          )}
                        </span>
                        <label
                          htmlFor="pet-photo"
                          className="bg-gray-200 py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary cursor-pointer"
                        >
                          Cambiar
                        </label>
                        <input
                          type="file"
                          id="pet-photo"
                          name="pet-photo"
                          className="hidden"
                          accept="image/*"
                          onChange={handlePhotoChange}
                        />
                        <input type="hidden" {...field} />
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="weight"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Peso (kg)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          step="0.1"
                          min="0"
                          {...field}
                          value={field.value || ""}
                          onChange={(e) => {
                            const value = e.target.value ? parseFloat(e.target.value) : null;
                            field.onChange(value);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Notas adicionales</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Información adicional sobre la mascota"
                          rows={3}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="active"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-start space-x-3 p-2 rounded-lg">
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="mt-0">Mascota activa</FormLabel>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <Button
                type="button"
                variant="outline"
                onClick={onCancel}
                className="border border-gray-300 shadow-sm"
              >
                Cancelar
              </Button>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-primary hover:bg-blue-700"
              >
                {isSubmitting ? "Guardando..." : "Guardar Mascota"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
