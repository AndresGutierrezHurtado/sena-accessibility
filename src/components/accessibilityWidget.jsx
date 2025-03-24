import React, { useState } from "react";

// Contexts
import { AccessibilityProvider } from "../contexts/accessibilityContext.jsx";

// Components
import Button from "./button.jsx";
import Menu from "./menu.jsx";

import "../styles.css";

export default function AccessibilityWidget({ language = "es", tools, theme, ...props }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <AccessibilityProvider language={language} tools={tools} theme={theme}>
            <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
            <Button onClick={() => setIsOpen(!isOpen)} />
        </AccessibilityProvider>
    );
}
