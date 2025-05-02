# 📘 Sena Accessibility – Accessibility Side Menu for React + TailwindCSS

**Sena Accessibility** is a lightweight and customizable side menu component designed to enhance web accessibility in modern **React** projects using **TailwindCSS**. It is also fully compatible with **Next.js (Server-Side Rendering)**.

> 🧩 Easily plug & play into any project.  
> 🔗 [View on GitHub](https://github.com/AndresGutierrezHurtado/sena-accessibility) – Full documentation, demos, and contribution guidelines available.

---

## ✨ Features

-   ♿ **Accessibility Tools** – Improve UX for users with disabilities.
-   ⌨️ **Keyboard-Friendly** – Fully operable via keyboard.
-   🎨 **Custom Styles** – Customize colors using the `styles` prop.
-   🧰 **Modular Tools** – Enable/disable features via the `tools` prop.
-   💾 **Persistent Settings** – Preferences are saved in `localStorage`.
-   📁 **Predefined Profiles** – Ready-to-use setups for common needs.
-   ⚡ **Next.js Support** – Works with server-side rendering.

![widget](https://raw.githubusercontent.com/AndresGutierrezHurtado/sena-accessibility/refs/heads/main//docs/screenshots/index.png)

---

## 🧩 1. Installation and Basic Usage

### 📦 Installation

Run the following command in your terminal to install the library in your React project:

```bash
npm install sena-accessibility
```

> [!WARNING]
> 💡 Make sure you have **TailwindCSS** properly configured in your project, as it is a required dependency for the widget to work.

---

### 🚀 Integration into your project

#### In a traditional **React** application:

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

#### In a **Next.js** application (SSR disabled):

```jsx
import React from "react";
import dynamic from "next/dynamic";

const AccessibilityWidget = dynamic(
    () => import("sena-accessibility").then((mod) => mod.AccessibilityWidget),
    { ssr: false } // Prevents issues with server-side rendering
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

## ⚙️ Customization

### 🛠️ Enable Specific Tools

```jsx
const tools = ["text-size", "contrast", "highlight-links"];
<AccessibilityWidget tools={tools} />;
```

**Available Tools:**

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

### 🎨 Customize Colors

```jsx
const styles = {
    "widget-primary": "#6b1daf",
    "widget-primary-content": "#faf5ff",
    "widget-base-100": "#ffffff",
    "widget-base-200": "#eeeeee",
    "widget-base-content": "#111111",
    "widget-divider": "#cccccc",
};
<AccessibilityWidget styles={styles} />;
```

| Property                 | Description                                      |
| ------------------------ | ------------------------------------------------ |
| `widget-primary`         | Widget header & active buttons background color. |
| `widget-primary-content` | Text color over primary.                         |
| `widget-base-100`        | Background color for internal cards.             |
| `widget-base-200`        | Main background color.                           |
| `widget-base-content`    | General text color.                              |
| `widget-divider`         | Color for section/control dividers.              |

![styles](https://raw.githubusercontent.com/AndresGutierrezHurtado/sena-accessibility/refs/heads/main//docs/screenshots/styles.png)

---

### 📁 Predefined Profiles

Use predefined accessibility settings for common needs.

![profiles](https://raw.githubusercontent.com/AndresGutierrezHurtado/sena-accessibility/refs/heads/main//docs/screenshots/profile.png)

---

## 🎮 Keyboard Shortcuts

| Action            | Shortcut               |
| ----------------- | ---------------------- |
| Open/Close Widget | `Ctrl` + `Shift` + `K` |
| Navigate Options  | Arrow Keys / `Tab`     |
| Activate Option   | `Enter` / `Space`      |

---

## ✅ Compatibility

| Technology          | Supported     |
| ------------------- | ------------- |
| React (v17+)        | ✅            |
| Next.js (SSR)       | ✅            |
| TailwindCSS         | ✅ (required) |
| Screen Readers      | ✅            |
| Keyboard Navigation | ✅            |

---

## ❓ FAQ

**Can I use only some widget functions?**
Yes. Use the `tools` prop to define which ones.

**Does it support keyboard navigation?**
Yes. The widget is fully keyboard-accessible.

**Are user preferences saved?**
Yes. Settings are stored using `localStorage`.

---

## 🧪 Testing & Validation

-   ✅ Test across all major browsers.
-   ✅ Confirm compatibility with screen readers and keyboard-only use.
-   ✅ Ensure custom styles are applied correctly.

---

## 📫 Contact

**Author:** Andrés Gutiérrez Hurtado

-   📧 [andres52885241@gmail.com](mailto:andres52885241@gmail.com)
-   🔗 [LinkedIn](https://www.linkedin.com/in/andr%C3%A9s-guti%C3%A9rrez-hurtado-25946728b/)
-   💻 [GitHub](https://github.com/AndresGutierrezHurtado)
-   🌐 [Portfolio](https://andres-portfolio-b4dv.onrender.com)
