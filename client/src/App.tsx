import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Clients from "@/pages/Clients";
import Products from "@/pages/Products";
import Sales from "@/pages/Sales";
import Reports from "@/pages/Reports";
import Settings from "@/pages/Settings";
import Admin from "@/pages/Admin";
import WpcPage from "@/pages/wpc";
import WpcCategoryPage from "@/pages/wpc/[categoryId]";
import ManualUsuario from "@/pages/technical/ManualUsuario";
import ManualAdmin from "@/pages/technical/ManualAdmin";
import GuiaInstalacion from "@/pages/technical/GuiaInstalacion";
import AnalisisRequisitos from "@/pages/technical/AnalisisRequisitos";
import DiagramasArquitectura from "@/pages/technical/DiagramasArquitectura";
import ApiDocumentation from "@/pages/technical/ApiDocumentation";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/clients" component={Clients} />
      <Route path="/products" component={Products} />
      <Route path="/sales" component={Sales} />
      <Route path="/reports" component={Reports} />
      <Route path="/settings" component={Settings} />
      <Route path="/admin" component={Admin} />
      <Route path="/wpc" component={WpcPage} />
      <Route path="/wpc/:categoryId" component={WpcCategoryPage} />
      <Route path="/profile" component={Settings} />
      <Route path="/technical/manual-usuario" component={ManualUsuario} />
      <Route path="/technical/manual-admin" component={ManualAdmin} />
      <Route path="/technical/guia-instalacion" component={GuiaInstalacion} />
      <Route path="/technical/analisis-requisitos" component={AnalisisRequisitos} />
      <Route path="/technical/diagramas-arquitectura" component={DiagramasArquitectura} />
      <Route path="/technical/api-documentation" component={ApiDocumentation} />
      {/* Fallback a 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
