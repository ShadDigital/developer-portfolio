# Developer Portfolio Application

## Overview

A clean, minimalist full-stack portfolio website showcasing a developer's applications with download functionality. The system features a React frontend with shadcn/ui components, Express.js backend, and in-memory storage for development. The application displays a professional bio section and application downloads with live tracking that starts from 0.

## Recent Changes (August 14, 2025)
- Removed rating system completely from database schema and UI components
- Created organized asset structure for application images and downloads
- Fixed TypeScript errors and ensured error-free operation
- Implemented clean, minimalist design without complex animations
- Set up proper static file serving for both downloads and assets folders
- **COMPLETED**: Firebase integration for real download tracking with smart fallbacks
- **COMPLETED**: Removed live counter from hero section per user request
- **READY**: Vercel deployment configuration with complete setup guides
- Created comprehensive deployment documentation for free hosting (Vercel + Firebase)

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and Inter font
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints for applications and download tracking
- **Error Handling**: Centralized error middleware with structured responses
- **Logging**: Custom request/response logging for API endpoints

### Data Storage
- **Database**: PostgreSQL with connection via Neon serverless
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Two main entities - applications and downloads with foreign key relationships
- **Migrations**: Drizzle Kit for database schema management
- **Fallback**: In-memory storage implementation for development/testing

### Database Schema Design
- **Applications Table**: Stores app metadata including name, description, version, download URLs, file sizes, and download counts (ratings removed)
- **Downloads Table**: Tracks individual download events with user agent and timestamp information  
- **Relationships**: One-to-many relationship between applications and downloads
- **File Organization**: Static assets served from public/assets/ and public/downloads/ folders

### Development Environment
- **Build System**: Vite for frontend bundling with React plugin
- **Development Server**: Express server with Vite middleware integration in development
- **Type Safety**: Shared TypeScript schemas between frontend and backend
- **Hot Reload**: Vite HMR for rapid development cycles

### UI/UX Architecture
- **Design System**: Consistent component library with CSS variables for theming
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Animations**: Smooth transitions and hover effects for enhanced user experience
- **Accessibility**: Radix UI primitives ensure keyboard navigation and screen reader support

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting for production data storage
- **Connection Pooling**: Built-in connection management via @neondatabase/serverless

### UI Component Libraries
- **Radix UI**: Comprehensive set of low-level UI primitives for accessible components
- **Lucide React**: Icon library providing consistent iconography throughout the application
- **shadcn/ui**: Pre-built component templates using Radix UI and Tailwind CSS

### Development Tools
- **Drizzle Kit**: Database migration and schema management toolkit
- **TanStack Query**: Server state synchronization and caching library
- **React Hook Form**: Form state management with minimal re-renders
- **Zod**: Runtime type validation for form inputs and API responses

### Build and Development
- **Vite**: Fast build tool with TypeScript support and React integration
- **esbuild**: JavaScript bundler for production server builds
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **TypeScript**: Static type checking across frontend and backend codebases

### Third-party Integrations
- **Google Fonts**: Web font delivery for Inter font family
- **Unsplash**: Image hosting service for application screenshots and portfolio visuals
- **Replit**: Development environment integration with runtime error overlay and cartographer plugins