import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertCircle, UserPlus, Edit, Trash2, ShieldAlert, Search, Download, Database, FileText, BookOpen, Settings2 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Link } from "wouter";

interface User {
  id: number;
  username: string;
  email: string;
  role: string;
  status: string;
  lastLogin: string;
}

interface ActivityLog {
  id: number;
  user: string;
  action: string;
  resource: string;
  timestamp: string;
  ip: string;
}

export default function Admin() {
  // Estado para usuarios y registro de actividad
  const [users, setUsers] = useState<User[]>([
    { id: 1, username: "admin", email: "admin@wpcreation.com", role: "Administrador", status: "Activo", lastLogin: "2024-08-29 10:30" },
    { id: 2, username: "vendedor1", email: "ventas@wpcreation.com", role: "Vendedor", status: "Activo", lastLogin: "2024-08-29 09:15" },
    { id: 3, username: "almacen", email: "inventario@wpcreation.com", role: "Inventario", status: "Activo", lastLogin: "2024-08-28 16:45" },
    { id: 4, username: "tecnico", email: "soporte@wpcreation.com", role: "Técnico", status: "Activo", lastLogin: "2024-08-29 08:20" },
  ]);

  const [activityLogs, setActivityLogs] = useState<ActivityLog[]>([
    { id: 1, user: "admin", action: "Inicio de sesión", resource: "Sistema", timestamp: "2023-05-23 10:30:15", ip: "192.168.1.100" },
    { id: 2, user: "vendedor1", action: "Creación", resource: "Venta #1045", timestamp: "2023-05-23 09:45:30", ip: "192.168.1.101" },
    { id: 3, user: "admin", action: "Actualización", resource: "Producto #23", timestamp: "2023-05-23 11:15:00", ip: "192.168.1.100" },
    { id: 4, user: "almacen", action: "Eliminación", resource: "Producto #15", timestamp: "2023-05-22 15:20:10", ip: "192.168.1.102" },
    { id: 5, user: "vendedor1", action: "Actualización", resource: "Cliente #42", timestamp: "2023-05-23 10:05:45", ip: "192.168.1.101" },
  ]);

  const [showUserForm, setShowUserForm] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Estado para formulario de usuario
  const [userForm, setUserForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Vendedor"
  });

  // Valores para el formulario
  const availableRoles = ["Administrador", "Vendedor", "Inventario", "Contabilidad", "Técnico", "Soporte"];

  // Manejar cambios en el formulario
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value
    });
  };

  // Manejar cambio de rol
  const handleRoleChange = (value: string) => {
    setUserForm({
      ...userForm,
      role: value
    });
  };

  // Manejar envío de formulario
  const handleUserSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (userForm.password !== userForm.confirmPassword) {
      toast({
        title: "Error de validación",
        description: "Las contraseñas no coinciden",
        variant: "destructive"
      });
      return;
    }

    if (editingUser) {
      // Actualizar usuario existente
      const updatedUsers = users.map(user => 
        user.id === editingUser.id ? 
        { ...user, username: userForm.username, email: userForm.email, role: userForm.role } : 
        user
      );
      setUsers(updatedUsers);
      toast({
        title: "Usuario actualizado",
        description: `El usuario ${userForm.username} ha sido actualizado correctamente.`
      });
    } else {
      // Crear nuevo usuario
      const newUser: User = {
        id: users.length + 1,
        username: userForm.username,
        email: userForm.email,
        role: userForm.role,
        status: "Activo",
        lastLogin: "Nunca"
      };
      
      setUsers([...users, newUser]);
      toast({
        title: "Usuario creado",
        description: `El usuario ${userForm.username} ha sido creado correctamente.`
      });
    }
    
    // Resetear formulario y estado
    setUserForm({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "Vendedor"
    });
    setShowUserForm(false);
    setEditingUser(null);
  };

  // Editar usuario
  const handleEditUser = (user: User) => {
    setEditingUser(user);
    setUserForm({
      username: user.username,
      email: user.email,
      password: "",
      confirmPassword: "",
      role: user.role
    });
    setShowUserForm(true);
  };

  // Eliminar usuario
  const handleDeleteUser = (userId: number) => {
    // En un caso real, aquí se haría una confirmación antes de eliminar
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
    toast({
      title: "Usuario eliminado",
      description: "El usuario ha sido eliminado correctamente."
    });
  };

  // Cambiar estado de usuario
  const handleToggleUserStatus = (userId: number) => {
    const updatedUsers = users.map(user => 
      user.id === userId ? 
      { ...user, status: user.status === "Activo" ? "Inactivo" : "Activo" } : 
      user
    );
    setUsers(updatedUsers);
    
    const targetUser = updatedUsers.find(user => user.id === userId);
    toast({
      title: "Estado actualizado",
      description: `El usuario ${targetUser?.username} ahora está ${targetUser?.status}.`
    });
  };

  // Filtrar usuarios por búsqueda
  const filteredUsers = users.filter(user => 
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filtrar logs por búsqueda
  const filteredLogs = activityLogs.filter(log => 
    log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.resource.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout title="Administración">
      <div className="animate-fade-in space-y-4">
        <h1 className="text-2xl font-bold text-primary">Panel de Administración</h1>
        <p className="text-muted-foreground mb-6">
          Gestiona usuarios, permisos y supervisa la actividad del sistema.
        </p>
        
        <div className="flex justify-between items-center mb-4">
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {!showUserForm && (
            <Button onClick={() => {setShowUserForm(true); setEditingUser(null);}}>
              <UserPlus className="mr-2 h-4 w-4" />
              Nuevo Usuario
            </Button>
          )}
        </div>
        
        {/* Alerta para permisos */}
        <Alert variant="default" className="bg-muted mb-4">
          <ShieldAlert className="h-4 w-4" />
          <AlertTitle>Sección restringida</AlertTitle>
          <AlertDescription>
            Esta sección está restringida a usuarios con permisos administrativos.
            Algunos cambios requieren privilegios elevados.
          </AlertDescription>
        </Alert>
        
        <Tabs defaultValue="users" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="users">Usuarios</TabsTrigger>
            <TabsTrigger value="activity">Registro de Actividad</TabsTrigger>
            <TabsTrigger value="database">Base de Datos</TabsTrigger>
            <TabsTrigger value="documentation">Documentación</TabsTrigger>
            <TabsTrigger value="permissions">Permisos</TabsTrigger>
          </TabsList>
          
          {/* Pestaña de Usuarios */}
          <TabsContent value="users" className="space-y-4">
            {showUserForm ? (
              <Card>
                <CardHeader>
                  <CardTitle>{editingUser ? "Editar Usuario" : "Nuevo Usuario"}</CardTitle>
                  <CardDescription>
                    {editingUser 
                      ? "Modifica la información del usuario existente" 
                      : "Ingresa la información para crear un nuevo usuario"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleUserSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="username">Nombre de Usuario</Label>
                        <Input
                          id="username"
                          name="username"
                          value={userForm.username}
                          onChange={handleFormChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Correo Electrónico</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={userForm.email}
                          onChange={handleFormChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="password">Contraseña</Label>
                        <Input
                          id="password"
                          name="password"
                          type="password"
                          value={userForm.password}
                          onChange={handleFormChange}
                          required={!editingUser}
                          placeholder={editingUser ? "Dejar en blanco para mantener" : ""}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                          value={userForm.confirmPassword}
                          onChange={handleFormChange}
                          required={!editingUser}
                          placeholder={editingUser ? "Dejar en blanco para mantener" : ""}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="role">Rol</Label>
                        <Select 
                          value={userForm.role}
                          onValueChange={handleRoleChange}
                        >
                          <SelectTrigger id="role">
                            <SelectValue placeholder="Seleccione un rol" />
                          </SelectTrigger>
                          <SelectContent>
                            {availableRoles.map(role => (
                              <SelectItem key={role} value={role}>{role}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="flex justify-end space-x-2 pt-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setShowUserForm(false);
                          setEditingUser(null);
                        }}
                      >
                        Cancelar
                      </Button>
                      <Button type="submit">
                        {editingUser ? "Actualizar Usuario" : "Crear Usuario"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Gestión de Usuarios</CardTitle>
                  <CardDescription>
                    Lista de usuarios registrados en el sistema
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Usuario</TableHead>
                          <TableHead>Correo Electrónico</TableHead>
                          <TableHead>Rol</TableHead>
                          <TableHead>Estado</TableHead>
                          <TableHead>Último Acceso</TableHead>
                          <TableHead>Acciones</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredUsers.length === 0 ? (
                          <TableRow>
                            <TableCell colSpan={6} className="text-center py-4">
                              No se encontraron usuarios con los criterios de búsqueda
                            </TableCell>
                          </TableRow>
                        ) : (
                          filteredUsers.map(user => (
                            <TableRow key={user.id}>
                              <TableCell className="font-medium">{user.username}</TableCell>
                              <TableCell>{user.email}</TableCell>
                              <TableCell>{user.role}</TableCell>
                              <TableCell>
                                <Badge variant={user.status === "Activo" ? "default" : "outline"}>
                                  {user.status}
                                </Badge>
                              </TableCell>
                              <TableCell>{user.lastLogin}</TableCell>
                              <TableCell>
                                <div className="flex items-center space-x-2">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => handleEditUser(user)}
                                  >
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => handleToggleUserStatus(user.id)}
                                  >
                                    <Switch checked={user.status === "Activo"} />
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => handleDeleteUser(user.id)}
                                    disabled={user.username === "admin"}
                                  >
                                    <Trash2 className="h-4 w-4 text-destructive" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>
          
          {/* Pestaña de Registro de Actividad */}
          <TabsContent value="activity" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Registro de Actividad</CardTitle>
                <CardDescription>
                  Historial de acciones realizadas por los usuarios en el sistema
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Timestamp</TableHead>
                        <TableHead>Usuario</TableHead>
                        <TableHead>Acción</TableHead>
                        <TableHead>Recurso</TableHead>
                        <TableHead>Dirección IP</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredLogs.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={5} className="text-center py-4">
                            No se encontraron registros con los criterios de búsqueda
                          </TableCell>
                        </TableRow>
                      ) : (
                        filteredLogs.map(log => (
                          <TableRow key={log.id}>
                            <TableCell className="whitespace-nowrap">{log.timestamp}</TableCell>
                            <TableCell>{log.user}</TableCell>
                            <TableCell>
                              <Badge variant={
                                log.action === "Eliminación" ? "destructive" :
                                log.action === "Actualización" ? "secondary" :
                                log.action === "Creación" ? "default" : "outline"
                              }>
                                {log.action}
                              </Badge>
                            </TableCell>
                            <TableCell>{log.resource}</TableCell>
                            <TableCell>{log.ip}</TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="outline">Exportar Registro</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Pestaña de Base de Datos */}
          <TabsContent value="database" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5" />
                    Exportar Base de Datos
                  </CardTitle>
                  <CardDescription>
                    Descarga copias de seguridad de la base de datos en diferentes formatos
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-3">
                    <Button 
                      className="w-full justify-start" 
                      variant="outline"
                      onClick={async () => {
                        toast({
                          title: "Descarga iniciada",
                          description: "Exportando base de datos en formato JSON..."
                        });
                        try {
                          const response = await fetch('/api/admin/export/json');
                          if (response.ok) {
                            const blob = await response.blob();
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement('a');
                            a.href = url;
                            a.download = `wpc_database_${new Date().toISOString().split('T')[0]}.json`;
                            a.click();
                            toast({
                              title: "Descarga completada",
                              description: "Base de datos exportada en formato JSON"
                            });
                          } else {
                            throw new Error('Error en la descarga');
                          }
                        } catch (error) {
                          toast({
                            title: "Error en descarga",
                            description: "No se pudo exportar la base de datos",
                            variant: "destructive"
                          });
                        }
                      }}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Descargar JSON
                    </Button>
                    <Button 
                      className="w-full justify-start" 
                      variant="outline"
                      onClick={async () => {
                        toast({
                          title: "Descarga iniciada",
                          description: "Exportando productos en formato CSV..."
                        });
                        try {
                          const response = await fetch('/api/admin/export/csv');
                          if (response.ok) {
                            const blob = await response.blob();
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement('a');
                            a.href = url;
                            a.download = `wpc_productos_${new Date().toISOString().split('T')[0]}.csv`;
                            a.click();
                            toast({
                              title: "Descarga completada",
                              description: "Productos exportados en formato CSV"
                            });
                          } else {
                            throw new Error('Error en la descarga');
                          }
                        } catch (error) {
                          toast({
                            title: "Error en descarga",
                            description: "No se pudo exportar los productos",
                            variant: "destructive"
                          });
                        }
                      }}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Descargar CSV
                    </Button>
                    <Button 
                      className="w-full justify-start" 
                      variant="outline"
                      onClick={async () => {
                        toast({
                          title: "Descarga iniciada",
                          description: "Exportando esquema en formato SQL..."
                        });
                        try {
                          const response = await fetch('/api/admin/export/sql');
                          if (response.ok) {
                            const blob = await response.blob();
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement('a');
                            a.href = url;
                            a.download = `wpc_database_schema_${new Date().toISOString().split('T')[0]}.sql`;
                            a.click();
                            toast({
                              title: "Descarga completada",
                              description: "Esquema exportado en formato SQL"
                            });
                          } else {
                            throw new Error('Error en la descarga');
                          }
                        } catch (error) {
                          toast({
                            title: "Error en descarga",
                            description: "No se pudo exportar el esquema",
                            variant: "destructive"
                          });
                        }
                      }}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Descargar SQL
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings2 className="h-5 w-5" />
                    Configuración de Base de Datos
                  </CardTitle>
                  <CardDescription>
                    Estadísticas y configuración del sistema
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Estado de la Base de Datos:</span>
                      <Badge variant="default">Conectado</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Último Respaldo:</span>
                      <span className="text-sm text-muted-foreground">2024-08-29 08:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Registros Totales:</span>
                      <span className="text-sm text-muted-foreground">1,247</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Tamaño BD:</span>
                      <span className="text-sm text-muted-foreground">45.2 MB</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Optimizar Base de Datos
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Pestaña de Documentación */}
          <TabsContent value="documentation" className="space-y-4">
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Documentación Técnica y Manuales
                  </CardTitle>
                  <CardDescription>
                    Guías, manuales técnicos y análisis de requisitos del sistema WPCREATION
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-primary">Manuales de Usuario</h3>
                      <div className="space-y-2">
                        <Button variant="ghost" className="w-full justify-start text-left h-auto p-3" asChild>
                          <Link href="/technical/manual-usuario">
                            <FileText className="mr-2 h-4 w-4 flex-shrink-0" />
                            <div>
                              <div className="font-medium">Manual de Usuario Final</div>
                              <div className="text-sm text-muted-foreground">Guía completa para usuarios del sistema WPCREATION</div>
                            </div>
                          </Link>
                        </Button>
                        <Button variant="ghost" className="w-full justify-start text-left h-auto p-3" asChild>
                          <Link href="/technical/manual-admin">
                            <FileText className="mr-2 h-4 w-4 flex-shrink-0" />
                            <div>
                              <div className="font-medium">Manual de Administración</div>
                              <div className="text-sm text-muted-foreground">Guía para administradores del sistema</div>
                            </div>
                          </Link>
                        </Button>
                        <Button variant="ghost" className="w-full justify-start text-left h-auto p-3" asChild>
                          <Link href="/technical/guia-instalacion">
                            <FileText className="mr-2 h-4 w-4 flex-shrink-0" />
                            <div>
                              <div className="font-medium">Guía de Instalación WPC</div>
                              <div className="text-sm text-muted-foreground">Instrucciones técnicas de instalación</div>
                            </div>
                          </Link>
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-primary">Documentación Técnica</h3>
                      <div className="space-y-2">
                        <Button variant="ghost" className="w-full justify-start text-left h-auto p-3" asChild>
                          <Link href="/technical/analisis-requisitos">
                            <FileText className="mr-2 h-4 w-4 flex-shrink-0" />
                            <div>
                              <div className="font-medium">Análisis de Requisitos</div>
                              <div className="text-sm text-muted-foreground">Documento completo de requisitos funcionales</div>
                            </div>
                          </Link>
                        </Button>
                        <Button variant="ghost" className="w-full justify-start text-left h-auto p-3" asChild>
                          <Link href="/technical/diagramas-arquitectura">
                            <FileText className="mr-2 h-4 w-4 flex-shrink-0" />
                            <div>
                              <div className="font-medium">Diagramas de Arquitectura</div>
                              <div className="text-sm text-muted-foreground">Diagramas UML y de flujo del sistema</div>
                            </div>
                          </Link>
                        </Button>
                        <Button variant="ghost" className="w-full justify-start text-left h-auto p-3" asChild>
                          <Link href="/technical/api-documentation">
                            <FileText className="mr-2 h-4 w-4 flex-shrink-0" />
                            <div>
                              <div className="font-medium">API Documentation</div>
                              <div className="text-sm text-muted-foreground">Documentación técnica de endpoints</div>
                            </div>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="text-lg font-semibold text-primary mb-3">Información del Proyecto WPC</h3>
                    <div className="prose prose-sm max-w-none text-muted-foreground">
                      <h4 className="text-foreground">Análisis de Requisitos</h4>
                      <p>El sistema WPCREATION ha sido diseñado para gestionar integralmente productos de madera compuesta (Wood Plastic Composite), incluyendo:</p>
                      <ul className="space-y-1">
                        <li>• Gestión de catálogo de productos WPC por categorías</li>
                        <li>• Control de inventario y stock</li>
                        <li>• Administración de clientes especializados</li>
                        <li>• Sistema de ventas y facturación</li>
                        <li>• Reportes y análisis de negocio</li>
                      </ul>
                      
                      <h4 className="text-foreground mt-4">Requisitos Funcionales</h4>
                      <p>RF001: El sistema debe permitir gestionar productos WPC clasificados en categorías específicas (pisos, paredes, techos, decking, revestimientos, accesorios, perfiles estructurales).</p>
                      <p>RF002: El sistema debe mantener un registro de clientes especializados en construcción y WPC.</p>
                      <p>RF003: El sistema debe generar reportes de ventas y análisis de inventario.</p>
                      <p>RF004: El sistema debe permitir la descarga de datos en múltiples formatos (JSON, CSV, SQL).</p>

                      <h4 className="text-foreground mt-4">Arquitectura del Sistema</h4>
                      <p>Frontend: React 18 + TypeScript + Tailwind CSS + shadcn/ui</p>
                      <p>Backend: Node.js + Express + TypeScript</p>
                      <p>Base de Datos: PostgreSQL con Drizzle ORM</p>
                      <p>Autenticación: Express Sessions</p>
                      <p>Hosting: Replit con base de datos Neon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Pestaña de Permisos */}
          <TabsContent value="permissions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Gestión de Permisos</CardTitle>
                <CardDescription>
                  Configuración de permisos por rol
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Administrador</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex items-center space-x-2">
                        <Switch id="admin-users" defaultChecked disabled />
                        <Label htmlFor="admin-users">Gestión de Usuarios</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="admin-config" defaultChecked disabled />
                        <Label htmlFor="admin-config">Configuración del Sistema</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="admin-reports" defaultChecked disabled />
                        <Label htmlFor="admin-reports">Informes Avanzados</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="admin-logs" defaultChecked disabled />
                        <Label htmlFor="admin-logs">Ver Registros</Label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Vendedor</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex items-center space-x-2">
                        <Switch id="seller-sales" defaultChecked />
                        <Label htmlFor="seller-sales">Gestión de Ventas</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="seller-clients" defaultChecked />
                        <Label htmlFor="seller-clients">Gestión de Clientes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="seller-products" defaultChecked />
                        <Label htmlFor="seller-products">Ver Productos</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="seller-reports" />
                        <Label htmlFor="seller-reports">Informes Básicos</Label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Inventario</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex items-center space-x-2">
                        <Switch id="inv-products" defaultChecked />
                        <Label htmlFor="inv-products">Gestión de Productos</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="inv-stock" defaultChecked />
                        <Label htmlFor="inv-stock">Control de Stock</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="inv-pets" />
                        <Label htmlFor="inv-pets">Gestión de Mascotas</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="inv-reports" />
                        <Label htmlFor="inv-reports">Informes de Inventario</Label>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2">
                <Button variant="outline">Restablecer Valores</Button>
                <Button onClick={() => {
                  toast({
                    title: "Permisos guardados",
                    description: "Los permisos han sido actualizados correctamente."
                  });
                }}>
                  Guardar Cambios
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}