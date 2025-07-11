V 0.7.3.0 (

    -Se agrego la pagina de Politicas
    -Se agrego Pagina de Review
    -Se agrego Pagina de Favoritos
    -Se agrego Pagina de Contacto a Profesionales
    -Se agrego el componente ReviewCard
    -Modificaciones generales en varios componentes (Estructura)
    -Modificaciones generales en varios estilos
    -Modificaciones en Vistas

)

V 0.3.1.1 (

    -Agregado el perfil profesional en el dashboard
    -le quite el apartado de softeware al sidebard
)

V 0.3.0.0 (

    -Agregado la pagina del chat
)

V 0.2.7.9 (

    -Cambios en el Dashboard
    -Mejorado un poco el Diseño del Dashboard
    -Quite el apartado de SoftwareCard
)

V 0.2.7.8 (
    
    -Error en un archivo css, genero incompatibilidad en el servidor 
    
)

V 0.2.7.7 (

    -Se modifico una letra que generaba un error al subir al servidor "workerCard" la c
    
)

V 0.2.7.6 (

    -Se modifico una letra que generaba un error al subir al servidor "workerCard"
    
)

V 0.2.7.5 (

    -Se modifico una letra que generaba un error al subir al servidor "mapView"
    
)
V 0.2.7.4 (

    -Se agrego una nueva dependencia para iconos react-icons

    -Usando la dependencia de iconos se agregaron iconos a los formularios de inicio de sesión y registro

    -Se agrego el componente mapView que maneja la carga de la api del mapa, al igual que se agrego sus estilos propios con un archivo css

    -Se agrego la estructura principal del dashboard

    -Se agregaron los componentes de serviceCard,softwareCard y workercard con sus respectivos archivos de css, cada uno de esos componentes genera una carta de presentación en el dashboard

    -Se agrego el componente de sidebard con su archivo css que se encarga de renderizar una barra lateral desplegable

    -Se agregaron y renderizaron las vistas de Profile e History, que se acceden mediando la barra lateral del dashboard

    -Se agrego un modal mediante un componente PasswordResetModal para la parte de "haz olvidado tu contraseña", aun falta una parte

)

V 0.1.6.3 (

    -Modificacion de estilos en la parte de Home

    -Se agrego animaciones para la parte de beneficios

    -Se Cambio el estilo de la Mision y Vision, se agrego otro de Objetivos y Se elimino los de los valores

    -Se Cambio la img Ilustracion.png por otra y se movio a la parte de abajo

    -Junto a esa Ilustracion se elimino el mensaje que tenia y se le agrego un formulario de contacto

    -Se quitaron el apartado de los botones de "conoce al equipo" y se agrego un carrusel de fotos con las fotos de los integrantes

    -Se cambio la foto de uno de los estudiantes
)

V 0.1.5.2 (

    -Se quito la barra de navegación del Home

    -Se arreglo el error de fotos invetidas

    -Se arreglaron pequeños errores al mostrar los nombre e imagenes de los miembros

    -Se agregaron los terminos y condiciones, agregandole algunos estilos
)

V 0.1.4.1 (

    -Se agrego la carpeta utils, otra vez, por alguna razón se elimino

    -Se agrego un static.json para probar el deploy en render y que funcione las subrutas

    -Se agrego una carpeta members que esta llena de imagenes de los participantes

    -Se agrego un archivo en utils, llamado memberImages.js que cumple la función de importar todas las imagenes de los miembros y luego ser llamado en whoAre.jsx
)

V 0.1.3.1 (

    -Se agrego la carpeta components

    -Se agregaron los componenentes, footer, institucional, y whoAre

    -Se agrego la vista de Condiciones con su respectiva ruta

    -Se construyo el footer con las respectiva redes

    -Se modificaron inputs en el registro, se elimino el input cedula y se agrego el de contraseña y repetir
    contraseña

    -Algunos cambios minimos de css en Index.css, se agrego un color white en el fondo general
)

V 0.0.2.0 (

    - Se Agrego la carpeta utils

    - Se hiciero n modificaciones del css en App

    - Modificaciones de css en la Nav

    - Modificaciones de css en el Login

    - Modificaciones estructurales del Login
    
    - Se implemento un formulario de registro en la misma vista del Login

)



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
