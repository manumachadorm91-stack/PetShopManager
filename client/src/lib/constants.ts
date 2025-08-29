import { 
  Home, 
  Users, 
  ShoppingCart, 
  Package, 
  BarChart2, 
  Settings,
  ShieldCheck,
  Grid3X3,
  Building,
  Layers
} from "lucide-react";

export const SIDEBAR_LINKS = [
  { icon: Home, label: 'Inicio', href: '/' },
  { icon: Grid3X3, label: 'Catálogo WPC', href: '/wpc' },
  { icon: Users, label: 'Clientes', href: '/clients' },
  { icon: ShoppingCart, label: 'Ventas', href: '/sales' },
  { icon: Package, label: 'Inventario', href: '/products' },
  { icon: BarChart2, label: 'Informes', href: '/reports' },
  { icon: Settings, label: 'Configuración', href: '/settings' },
  { icon: ShieldCheck, label: 'Administración', href: '/admin' },
];

export const DEFAULT_AVATAR = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40';

export const DEFAULT_PET_PHOTO = 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg';
