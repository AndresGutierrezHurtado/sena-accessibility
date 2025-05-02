# 📘 Sena a11y - Menú lateral de accesibilidad

[English Version](https://github.com/AndresGutierrezHurtado/sena-a11y/blob/main/README.md)

**Sena a11y** es una libreria con un componente para proyectos **React** cont **TailwindCSS** que añade un menú lateral personalizable para mejorar la accesibilidad de cualquier sitio web. Está diseñada para integrarse fácilmente en proyectos modernos y accesibles.

> [!IMPORTANT]
> ⚠️ **Requisitos**: Esta librería está pensada para usarse en proyectos que utilicen **TailwindCSS** como sistema de estilos.

> [!TIP]
> ⚡ **Atajo rápido**: Presiona `Ctrl + Shift + K` para abrir el widget desde cualquier parte del sitio.  
> 🎮 **Navegación con teclado**: El widget puede ser completamente operado con teclado.

![widget](https://raw.githubusercontent.com/AndresGutierrezHurtado/sena-a11y/refs/heads/main//docs/screenshots/index.png)

---

## ✨ Características Principales

-   ♿ **Accesibilidad mejorada**: Aporta herramientas esenciales para mejorar la experiencia de usuarios con discapacidades.
-   ⌨️ **Navegación con teclado**: El widget puede usarse completamente sin necesidad de mouse.
-   🛠️ **Herramientas personalizables**: Selecciona qué funcionalidades mostrar con la prop `tools`.
-   🎨 **Estilo adaptable**: Personaliza los colores del widget con la prop `styles`.
-   💾 **Persistencia de configuración**: Las preferencias del usuario se guardan automáticamente con `localStorage`.
-   📂 **Perfiles predefinidos**: Soporte para aplicar configuraciones predeterminadas según necesidades comunes de accesibilidad.

![profiles](https://raw.githubusercontent.com/AndresGutierrezHurtado/sena-a11y/refs/heads/main//docs/screenshots/profile.png)

---

## 🧩 1. Instalación y Uso Básico

### 📦 Instalación

Ejecuta el siguiente comando en tu terminal para instalar la librería dentro de tu proyecto React:

```bash
npm install sena-a11y
```
> [!WARNING]
> 💡 Asegúrate de tener **TailwindCSS** correctamente configurado en tu proyecto, ya que es un requisito indispensable para el funcionamiento del widget.

---

### 🚀 Integración en tu proyecto

#### En una aplicación **React** tradicional:

```jsx
import React from "react";
import { AccessibilityWidget } from "sena-a11y";

export default function AppLayout() {
    return (
        <>
            <Header />
            <Content />
            <AccessibilityWidget />
            <Footer />
        </>
    );
}
```

#### En una aplicación **Next.js** (SSR desactivado):

```jsx
import React from "react";
import dynamic from "next/dynamic";

const AccessibilityWidget = dynamic(
    () => import("sena-a11y").then((mod) => mod.AccessibilityWidget),
    { ssr: false } // Evita problemas con el renderizado del lado del servidor
);

export default function AppLayout() {
    return (
        <>
            <Header />
            <Content />
            <AccessibilityWidget />
            <Footer />
        </>
    );
}
```

---

## 🛠️ 3. Personalización

### 3.1. Seleccionar herramientas disponibles (`tools`)

Puedes definir qué funcionalidades incluir en el widget mediante la prop `tools`, pasándole un array con los nombres de las herramientas:

```jsx
const customTools = ["text-size", "contrast", "highlight-links"];

<AccessibilityWidget tools={customTools} />;
```

**Herramientas disponibles:**

```js
[
    "screen-reader",
    "cursor",
    "text-size",
    "text-font",
    "text-line-height",
    "text-spacing",
    "text-align",
    "contrast",
    "color-saturation",
    "hide-images",
    "highlight-links",
    "widget-size",
    "widget-position",
];
```

![tools](https://raw.githubusercontent.com/AndresGutierrezHurtado/sena-a11y/refs/heads/main//docs/screenshots/tools.png)

---

### 3.2. Personalizar colores (`styles`)

Puedes modificar el esquema de colores del widget usando la prop `styles`, pasando un objeto con las claves personalizables.

```jsx
const customColors = {
    "widget-primary": "#6b1daf",
    "widget-primary-content": "#faf5ff",
    "widget-base-100": "#ffffff",
    "widget-base-200": "#eeeeee",
    "widget-base-content": "#111111",
    "widget-divider": "#cccccc",
};

<AccessibilityWidget styles={customColors} />;
```

**Significado de cada color:**

| Propiedad                | Descripción                                                    |
| ------------------------ | -------------------------------------------------------------- |
| `widget-primary`         | Color principal del encabezado del widget y botones activos.   |
| `widget-primary-content` | Color del texto sobre el color primario.                       |
| `widget-base-100`        | Color de fondo de las tarjetas dentro del widget.              |
| `widget-base-200`        | Color de fondo general del widget.                             |
| `widget-base-content`    | Color del texto general del contenido del widget.              |
| `widget-divider`         | Color de los divisores entre secciones o controles del widget. |

![styles](https://raw.githubusercontent.com/AndresGutierrezHurtado/sena-a11y/refs/heads/main//docs/screenshots/styles.png)

---

## ⌨️ 5. Atajos de Teclado

| Acción                 | Atajo                  |
| ---------------------- | ---------------------- |
| Abrir/Cerrar Widget    | `Ctrl` + `Shift` + `K` |
| Navegar entre opciones | Flechas o `Tab`        |
| Activar opción         | `Enter` o `Espacio`    |

---

## 🖥️ 4. Compatibilidad

| Tecnología             | Compatible     |
| ---------------------- | -------------- |
| React (v17+)           | ✅             |
| Next.js (SSR)          | ✅             |
| Lectores de pantalla   | ✅             |
| Navegación por teclado | ✅             |
| TailwindCSS            | ✅ (Requisito) |

---

## ❓ 6. Preguntas Frecuentes (FAQ)

### ¿Puedo usar solo algunas funciones del widget?

Sí. Usa la prop `tools` para definir cuáles.

---

### ¿Funciona con navegación por teclado?

Sí. El widget es totalmente accesible desde el teclado.

---

### ¿Se guardan las configuraciones del usuario?

Sí. Se utiliza `localStorage` para mantener las preferencias del usuario entre sesiones.

---

## 🧪 7. Pruebas y Validación

-   Verifica que el widget funcione correctamente en todos los navegadores soportados.
-   Asegúrate de que la navegación por teclado y lectores de pantalla funcionen sin problemas.
-   Revisa si los estilos personalizados aplican correctamente.

---

## 📞 8. Contacto

Para soporte o consultas, por favor contacta a:

-   Andrés Gutiérrez Hurtado
-   Correo Electrónico: [andres52885241@gmail.com](mailto:andres52885241@gmail.com)
-   LinkedIn: [Andrés Gutiérrez Hurtado](https://www.linkedin.com/in/andr%C3%A9s-guti%C3%A9rrez-hurtado-25946728b/)
-   GitHub: [@AndresGutierrezHurtado](https://github.com/AndresGutierrezHurtado)
-   Portfolio: [Link portfolio](https://andres-portfolio-b4dv.onrender.com)
