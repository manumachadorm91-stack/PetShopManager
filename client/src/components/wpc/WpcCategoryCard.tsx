import { Link } from "wouter";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface WpcCategoryCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

export function WpcCategoryCard({ title, description, imageSrc, link }: WpcCategoryCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="p-1">
        <div className="h-48 rounded overflow-hidden bg-muted">
          <img 
            src={imageSrc} 
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      <CardContent className="flex-grow pt-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
          {description}
        </p>
      </CardContent>
      <CardFooter className="pt-0">
        <Link href={link} className="w-full">
          <Button variant="outline" className="w-full group">
            Ver productos
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}