# Frontend - ServiFly

[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4+-yellow.svg)](https://vitejs.dev/)
[![CSS](https://img.shields.io/badge/CSS-Puro-blueviolet.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Descripción del Proyecto

Este es el **frontend de ServiFly**, una plataforma que conecta clientes con profesionales de diversos oficios. La aplicación web está construida con React y utiliza una arquitectura moderna y optimizada para el rendimiento gracias a Vite y estilos con CSS puro.

El frontend  permite:

- Registro e inicio de sesión de usuarios
- Navegación y búsqueda de servicios
- Gestión de perfiles y direcciones
- Reseñas y valoraciones
- Panel de administración

---

## 🧾 Estructura del Proyecto
```
ServiFly/
├── public/ # Archivos públicos
├── src/
│ ├── assets/ # Imágenes y recursos estáticos
│     └──img/ # Imágenes generales (Logos, etc.)
│     └──Members/ # Imágenes de los Miembros (Logos, etc.)
│ ├── components/ # Componentes reutilizables
│     └──AddresMap.jsx/ # Mapa para colocar las direcciones
│     └──footer.jsx/ # El footer de las paginas (Redes, derechos, politicas)
│     └──AddresMap.jsx/ # Mapa para colocar las direcciones
│     └──institucional.jsx/ # Visión, Misión y Objetivos
│     └──LocationLoading.jsx/ # Spinner de carga para obtener la ubicación
│     └──mapView.jsx/ # Mapa principal para mostrar los profesionales cercanos
│     └──PasswordResetModal.jsx/ # Modal para la recuperación de contraseñas
│     └──ReviewCard.jsx/ # Card para reseñas de profesionales
│     └──serviceCard.jsx/ # Card para ofertado de servicios
│     └──sidebard.jsx/ # Barra lateral para redirecciones
│     └──UserDetailsModal.jsx/ # Detalles de usuario con opción a Bloquear, en vista Admin
│     └──UserTable.jsx/ # Detalles de usuario en forma de tabla, para la vista Admin
│     └──whoAre.jsx/ # Carrusel de las imagenes de los miembros
│     └──workercard.jsx/ # Card para ofertado de profesionales
│ ├── contexts/ # Contextos globales
│     └──LocationContext.jsx/ # Obtiene el permiso de la ubicación y lo exporta a componentes de mapa
│ ├── pages/ # Vistas principales
│     └──AdminUser.jsx/ # Vista de Admin
│     └──Chat.jsx/ # Vista para el chat 
│     └──Condiciones.jsx/ # Vista de condiciones de uso
│     └──Dashboard.jsx/ # Vista principal para el uso de la plataforma
│     └──Direcciones.jsx/ # Vista para guardar y mostrar las direcciones del usuario
│     └──Favoritos.jsx/ # Vista para guardar los profesionales favoritos
│     └──HiringForm.jsx/ # Vista para contratar un profesional
│     └──History.jsx/ # Vista para mostrar el historial de profesionales
│     └──home.jsx/ # Vista principal
│     └──Login.jsx/ # Vista de login y registro
│     └──Politics.jsx/ # Vista de Politicas de uso
│     └──ProfessionalProfile.jsx/ # Vista para observar reseñas y calificación de un profesional
│     └──Profile.jsx/ # Vista para ver los datos de usuario y editarlos
│     └──ReviewsPage.jsx/ # Vista del profesional para ver sus reseñas
│ ├── router/ # Configuración de rutas (React Router)
│     └──AppRoutes.jsx/ # Manejo de las rutas
│ ├── styles/ # Estilos CSS globales y por componente
│     └──AdminUsers.css/ # Estilos de AdminUsers
│     └──App.css/ # Estilos de App
│     └──chat.css/ # Estilos del Chat
│     └──Condiciones.css/ # Estilos de Condiciones
│     └──Dashboard.css/ # Estilos de Dashboard
│     └──Direcciones.css/ # Estilos de Direcciones
│     └──Favoritos.css/ # Estilos de Favoritos
│     └──footer.css/ # Estilos de Footer
│     └──HiringForm.css/ # Estilos de HiringForm
│     └──History.css/ # Estilos de History
│     └──home.css/ # Estilos del Home
│     └──index.css/ # Estilos del Index
│     └──LocationLoading.css/ # Estilos de LocationLoading
│     └──login.css/ # Estilos del Login
│     └──mapView.css/ # Estilos del MapView
│     └──PasswordResetModal.css/ # Estilos del PasswordResetModal
│     └──ProfessionalProfile.css/ # Estilos del ProfessionalProfile
│     └──Profile.css/ # Estilos del Profile
│     └──Reviews.css/ # Estilos de Reviews
│     └──ServiceCard.css/ # Estilos de ServiceCard
│     └──sidebard.css/ # Estilos de la Sidebard
│     └──UserDetailsModal.css/ # Estilos de UserDetailsModal
│     └──UserTable.css/ # Estilos de UserTable
│     └──whoAre.css/ # Estilos del WhoAre
│     └──workercard.css/ # Estilos de la WorkerCard
│ ├── utils/ # archivos de utilidad (Carga de imágenes)
│     └──memberImages.css/ # Carga de las imágenes de los miembros y las exporta a diversos componentes
│ ├── App.jsx # Punto de entrada React
│ └── main.jsx # Inicialización del proyecto
├── .env # Variables de entorno
├── index.html # HTML base
├── package.json
├── vite.config.js
└── README.md

```
---

## 🚀 Tecnologías Utilizadas

| Tecnología     | Descripción                                                  |
|----------------|--------------------------------------------------------------|
| **React.js 19**   | Librería principal para construir la UI                      |
| **Vite**       | Bundler rápido y moderno para proyectos React                |
| **CSS puro**   | Estilos personalizados sin frameworks externos               |
| **React Router DOOM V7** | Navegación entre rutas protegidas y públicas               |
| **React Icons** | Iconografía               |
| **Google Maps JS API** | Visualización de mapas y geolocalización             |

---


## ⚙️ Instalación

### Requisitos Previos

- Node.js (v18 o superior)
- npm (v9 o superior)

1. Clonar el repositorio:

```bash
git clone https://github.com/Andy-Leal-Dev/ServiFly.git
cd ServiFly
```
2. Instalar Dependencias:

```bash
npm install
```
## Ejecutar el servidor

### Ejecutar de manera local

Para iniciar el servidor: 

```bash
npm run dev
```
Por defecto, corre en http://localhost:5173

## Configuración del Entorno (.env)

 -VITE_GoogleMapsAPI=Tu_key_de_la_Api


 ### Ejecutar de manera online (Render)

Para iniciar el servidor: 

```bash
npm install && npm run build
```
Publish directory

```bash
dist
```
Redirect and Rewrite Rules

| Source | Destination | Action |
| :------| :-------| :-----------| 
| `/*` | `/index.html` | Rewrite | 


## Configuración del Entorno (.env)

 -VITE_GoogleMapsAPI=Tu_key_de_la_Api

El link es: https://servifly.onrender.com/

## Vistas Principales

### `Home.jsx`
Al ingresar a ServiFly, los usuarios son recibidos por la vista
principal de la plataforma, diseñada para ofrecer una
navegación clara e intuitiva. Esta pantalla incluye las
siguientes secciones clave:

- Inicio: Presenta una visión general de la plataforma y sus principales beneficios, invitando al usuario a conocer cómo funciona ServiFly.
- Nosotros: Brinda información sobre la misión, visión y propósito de la plataforma, destacando el valor que ofrece a usuarios y profesionales.
- Regístrate: Botón destinado a nuevos usuarios y profesionales que deseen crear una cuenta para comenzar a usar los servicios.
- Iniciar Sesión: Permite el acceso a usuarios ya registrados, tanto clientes como profesionales, para gestionar sus servicios o perfiles.

### `Login.jsx`
Al hacer click en algunos de los Botones, "Registrarse o Iniciar Sesión", el usuario será redirigido a el la vista del login donde le permitira su registro o su inicio de sesión en los siguientes campos:

#### Registro
- Nombres
- Apellidos
- Correo Electronico
- Telefono
- Fecha de Nacimiento
- Contraseña y confimar contreseña
- Terminos y condiciones más Politicas de privacidad
#### Inicio de sesión
- Correo
- Contraseña

### `Dashboard.jsx`
Permite encontrar profesionales cercanos, buscarlos, filtrarlos y acceder a diversas vistas mediante la barra lateral

### `ProfessionalProfile.jsx`
Nos muestra la información del profesional que queremos contratar, como reseñas y calificicaciones del mismo

### `chat.jsx`
Al contactar con el profesional, tendremos un chat para comunicarnos con el

### `HiringForm.jsx`
Formulario para contratar al profesional, ingresando horas disponibles y ubicaciones registradas

### `Direcciones.jsx`
Permite registrar y guardar direcciones 

### `Profile.jsx`
Nos permite observar y editar nuestra información como usuarios

### `Condiciones.jsx`
Muestra las condiciones para el uso de ServiFly

### `Politics.jsx`
Muestra las politicas de seguridad para el uso de Servifly


## Rutas `AppRoutes.jsx`

| Ruta | Vista | Descripcion |
| :------| :-------| :-----------| 
| `/`    | `home.jsx` |Pagina principal | 
| `/login` | `Login.jsx` | Pagina del Login y Registro | 
| `/Condiciones` | `Condiciones.jsx` | Pagina de Condiciones de Uso | 
| `/Dashboard` | `Dashboard.jsx` | Pagina principal de funcionalidades | 
| `/Profile` | `Profile.jsx` | Pagina de información del usuario| 
| `/History` | `History.jsx` | Pagina de historial de profesionales contratados| 
| `/Chat`    | `Chat.jsx` |Pagina de chat con el profesional | 
| `/Review` | `ReviewsPage.jsx` | Pagina de reseñas que tiene el profesional| 
| `/Favoritos` | `Favoritos.jsx` | Pagina de profesionales favoritos | 
| `/Politics` | `Politics.jsx` | Pagina de Politicas de uso | 
| `/HiringForm` | `HiringForm.jsx` | Pagina de formulario para contratar un profesional| 
| `/Direcciones` | `Direcciones.jsx` | Pagina para ver y agregar direcciones como usuario| 
| `/Admin` | `AdminUsers.jsx` | Pagina de administración| 