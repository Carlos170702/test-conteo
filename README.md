# Sistema de Gestión de Inventario

Este proyecto es un sistema de gestión de inventario desarrollado con Next.js, React y TypeScript, que permite a los usuarios administrar productos de manera eficiente.

## Características

- Agregar nuevos productos con validación de formularios
- Visualizar listado de productos con filtros
- Interfaz de usuario intuitiva y responsive
- Almacenamiento local mediante cookies

## Requisitos previos

- Node.js (versión 14.x o superior)
- npm o yarn

## Instalación

Sigue estos pasos para configurar el proyecto en tu entorno local:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repositorio.git
   cd nombre-del-repositorio
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. Abre tu navegador y visita `http://localhost:3000`

## Estructura del proyecto

- `/src/components`: Componentes React reutilizables
- `/src/hooks`: Custom hooks para la lógica de negocio
- `/src/models`: Interfaces y tipos de TypeScript
- `/src/schema`: Esquemas de validación con Yup

## Tecnologías utilizadas

- Next.js
- React
- TypeScript
- React Hook Form
- Yup (validación)
- Tailwind CSS
