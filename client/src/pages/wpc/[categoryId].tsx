import { useState } from "react";
import { useRoute } from "wouter";
import { MainLayout } from "@/components/layout/MainLayout";
import { WpcProductCard } from "@/components/wpc/WpcProductCard";
import { wpcCategories, wpcProducts } from "@/lib/wpc-data";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ChevronRight, ChevronLeft, HomeIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

export default function WpcCategoryPage() {
  const [, params] = useRoute("/wpc/:categoryId");
  const categoryId = params?.categoryId || "";

  // Estado para el diálogo de detalles del producto
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  // Buscar la categoría actual
  const category = wpcCategories.find(cat => cat.id === categoryId);
  
  // Obtener los productos de esta categoría
  const products = wpcProducts[categoryId as keyof typeof wpcProducts] || [];

  // Si la categoría no existe, mostrar página de error
  if (!category) {
    return (
      <MainLayout title="Categoría no encontrada">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-primary mb-4">Categoría no encontrada</h1>
          <p className="text-muted-foreground mb-6">La categoría que estás buscando no existe o ha sido eliminada.</p>
          <Link href="/wpc">
            <Button>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Volver a categorías WPC
            </Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  // Mostrar modal de detalles del producto
  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
  };

  return (
    <MainLayout title={category.title}>
      <div className="animate-fade-in space-y-8">
        {/* Breadcrumbs */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <HomeIcon className="h-4 w-4 mr-1" />
                Inicio
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/wpc">WPC</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink>{category.title}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Hero de la categoría */}
        <div 
          className="relative h-64 rounded-lg overflow-hidden bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${category.heroImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 text-center p-6">
            <h1 className="text-4xl font-bold text-white mb-2">{category.title}</h1>
            <p className="text-xl text-white/90 max-w-2xl">{category.shortDescription}</p>
          </div>
        </div>

        {/* Descripción de la categoría */}
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">{category.title}</CardTitle>
            <CardDescription>{category.shortDescription}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">{category.longDescription}</p>
              
              <div>
                <h3 className="font-medium mb-2">Beneficios principales:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {category.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-primary/20 p-1 rounded-full mr-2 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </span>
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Productos de la categoría */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Productos {category.title}</h2>
          <p className="text-muted-foreground mb-6">
            Explore nuestra selección de productos {category.title.toLowerCase()}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <WpcProductCard
                key={product.id}
                title={product.title}
                description={product.description}
                imageSrc={product.imageSrc}
                features={product.features}
                applications={product.applications}
                onClick={() => handleProductClick(product)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal de detalles del producto */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-3xl">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedProduct.title}</DialogTitle>
                <DialogDescription>{selectedProduct.description}</DialogDescription>
              </DialogHeader>

              <Tabs defaultValue="overview" className="mt-6">
                <TabsList className="mb-4">
                  <TabsTrigger value="overview">Descripción</TabsTrigger>
                  <TabsTrigger value="specs">Especificaciones</TabsTrigger>
                  <TabsTrigger value="gallery">Galería</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4">
                  <div>
                    <img 
                      src={selectedProduct.imageSrc} 
                      alt={selectedProduct.title} 
                      className="w-full rounded-lg object-cover h-64"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <p>{selectedProduct.details}</p>
                    
                    <div>
                      <h4 className="font-medium mb-2">Características:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.features.map((feature: string, index: number) => (
                          <Badge key={index} variant="secondary" className="bg-primary/10">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Aplicaciones:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.applications.map((application: string, index: number) => (
                          <Badge key={index} variant="outline">
                            {application}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="specs">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(selectedProduct.specifications).map(([key, value]: [string, any]) => (
                        <div key={key} className="border rounded-lg p-4">
                          <h5 className="font-medium capitalize mb-2">{key}:</h5>
                          {Array.isArray(value) ? (
                            <ul className="list-disc list-inside">
                              {value.map((item, i) => (
                                <li key={i} className="text-sm text-muted-foreground">{item}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-sm text-muted-foreground">{value}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="gallery">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProduct.detailImages.map((img: string, index: number) => (
                      <div key={index} className="overflow-hidden rounded-lg">
                        <img 
                          src={img} 
                          alt={`Imagen ${index + 1} de ${selectedProduct.title}`} 
                          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>

              <DialogFooter>
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedProduct(null)}
                >
                  Cerrar
                </Button>
                <Button onClick={() => {
                  // Aquí iría la lógica para solicitar información, redirección a formulario, etc.
                  alert('Funcionalidad de contacto pendiente de implementación');
                }}>
                  Solicitar información
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </MainLayout>
  );
}