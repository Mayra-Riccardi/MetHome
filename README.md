# 🛒 E-commerce en React

Este proyecto es un **e-commerce** desarrollado como entrega final del curso de **React JS**, que simula una tienda online con gestión de productos, carrito de compras y finalización de compra con registro de órdenes en Firebase.

## 📌 Características principales
- 📦 **Listado dinámico de productos** obtenido desde una base de datos.
- 🛍 **Carrito de compras** con almacenamiento persistente usando `Context API` y `localStorage`.
- ➕➖ **Control de cantidad de productos** con validación de stock.
- 🧾 **Página de checkout** con formulario controlado y envío de orden a **Firebase Firestore**.
- 🔑 **Generación automática de ID de compra** al confirmar la orden.
- 🎨 **Diseño responsive** con Bootstrap y SASS.

## 🛠 Tecnologías utilizadas
- **React JS** – Biblioteca principal para la construcción de la interfaz.
- **React Router DOM** – Manejo de rutas y navegación SPA.
- **Context API** – Gestión de estado global para el carrito.
- **Firebase Firestore** – Base de datos para almacenar órdenes.
- **Bootstrap** – Estilos y layout responsivo.
- **SASS** – Preprocesador CSS para estilos personalizados.
- **JavaScript (ES6+)** – Lógica de la aplicación.
- **HTML5 / CSS3** – Estructura y diseño base.

## 🚀 Funcionalidades
1. **Visualización de productos**
   - Lista de productos renderizada dinámicamente.
   - Botones para agregar al carrito desde cada card.
2. **Carrito de compras**
   - Vista dedicada del carrito.
   - Posibilidad de aumentar/disminuir cantidad de productos.
   - Cálculo automático del total.
3. **Checkout**
   - Formulario controlado con `<label>` y validación básica.
   - Envío de orden a Firebase con datos de comprador y productos.
   - Limpieza del carrito después de la compra.
4. **Persistencia**
   - Carrito guardado en `localStorage` para que no se pierdan datos al recargar.
5. **Navegación**
   - Rutas separadas para Home, Productos, Detalle, Carrito y Checkout.

## 📷 Capturas de pantalla
*(Puedes agregar imágenes aquí de la vista de productos, carrito y checkout)*

## ⚙ Instalación y ejecución
### Requisitos
- Node.js (recomendado **18+**)

### Pasos
1. Instalar dependencias:

   ```bash
   npm install
   ```

2. Configurar Firebase (obligatorio para que carguen productos/órdenes):
   - Copiá el template de variables:

     ```bash
     cp .env.example .env.local
     ```

   - Completá los valores en `.env.local` con la config de tu proyecto en Firebase:
     Firebase Console → **Project settings** → **General** → **Your apps (Web)** → **SDK setup and configuration**

3. Preparar Firestore:
   - Crear la colección **`products`** con documentos de productos.
   - Verificar reglas/permisos para poder leer los productos desde el front.

4. Levantar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   Abrí `http://localhost:5173/` (o el puerto que muestre la terminal).

> Nota: este repo no incluye `.env.local` (por seguridad). Si descargaste el proyecto, necesitás configurar **tus** credenciales de Firebase para que funcione.
