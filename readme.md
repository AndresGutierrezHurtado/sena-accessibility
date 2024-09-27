# Sena Accessibility Widget

**Sena Accessibility Widget** es una librería de componentes React diseñada para mejorar la accesibilidad en sitios web. Proporciona un menú o sidebar con varias opciones de accesibilidad que se pueden personalizar fácilmente para adaptarse a las necesidades de cualquier sitio. Este widget es altamente modificable, permitiendo a los desarrolladores ajustar su apariencia y funcionalidad según los requerimientos de accesibilidad de sus usuarios.

## Características

-   Un **sidebar de accesibilidad** que puede incluir opciones como:
    -   Ajuste de tamaño de texto
    -   Cambio de contraste
    -   Alternar modo de alto contraste
    -   Subrayado de enlaces
    -   Lectura en voz alta del contenido
-   Fácil de personalizar y modificar a través de props y estilos
-   Desarrollado en **React** para una integración sencilla en cualquier proyecto
-   Documentado y probado con **Storybook** para garantizar una experiencia de desarrollo óptima y consistente

## Instalación

Puedes instalar esta librería en tu proyecto de React utilizando npm o yarn.

### Usando npm

```bash
npm install sena-accessibility
```

## Props del Componente

-   `options`: Un objeto que define qué opciones de accesibilidad mostrar en el widget. Ejemplo:

```js
{
  theme: true, // Elige el tema, ["light", "dark"]
  tools: true, // Selecciona que herramientas contendrá el widget
  styles: true, // Modifica colores del componente
}
```

## Uso

A continuación te mostramos un ejemplo básico de cómo integrar el **Sena Accessibility Widget** en tu aplicación de React:

```jsx
import React from "react";
import { AccessibilityWidget } from "sena-accessibility-widget";

function App() {
    return (
        <div className="App">
            <h1>Bienvenido a mi sitio web</h1>
            <AccessibilityWidget
                options={{
                    theme: "light",
                    tools: [
                        {
                            id: "text-size",
                            defaultValue: "md",
                        },
                        {
                            id: "contrast",
                            defaultValue: "normal",
                        },
                    ],
                    styles: {
                        base: "#fff",
                        baseContent: "#000",
                        primary: "#39a900",
                        primaryContent: "#fff",
                        secondary: "#04324d",
                        secondaryContent: "#fff",
                    },
                }}
            />
        </div>
    );
}

export default App;
```

## Desarrollo y Storybook

Este proyecto utiliza **Storybook** para documentar y probar los componentes. Storybook es una herramienta que te permite visualizar y probar tus componentes de React de forma aislada.

### Instalación de dependencias

Antes de iniciar el desarrollo, instala las dependencias necesarias:

```bash
npm install
```

### Ejecutar Storybook

Para iniciar Storybook y ver los componentes documentados:

```bash
npm run storybook
```

Storybook estará disponible en [http://localhost:6006](http://localhost:6006).

### Compilar el Proyecto

Para compilar la librería:

```bash
npm run build
```

## Licencia

Este proyecto está licenciado bajo la [MIT License]().

---

¡Gracias por usar **Sena Accessibility Widget**! Si tienes alguna pregunta o sugerencia, no dudes en contactarnos.
