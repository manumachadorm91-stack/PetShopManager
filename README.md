# 🏗️ WPC Solutions Admin

![Status](https://img.shields.io/badge/status-active-success?style=flat-square)  
![Frontend](https://img.shields.io/badge/frontend-React%20%2B%20Vite-blue?style=flat-square&logo=react)  
![Backend](https://img.shields.io/badge/backend-Node.js%20%2B%20Express-green?style=flat-square&logo=node.js)  
![Database](https://img.shields.io/badge/database-MongoDB%2FPostgres-lightgrey?style=flat-square&logo=mongodb)  
![License](https://img.shields.io/badge/license-MIT-yellow?style=flat-square)  

**WPC Solutions Admin** es un sistema de gestión integral para productos de **madera compuesta (WPC)**.  
Permite administrar **catálogo, clientes, inventario, ventas, informes y configuración** de manera profesional y escalable.  

---

## ✨ Funcionalidades principales
- 📂 **Catálogo WPC** → gestión y exploración de productos (interior, exterior y accesorios).  
- 👥 **Clientes** → registro, edición y seguimiento de la cartera de clientes.  
- 📦 **Inventario** → control de stock de productos WPC en tiempo real.  
- 🛒 **Ventas** → registro de pedidos, facturación y análisis de ventas.  
- 📊 **Informes y reportes** → estadísticas de negocio, rendimiento y proyecciones.  
- ⚙️ **Configuración** → personalización del sistema y ajustes de negocio.  
- 🔑 **Administración** → gestión de usuarios, roles y permisos.  

---

## 🚀 Tecnologías utilizadas
Este proyecto está desarrollado con las siguientes tecnologías:

### 🔹 Frontend
- ⚛️ React (con Vite para build rápido)  
- 🎨 TailwindCSS (estilos modernos y responsive)  
- 📦 Axios (consumo de APIs REST)  

### 🔹 Backend
- 🌐 Node.js + Express (servidor API REST)  
- 🔐 JWT (autenticación y seguridad)  
- 🗂️ Mongoose / Sequelize (ORM para base de datos)  

### 🔹 Base de datos
- 🟢 MongoDB o 🟣 PostgreSQL (según configuración del entorno)  

---

## 📂 Estructura del proyecto
PetShopManager/ # (Nombre actual del repo en GitHub)
├── client/ # Frontend (React + Vite)
├── server/ # Backend (API REST con Node.js/Express)
├── shared/ # Archivos compartidos (tipos, utilidades)
├── public/ # Recursos estáticos (imágenes, íconos, etc.)
├── docs/ # Manuales y diagramas (PDF, imágenes, .md)
└── package.json # Configuración raíz del proyecto

yaml
Copiar código

---

## ⚙️ Instalación y uso

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/manumachadorm91-stack/PetShopManager.git
cd PetShopManager
2️⃣ Instalar dependencias
bash
Copiar código
npm install
3️⃣ Iniciar el proyecto
Para frontend:

bash
Copiar código
cd client
npm run dev
Para backend:

bash
Copiar código
cd server
npm run dev
📍 El frontend quedará disponible en: http://localhost:5173/
📍 El backend quedará disponible en: http://localhost:3000/

📊 Diagramas
Ejemplo de flujo del sistema (Mermaid):

mermaid
Copiar código
flowchart TD
    A[Usuario] -->|Accede| B[Frontend - React]
    B -->|Solicita datos| C[Backend - Node.js / Express]
    C -->|Consulta| D[(Base de Datos)]
    D -->|Responde| C
    C -->|Envía JSON| B
    B -->|Renderiza UI| A
📖 Manuales
📌 Manuales disponibles (guardar en carpeta docs/):

📘 Manual de Usuario

⚙️ Manual Técnico

📊 Presentación Ejecutiva

🖼️ Capturas de pantalla
Dashboard principal

Gestión de productos

Reportes de negocio

(Crea la carpeta docs/screenshots/ y guarda tus imágenes ahí para que se vean en el README.)

🤝 Contribuciones
Las contribuciones son bienvenidas 🎉.

Haz un fork del proyecto.

Crea una rama para tu feature:

bash
Copiar código
git checkout -b feature/nueva-funcionalidad
Haz commit de tus cambios:

bash
Copiar código
git commit -m "Agrego nueva funcionalidad"
Haz push a tu rama:

bash
Copiar código
git push origin feature/nueva-funcionalidad
Abre un Pull Request en GitHub.

📜 Licencia
Este proyecto se distribuye bajo la licencia MIT.
Puedes usarlo, modificarlo y distribuirlo libremente, siempre dando crédito a los autores.


