import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

interface WpcProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  features: string[];
  applications: string[];
  onClick: () => void;
}

export function WpcProductCard({ 
  title, 
  description, 
  imageSrc, 
  features, 
  applications,
  onClick 
}: WpcProductCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all hover:shadow-md cursor-pointer" onClick={onClick}>
      <div className="p-1">
        <div className="h-40 rounded overflow-hidden bg-muted">
          <img 
            src={imageSrc} 
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      <CardContent className="flex-grow pt-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2 mb-4">
          {description}
        </p>
        
        <div className="space-y-3">
          <div>
            <h4 className="text-xs font-medium text-muted-foreground mb-1">Características:</h4>
            <div className="flex flex-wrap gap-1">
              {features.slice(0, 2).map((feature, index) => (
                <Badge key={index} variant="secondary" className="bg-primary/10 text-xs">
                  {feature}
                </Badge>
              ))}
              {features.length > 2 && (
                <Badge variant="secondary" className="bg-primary/10 text-xs">
                  +{features.length - 2} más
                </Badge>
              )}
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-medium text-muted-foreground mb-1">Aplicaciones:</h4>
            <div className="flex flex-wrap gap-1">
              {applications.slice(0, 2).map((application, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {application}
                </Badge>
              ))}
              {applications.length > 2 && (
                <Badge variant="outline" className="text-xs">
                  +{applications.length - 2} más
                </Badge>
              )}
            </div>
          </div>
        </div>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="mt-4 w-full text-primary hover:bg-primary/10 hover:text-primary"
        >
          <Info className="h-4 w-4 mr-1" />
          Ver detalles
        </Button>
      </CardContent>
    </Card>
  );
}