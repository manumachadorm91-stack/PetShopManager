import { Sidebar } from "@/components/layout/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import { Link } from "wouter";
import { DEFAULT_AVATAR } from "@/lib/constants";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export function MainLayout({ children, title = "Panel de Administración" }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Sidebar />
      
      <main className="flex-grow">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
            <div className="flex items-center space-x-4">
              <div className="relative hidden sm:block">
                <Input
                  type="text"
                  placeholder="Buscar..."
                  className="py-1 pl-3 pr-8 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-700 mr-2">Admin</span>
                <Link href="/profile">
                  <a>
                    <img 
                      src={DEFAULT_AVATAR} 
                      alt="Perfil" 
                      className="w-8 h-8 rounded-full"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </header>
        
        {/* Main Content */}
        <div className="p-6">
          {children}
        </div>
      </main>
      
      <Toaster />
    </div>
  );
}
