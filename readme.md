**Sena Accessibility Widget** es una librería de componentes React diseñada para mejorar la accesibilidad en sitios web. Proporciona un menú o sidebar con varias opciones de accesibilidad que se pueden personalizar fácilmente para adaptarse a las necesidades de cualquier sitio. Este widget es altamente modificable, permitiendo a los desarrolladores ajustar su apariencia y funcionalidad según los requerimientos de accesibilidad de sus usuarios.

## **Características**

-   Un **sidebar de accesibilidad** que puede incluir opciones como:
    -   Lector de pantalla
    -   Cursor
    -   Tamaño de fuente
    -   Fuente de texto
    -   Altura de línea
    -   Espaciado de texto
    -   Alineación de texto
    -   Contraste
    -   Saturación de color
    -   Ocultar imágenes
    -   Enlaces resaltados
    -   Tamaño del widget
    -   Posición del widget
-   Fácil de personalizar y modificar a través de props y estilos
-   Desarrollado en **React** para una integración sencilla en cualquier proyecto

## **Props del Componente**

-   `tools`: Es un array de objetos, estas son todas las opciones, si quieres elegir ciertas opciones le pasas el array con las opciones que deseas.

    ```jsx
    // Selecciona las herramientas que contendrá el widget:
    [
          "screen-reader",
          "cursor",
          "text-size",
          "text-font",
          "text-line-height",
          "text-spacing",
          "text-alignment",
          "contrast",
          "color-saturation",
          "hide-images",
          "highlighted-links",
          "widget-size",
          "widget-position",
    ],
    ```

-   `styles`: Es un objeto, en el cual se pueden modificar los colores del componente. si no se pasa nada este sera el elemento por defecto:
    ```jsx
    // Editar los colores del componente styles:
    {
      "widget-base": "#E5E5E5",
      "widget-base-content": "#0A0A0A",
      "widget-primary": "#082F49",
      "widget-primary-content": "#FAFAFA",
      "widget-secondary": "#0284C7",
      "widget-secondary-content": "#FAFAFA",
      "widget-divider": "#A3A3A3",
    }
    ```

## **Uso**

A continuación te mostramos un ejemplo básico de cómo integrar el **Sena Accessibility Widget** en tu aplicación de React:

```jsx
import React from "react";
import { AccessibilityWidget } from "sena-accessibility";
import "sena-accessibility/dist/index.css";

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

## **Edición**

A continuación te mostraremos ejemplso de como editar a tu gusto el **Sena Accessibility Widget** en tu aplicación de React:

### **Ejemplo: Editar herramientas**

Supongamos que deseas personalizar las herramientas del widget para incluir solo algunas de ellas, como el ajuste de tamaño de texto y el cambio de contraste. Aquí te muestro cómo puedes hacerlo:

```jsx
import React from "react";
import { AccessibilityWidget } from "sena-accessibility";
import "sena-accessibility/dist/index.css";

export default function AppLayout() {
    const customTools = [
        {
            id: "text-size",
            defaultValue: "large", // El tamaño de texto inicial será grande
        },
        {
            id: "contrast",
            defaultValue: "high", // El contraste inicial será alto
        },
        {
            id: "highlighted-links",
            defaultValue: true, // Resaltar enlaces estará activado por defecto
        },
    ];

    return (
        <>
            <Header />
            <AccessibilityWidget tools={customTools} />
            <Content />
            <Footer />
        </>
    );
}
```

### **Ejemplo: Editar colores**

Supongamos que deseas personalizar las colores del widget. Aquí te muestro cómo puedes hacerlo:

```jsx
import React from "react";
import { AccessibilityWidget } from "sena-accessibility";
import "sena-acessibility/dist/index.css";

export default function AppLayout() {
    const customColors = {
        "widget-primary": "#3b0764",
        "widget-secondary": "#7e22ce",
    };

    return (
        <>
            <Header />
            <AccessibilityWidget styles={customColors} />
            <Content />
            <Footer />
        </>
    );
}
```
