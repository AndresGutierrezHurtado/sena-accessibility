# 📘 Sena Accessibility - Accessibility Side Menu

[Version en Español](https://github.com/AndresGutierrezHurtado/sena-accessibility/blob/main/README.es.md)

**Sena Accessibility** is a library with a component for **React** projects with **TailwindCSS** that adds a customizable side menu to improve the accessibility of any website. It is designed to easily integrate into modern and accessible projects.

> [!IMPORTANT]
> ⚠️ **Requirements**: This library is intended for use in projects that use **TailwindCSS** as a styling system.

> [!TIP]
> ⚡ **Quick Shortcut**: Press `Ctrl + Shift + K` to open the widget from anywhere on the site.
> 🎮 **Keyboard Navigation**: The widget can be fully operated using the keyboard.

![widget](https://raw.githubusercontent.com/AndresGutierrezHurtado/sena-accessibility/refs/heads/main//docs/screenshots/index.png)

---

## ✨ Main Features

-   ♿ **Enhanced Accessibility**: Provides essential tools to improve the experience for users with disabilities.
-   ⌨️ **Keyboard Navigation**: The widget can be used entirely without a mouse.
-   🛠️ **Customizable Tools**: Select which functionalities to show using the `tools` prop.
-   🎨 **Adaptive Style**: Customize the widget's colors using the `styles` prop.
-   💾 **Settings Persistence**: User preferences are automatically saved with `localStorage`.
-   📂 **Predefined Profiles**: Support for applying default settings based on common accessibility needs.

![profiles](https://raw.githubusercontent.com/AndresGutierrezHurtado/sena-accessibility/refs/heads/main//docs/screenshots/profile.png)

---

## 🧩 1. Installation and Basic Usage

Run the following command in your terminal within your React project:

```bash
npm install sena-accessibility
```

Import the component and the stylesheet in your main layout or wherever you want the widget to appear:

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

---

## 🛠️ 3. Customization

### 3.1. Select Available Tools (`tools`)

You can define which functionalities to include in the widget using the `tools` prop, passing an array with the names of the tools:

```jsx
const customTools = ["text-size", "contrast", "highlight-links"];

<AccessibilityWidget tools={customTools} />;
```

**Available tools:**

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

![tools](https://raw.githubusercontent.com/AndresGutierrezHurtado/sena-accessibility/refs/heads/main//docs/screenshots/tools.png)

---

### 3.2. Customize Colors (`styles`)

You can modify the widget's color scheme using the `styles` prop, passing an object with customizable keys.

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

**Meaning of each color:**

| Property                 | Description                                                |
| ------------------------ | ---------------------------------------------------------- |
| `widget-primary`         | Main color of the widget header and active buttons.        |
| `widget-primary-content` | Text color over the primary color.                         |
| `widget-base-100`        | Background color for the cards inside the widget.          |
| `widget-base-200`        | General background color of the widget.                    |
| `widget-base-content`    | General text color of the widget content.                  |
| `widget-divider`         | Color of the dividers between sections or widget controls. |

![styles](https://raw.githubusercontent.com/AndresGutierrezHurtado/sena-accessibility/refs/heads/main//docs/screenshots/styles.png)

---

## ⌨️ 5. Keyboard Shortcuts

| Action            | Shortcut               |
| ----------------- | ---------------------- |
| Open/Close Widget | `Ctrl` + `Shift` + `K` |
| Navigate options  | Arrow keys or `Tab`    |
| Activate option   | `Enter` or `Space`     |

---

## 🖥️ 4. Compatibility

| Technology          | Compatible    |
| ------------------- | ------------- |
| React (v17+)        | ✅            |
| Next.js (SSR)       | ✅            |
| Screen Readers      | ✅            |
| Keyboard Navigation | ✅            |
| TailwindCSS         | ✅ (Required) |

---

## ❓ 6. Frequently Asked Questions (FAQ)

### Can I use only some widget functions?

Yes. Use the `tools` prop to define which ones.

---

### Does it work with keyboard navigation?

Yes. The widget is fully accessible via keyboard.

---

### Are user settings saved?

Yes. `localStorage` is used to persist user preferences between sessions.

---

## 🧪 7. Testing and Validation

-   Verify that the widget works properly across all supported browsers.
-   Make sure keyboard navigation and screen readers work smoothly.
-   Check if custom styles apply correctly.

---

## 📞 8. Contact

For support or inquiries, please contact:

-   Andrés Gutiérrez Hurtado
-   Email: [andres52885241@gmail.com](mailto:andres52885241@gmail.com)
-   LinkedIn: [Andrés Gutiérrez Hurtado](https://www.linkedin.com/in/andr%C3%A9s-guti%C3%A9rrez-hurtado-25946728b/)
-   GitHub: [@AndresGutierrezHurtado](https://github.com/AndresGutierrezHurtado)
-   Portfolio: [Link portfolio](https://andres-portfolio-b4dv.onrender.com)
