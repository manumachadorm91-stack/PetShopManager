import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Settings() {
  // Estados para los diferentes formularios
  const [storeInfo, setStoreInfo] = useState({
    storeName: "Mi Tienda de Mascotas",
    address: "Calle Principal 123",
    phone: "555-123-4567",
    email: "contacto@tiendamascotas.com",
    taxRate: "16",
    currency: "MXN"
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    lowStockAlerts: true,
    salesReports: true,
    customerBirthdays: false
  });

  const [userPreferences, setUserPreferences] = useState({
    language: "es",
    theme: "light",
    itemsPerPage: "10"
  });

  // Manejadores de cambios
  const handleStoreInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setStoreInfo({
      ...storeInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleNotificationToggle = (key: keyof typeof notificationSettings) => {
    setNotificationSettings({
      ...notificationSettings,
      [key]: !notificationSettings[key]
    });
  };

  const handleUserPreferenceChange = (key: keyof typeof userPreferences, value: string) => {
    setUserPreferences({
      ...userPreferences,
      [key]: value
    });
  };

  // Manejador de guardado
  const handleSaveSettings = (section: string) => {
    toast({
      title: "Configuración guardada",
      description: `Las configuraciones de ${section} se han guardado correctamente.`,
    });
  };

  return (
    <MainLayout title="Configuración">
      <div className="animate-fade-in space-y-4">
        <h1 className="text-2xl font-bold text-primary">Configuración del Sistema</h1>
        <p className="text-muted-foreground">
          Ajusta las preferencias y configuraciones de la tienda de mascotas.
        </p>
        
        <Tabs defaultValue="store" className="w-full mt-6">
          <TabsList className="mb-4">
            <TabsTrigger value="store">Información de Tienda</TabsTrigger>
            <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
            <TabsTrigger value="users">Preferencias</TabsTrigger>
            <TabsTrigger value="backup">Copia de Seguridad</TabsTrigger>
          </TabsList>
          
          {/* Pestaña de Información de la Tienda */}
          <TabsContent value="store" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Información de la Tienda</CardTitle>
                <CardDescription>
                  Configure la información básica de su tienda de mascotas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="storeName">Nombre de la Tienda</Label>
                    <Input 
                      id="storeName"
                      name="storeName"
                      value={storeInfo.storeName}
                      onChange={handleStoreInfoChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">Dirección</Label>
                    <Input 
                      id="address"
                      name="address"
                      value={storeInfo.address}
                      onChange={handleStoreInfoChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input 
                      id="phone"
                      name="phone"
                      value={storeInfo.phone}
                      onChange={handleStoreInfoChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={storeInfo.email}
                      onChange={handleStoreInfoChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="taxRate">Tasa de Impuesto (%)</Label>
                    <Input 
                      id="taxRate"
                      name="taxRate"
                      type="number"
                      value={storeInfo.taxRate}
                      onChange={handleStoreInfoChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="currency">Moneda</Label>
                    <Select 
                      value={storeInfo.currency}
                      onValueChange={(value) => setStoreInfo({...storeInfo, currency: value})}
                    >
                      <SelectTrigger id="currency">
                        <SelectValue placeholder="Seleccione una moneda" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="MXN">Peso Mexicano (MXN)</SelectItem>
                        <SelectItem value="USD">Dólar Estadounidense (USD)</SelectItem>
                        <SelectItem value="EUR">Euro (EUR)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => handleSaveSettings("información de la tienda")}
                  className="ml-auto"
                >
                  Guardar Cambios
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          {/* Pestaña de Notificaciones */}
          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Configuración de Notificaciones</CardTitle>
                <CardDescription>
                  Controle qué notificaciones desea recibir
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Notificaciones por Email</Label>
                    <p className="text-sm text-muted-foreground">
                      Recibir notificaciones importantes por correo electrónico
                    </p>
                  </div>
                  <Switch
                    checked={notificationSettings.emailNotifications}
                    onCheckedChange={() => handleNotificationToggle("emailNotifications")}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Alertas de Stock Bajo</Label>
                    <p className="text-sm text-muted-foreground">
                      Recibir alertas cuando el inventario esté por debajo del mínimo
                    </p>
                  </div>
                  <Switch
                    checked={notificationSettings.lowStockAlerts}
                    onCheckedChange={() => handleNotificationToggle("lowStockAlerts")}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Informes de Ventas</Label>
                    <p className="text-sm text-muted-foreground">
                      Recibir informes semanales de ventas
                    </p>
                  </div>
                  <Switch
                    checked={notificationSettings.salesReports}
                    onCheckedChange={() => handleNotificationToggle("salesReports")}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Cumpleaños de Clientes</Label>
                    <p className="text-sm text-muted-foreground">
                      Recibir recordatorios de cumpleaños de los clientes
                    </p>
                  </div>
                  <Switch
                    checked={notificationSettings.customerBirthdays}
                    onCheckedChange={() => handleNotificationToggle("customerBirthdays")}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => handleSaveSettings("notificaciones")}
                  className="ml-auto"
                >
                  Guardar Cambios
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          {/* Pestaña de Preferencias del Usuario */}
          <TabsContent value="users" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Preferencias de Usuario</CardTitle>
                <CardDescription>
                  Personaliza tu experiencia con la aplicación
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="language">Idioma</Label>
                    <Select 
                      value={userPreferences.language}
                      onValueChange={(value) => handleUserPreferenceChange("language", value)}
                    >
                      <SelectTrigger id="language">
                        <SelectValue placeholder="Seleccione un idioma" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="es">Español</SelectItem>
                        <SelectItem value="en">Inglés</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="theme">Tema</Label>
                    <Select 
                      value={userPreferences.theme}
                      onValueChange={(value) => handleUserPreferenceChange("theme", value)}
                    >
                      <SelectTrigger id="theme">
                        <SelectValue placeholder="Seleccione un tema" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Claro</SelectItem>
                        <SelectItem value="dark">Oscuro</SelectItem>
                        <SelectItem value="system">Sistema</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="itemsPerPage">Elementos por Página</Label>
                    <Select 
                      value={userPreferences.itemsPerPage}
                      onValueChange={(value) => handleUserPreferenceChange("itemsPerPage", value)}
                    >
                      <SelectTrigger id="itemsPerPage">
                        <SelectValue placeholder="Seleccione cantidad" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="20">20</SelectItem>
                        <SelectItem value="50">50</SelectItem>
                        <SelectItem value="100">100</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => handleSaveSettings("preferencias de usuario")}
                  className="ml-auto"
                >
                  Guardar Cambios
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          {/* Pestaña de Copia de Seguridad */}
          <TabsContent value="backup" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Copia de Seguridad y Restauración</CardTitle>
                <CardDescription>
                  Gestione copias de seguridad de sus datos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert variant="default" className="bg-muted">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Información</AlertTitle>
                  <AlertDescription>
                    Las copias de seguridad incluyen todos los datos de clientes, mascotas, 
                    productos y ventas. Se recomienda realizar copias de seguridad periódicas.
                  </AlertDescription>
                </Alert>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="shadow-none border">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Copia de Seguridad</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Descargue una copia de seguridad completa de todos sus datos
                      </p>
                      <Button variant="secondary" className="w-full">
                        Crear Copia de Seguridad
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-none border">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Restaurar Datos</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Restaure sus datos desde una copia de seguridad anterior
                      </p>
                      <div className="flex flex-col space-y-2">
                        <Input id="backup-file" type="file" className="w-full" />
                        <Button variant="secondary" className="w-full">
                          Restaurar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="border-t pt-4">
                  <h3 className="text-lg font-medium mb-2">Programación de Copias</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Switch id="auto-backup" />
                      <Label htmlFor="auto-backup">Copias de seguridad automáticas</Label>
                    </div>
                    <Select defaultValue="weekly">
                      <SelectTrigger>
                        <SelectValue placeholder="Frecuencia" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Diaria</SelectItem>
                        <SelectItem value="weekly">Semanal</SelectItem>
                        <SelectItem value="monthly">Mensual</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => handleSaveSettings("copia de seguridad")}
                  className="ml-auto"
                >
                  Guardar Configuración
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}