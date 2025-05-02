# 📘 Sena Accessibility – Accessibility Side Menu for React + TailwindCSS

**Sena Accessibility** is a lightweight and customizable side menu component designed to enhance web accessibility in modern **React** projects using **TailwindCSS**. It is also fully compatible with **Next.js (Server-Side Rendering)**.

> 🧩 Easily plug & play into any project.  
> 🔗 [View on GitHub](https://github.com/AndresGutierrezHurtado/sena-accessibility) – Full documentation, demos, and contribution guidelines available.

---

## ✨ Features

-   ♿ **Accessibility Tools** – Improve UX for users with disabilities.
-   ⌨️ **Keyboard-Friendly** – Fully operable via keyboard navigation.
-   🎨 **Custom Styles** – Modify widget colors with the `styles` prop.
-   🧰 **Modular Tools** – Enable/disable features with the `tools` prop.
-   💾 **Persistent Settings** – Preferences stored in `localStorage`.
-   📁 **Predefined Profiles** – Ready-to-use configs for common needs.
-   ⚡ **Next.js Support** – Fully compatible with server-side rendering.

![widget](https://raw.githubusercontent.com/AndresGutierrezHurtado/sena-accessibility/refs/heads/main//docs/screenshots/index.png)

---

## 🚀 Installation

```bash
npm install sena-accessibility
```

---

## 📦 Usage Example

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

Use default accessibility settings based on common needs.

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
Yes. Use the `tools` prop to define them.

**Does it support keyboard navigation?**
Yes. It is fully keyboard accessible.

**Are user settings saved?**
Yes. It uses `localStorage` to persist preferences.

---

## 🧪 Testing & Validation

-   ✅ Verify compatibility across all major browsers.
-   ✅ Confirm screen reader and keyboard-only functionality.
-   ✅ Test that custom styles apply as expected.

---

## 📫 Contact

**Author:** Andrés Gutiérrez Hurtado

-   📧 [andres52885241@gmail.com](mailto:andres52885241@gmail.com)
-   🔗 [LinkedIn](https://www.linkedin.com/in/andr%C3%A9s-guti%C3%A9rrez-hurtado-25946728b/)
-   💻 [GitHub](https://github.com/AndresGutierrezHurtado)
-   🌐 [Portfolio](https://andres-portfolio-b4dv.onrender.com)
