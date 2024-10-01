# SENA Accessibility Widget

**Sena Accessibility Widget** es una librería de componentes React diseñada para mejorar la accesibilidad en sitios web. Proporciona un menú o sidebar con varias opciones de accesibilidad que se pueden personalizar fácilmente para adaptarse a las necesidades de cualquier sitio. Este widget es altamente modificable, permitiendo a los desarrolladores ajustar su apariencia y funcionalidad según los requerimientos de accesibilidad de sus usuarios.

## Características

- Un **sidebar de accesibilidad** que puede incluir opciones como:
  - Ajuste de tamaño de texto
  - Cambio de contraste
  - Alternar modo de alto contraste
  - Subrayado de enlaces
  - Lectura en voz alta del contenido
- Fácil de personalizar y modificar a través de props y estilos
- Desarrollado en **React** para una integración sencilla en cualquier proyecto
- Documentado y probado con **Storybook** para garantizar una experiencia de desarrollo óptima y consistente

## Instalación

Puedes instalar esta librería en tu proyecto de React utilizando npm mediante el siguiente comando:

```
npm install sena-accessibility
```

## Props del Componente

- `theme`: Es un string que elige el tema claro u oscuro, por defecto está claro.

  ```jsx
  // Elige el tema: ["light", "dark"]
  theme: "light",
  ```

- `tools`: Es un array de objetos, estas son todas las opciones, si quieres elegir ciertas opciones le pasas el array con las opciones que deseas y su valor por defecto.

  ```jsx
  // Selecciona las herramientas que contendrá el widget
  tools: [
        {
            id: "screen-reader",
            defaultValue: false, // [false, true]
        },
        {
            id: "cursor",
            defaultValue: "auto", // ["auto", "white", "black", "mask", "readGuide"]
        },
        {
            id: "text-size",
            defaultValue: "normal", // ["small", "normal", "large", "extralarge", "giant"]
        },
        {
            id: "text-font",
            defaultValue: "current", // ["current", "font-sans", "font-serif", "font-mono"]
        },
        {
            id: "text-line-height",
            defaultValue: "normal", // ["normal", "loose", "extraloose"]
        },
        {
            id: "text-spacing",
            defaultValue: "normal", // ["normal", "loose", "extraloose"]
        },
        {
            id: "text-alignment",
            defaultValue: "auto", // ["auto", "left", "center", "right", "justify"]
        },
        {
            id: "contrast",
            defaultValue: "normal", // ["low", "normal", "high", "ultra", "inverted"]
        },
        {
            id: "color-saturation",
            defaultValue: "normal", // ["low", "normal", "high", "ultra"]
        },
        {
            id: "hide-images",
            defaultValue: false, // [false, true]
        },
        {
            id: "highlighted-links",
            defaultValue: false, // [false, true]
        },
        {
            id: "widget-size",
            defaultValue: "medium", // ["small", "medium", "large"]
        },
        {
            id: "widget-position",
            defaultValue: "left", // ["left", "right"]
        },
    ],
  ```

- `styles`: Es un objeto, en el cual se pueden modificar los colores del componente.

  ```jsx
  // Editar los colores del componente
  styles: {
    base: "#fff",
    baseContent: "#000",
    primary: "#39a900",
    primaryContent: "#fff",
    secondary: "#04324d",
    secondaryContent: "#fff",
  }
  ```

## Uso

A continuación te mostramos un ejemplo básico de cómo integrar el **Sena Accessibility Widget** en tu aplicación de React:

```jsx
import React from "react";
import { AccessibilityWidget } from "sena-acessibility";

export default function AppLayout() {
	return(
		<>
			<Header />
			<AccessibilityWidget />
			<Content />
			<Footer />
		</>
	);
}
```

## Edición

A continuación te mostraremos ejemplso de como editar a tu gusto el **Sena Accessibility Widget** en tu aplicación de React:

### Ejemplo: Tema Oscuro
Para implementar un tema oscuro en el Sena Accessibility Widget, puedes pasar la propiedad theme al componente. Aquí tienes un ejemplo de cómo hacerlo:

```jsx
import React from "react";
import { AccessibilityWidget } from "sena-accessibility";

export default function AppLayout() {
	return (
		<>
			<Header />
			<AccessibilityWidget theme="dark" />
			<Content />
			<Footer />
		</>
	);
}
```

### Ejemplo: Editar herramientas
Supongamos que deseas personalizar las herramientas del widget para incluir solo algunas de ellas, como el ajuste de tamaño de texto y el cambio de contraste. Aquí te muestro cómo puedes hacerlo:

```jsx
import React from "react";
import { AccessibilityWidget } from "sena-accessibility";

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

---
¡Gracias por usar **Sena Accessibility Widget**! Si tienes alguna pregunta o sugerencia, no dudes en contactarnos.
