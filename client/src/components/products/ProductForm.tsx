import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { insertProductSchema, InsertProduct, Product } from "@shared/schema";
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
import { ArrowLeft, Package } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Extendemos el esquema para añadir validaciones específicas del formulario
const formSchema = insertProductSchema.extend({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  category: z.string().min(1, { message: "Seleccione una categoría" }),
  price: z.coerce.number().min(0.01, { message: "El precio debe ser mayor a 0" }),
});

// Categorías de productos WPC
const PRODUCT_CATEGORIES = [
  { value: "Pisos-WPC", label: "Pisos WPC" },
  { value: "Paredes-WPC", label: "Paredes WPC" },
  { value: "Techos-WPC", label: "Techos WPC" },
  { value: "Decking-Exterior", label: "Decking Exterior" },
  { value: "Revestimientos", label: "Revestimientos" },
  { value: "Accesorios-Instalacion", label: "Accesorios de Instalación" },
  { value: "Perfiles-Estructurales", label: "Perfiles Estructurales" },
  { value: "Otros-WPC", label: "Otros WPC" },
];

interface ProductFormProps {
  initialData?: Product;
  onSubmit: (data: InsertProduct) => void;
  onCancel: () => void;
  isSubmitting?: boolean;
}

export function ProductForm({ initialData, onSubmit, onCancel, isSubmitting = false }: ProductFormProps) {
  // Estado para la vista previa de la imagen
  const [imagePreview, setImagePreview] = useState<string>(initialData?.image || "");
  
  // Inicializar el formulario con react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: initialData?.name || "",
      description: initialData?.description || "",
      category: initialData?.category || "",
      price: initialData?.price || 0,
      stock: initialData?.stock || 0,
      image: initialData?.image || "",
      sku: initialData?.sku || "",
      active: initialData?.active === false ? false : true,
    },
  });

  // Función para simular la carga de una imagen (en un entorno real, usaríamos un servicio de almacenamiento)
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // En una implementación real, subiríamos el archivo y obtendríamos una URL
      // Aquí solo simulamos la vista previa
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);
        form.setValue("image", result);
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
            {initialData ? "Editar Producto" : "Registrar Nuevo Producto"}
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
                      <FormLabel>Nombre del Producto *</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Nombre del producto" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Categoría *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar categoría" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {PRODUCT_CATEGORIES.map((category) => (
                            <SelectItem key={category.value} value={category.value}>
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Precio (€) *</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            step="0.01" 
                            min="0" 
                            {...field}
                            value={field.value || ""} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="stock"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Stock</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            min="0" 
                            step="1"
                            {...field}
                            value={field.value || ""} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="sku"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>SKU</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Código de producto (SKU)" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full md:w-1/2 space-y-4">
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Imagen del Producto</FormLabel>
                      <div className="mt-1 flex items-center">
                        <div className="h-16 w-16 rounded-md overflow-hidden bg-gray-100 mr-4">
                          {imagePreview ? (
                            <img
                              src={imagePreview}
                              alt="Vista previa"
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="h-full w-full flex items-center justify-center">
                              <Package className="h-8 w-8 text-gray-400" />
                            </div>
                          )}
                        </div>
                        <label
                          htmlFor="product-image"
                          className="bg-gray-200 py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary cursor-pointer"
                        >
                          Cambiar
                        </label>
                        <input
                          type="file"
                          id="product-image"
                          name="product-image"
                          className="hidden"
                          accept="image/*"
                          onChange={handleImageChange}
                        />
                        <input type="hidden" {...field} />
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descripción</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Descripción detallada del producto"
                          rows={5}
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
                      <FormLabel className="mt-0">Producto activo</FormLabel>
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
                {isSubmitting ? "Guardando..." : "Guardar Producto"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}