# Overview

This is WPCREATION, a comprehensive WPC (Wood Plastic Composite) product catalog and management system built with React and Node.js. The application provides a complete administrative interface for managing WPC products, specialized clients, sales, and business analytics for the composite materials industry. The system features dedicated WPC product categorization, enhanced admin capabilities with database export functionality, technical documentation, user manuals, and comprehensive requirements analysis with architectural diagrams.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Forms**: React Hook Form with Zod validation for robust form handling
- **UI Components**: Radix UI primitives with shadcn/ui design system for consistent, accessible components
- **Styling**: Tailwind CSS with custom CSS variables for theming, supporting both light and dark modes
- **Build Tool**: Vite for fast development and optimized builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for type safety across the full stack
- **API Design**: RESTful API endpoints following conventional HTTP methods
- **Request Handling**: Express middleware for JSON parsing, CORS, and request logging
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Development**: Hot module replacement and development server integration with Vite

## Data Storage Solutions
- **Database**: PostgreSQL with Neon serverless hosting for scalable cloud database
- **ORM**: Drizzle ORM for type-safe database operations and migrations
- **Schema Management**: Shared schema definitions between client and server for consistency
- **Migrations**: Drizzle Kit for database schema migrations and version control
- **Connection**: Connection pooling with WebSocket support for serverless environments

## Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)
- **User Management**: Basic user authentication system with role-based access control
- **Security**: Password hashing and secure session handling
- **Authorization**: Role-based permissions for different user types (admin, vendor, inventory)

## External Dependencies
- **Database Hosting**: Neon serverless PostgreSQL for managed database infrastructure
- **UI Framework**: Radix UI for accessible, unstyled component primitives
- **Charts and Visualization**: Recharts for business analytics and reporting dashboards
- **Date Handling**: date-fns for consistent date manipulation and formatting
- **Development Tools**: Replit integration for cloud-based development environment
- **Asset Management**: Public asset serving for product images and WPC catalog media
- **Database Export**: Multi-format export capabilities (JSON, CSV, SQL) for data backup and analysis
- **Technical Documentation**: Comprehensive user manuals, requirements analysis, and architectural documentation
- **WPC Specialization**: Specialized categories and features for Wood Plastic Composite industry management