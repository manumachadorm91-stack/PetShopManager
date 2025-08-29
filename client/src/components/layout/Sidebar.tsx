import { useState } from "react";
import { Link, useRoute } from "wouter";
import { SIDEBAR_LINKS } from "@/lib/constants";
import { PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <aside className={`bg-primary text-white w-full md:w-64 md:min-h-screen flex-shrink-0 ${className}`}>
      <div className="p-4 flex items-center justify-between md:justify-center">
        <div className="flex items-center space-x-3">
          <PawPrint className="h-6 w-6" />
          <h1 className="text-xl font-bold">PetShop Admin</h1>
        </div>
        <Button 
          variant="ghost" 
          className="md:hidden text-white" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menú"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </Button>
      </div>
      
      <nav className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block px-4 py-2`}>
        <ul className="space-y-2">
          {SIDEBAR_LINKS.map((link, index) => (
            <SidebarLink 
              key={index} 
              href={link.href} 
              icon={<link.icon className="w-5 h-5" />}
              label={link.label}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}

interface SidebarLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function SidebarLink({ href, icon, label }: SidebarLinkProps) {
  const [isActive] = useRoute(href);
  
  return (
    <li>
      <Link href={href}>
        <div className={`flex items-center p-2 rounded transition duration-200 ${
          isActive ? 'bg-blue-600' : 'hover:bg-blue-600'
        }`}>
          <span className="w-6">{icon}</span>
          <span>{label}</span>
        </div>
      </Link>
    </li>
  );
}
