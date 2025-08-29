import { MainLayout } from "@/components/layout/MainLayout";
import { WpcCategoryCard } from "@/components/wpc/WpcCategoryCard";
import { wpcCategories } from "@/lib/wpc-data";
import { Separator } from "@/components/ui/separator";

export default function WpcPage() {
  return (
    <MainLayout title="Productos WPC">
      <div className="animate-fade-in space-y-8">
        <div className="text-center space-y-4 py-8">
          <h1 className="text-4xl font-bold text-primary">Productos WPC</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones innovadoras en madera compuesta (Wood Plastic Composite) para proyectos de interior y exterior
          </p>
        </div>
        
        <div className="bg-muted p-6 rounded-lg">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl font-bold">¿Qué es el WPC?</h2>
            <p className="text-muted-foreground">
              WPC (Wood Plastic Composite) es un material compuesto de madera y plástico 
              que combina la estética natural de la madera con la durabilidad y resistencia 
              del plástico. Este material innovador es ideal para aplicaciones donde se requiere 
              alta durabilidad, bajo mantenimiento y resistencia a la humedad.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="bg-card p-4 rounded-lg shadow-sm">
                <h3 className="font-medium mb-2">Sostenible</h3>
                <p className="text-sm">Utilizamos materiales reciclados en su fabricación, reduciendo la tala de árboles.</p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-sm">
                <h3 className="font-medium mb-2">Durable</h3>
                <p className="text-sm">Resistente a la humedad, rayos UV, insectos y no se pudre ni se deforma con el tiempo.</p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-sm">
                <h3 className="font-medium mb-2">Bajo mantenimiento</h3>
                <p className="text-sm">No requiere barnizado, pintado ni tratamientos periódicos como la madera tradicional.</p>
              </div>
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Nuestras categorías WPC</h2>
          <p className="text-muted-foreground mb-6">
            Explore nuestra gama de soluciones en material compuesto para distintas aplicaciones
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {wpcCategories.map((category) => (
              <WpcCategoryCard
                key={category.id}
                title={category.title}
                description={category.shortDescription}
                imageSrc={category.imageSrc}
                link={`/wpc/${category.id}`}
              />
            ))}
          </div>
        </div>
        
        <div className="bg-primary/5 p-6 rounded-lg my-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl font-bold text-primary">Ventajas de los productos WPC</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="bg-primary/20 p-1 rounded-full mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span>Resistente a la humedad y agua</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/20 p-1 rounded-full mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span>No se agrieta, astilla ni deforma</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/20 p-1 rounded-full mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span>Resistente a rayos UV e intemperie</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/20 p-1 rounded-full mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span>Resistente a insectos y hongos</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="bg-primary/20 p-1 rounded-full mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span>Apariencia natural de madera</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/20 p-1 rounded-full mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span>Fácil instalación y mantenimiento</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/20 p-1 rounded-full mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span>Ecológico y reciclable</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/20 p-1 rounded-full mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span>Amplia variedad de colores y acabados</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}