import React, { useState } from "react";

// Contexts
import { AccessibilityProvider } from "../contexts/accessibilityContext.jsx";

// Components
import Button from "./layout/button.jsx";
import Menu from "./layout/menu.jsx";

import { MaskCursor } from "./MaskCursor.jsx";
import { ReadGuideCursor } from "./ReadGuideCursor.jsx";

export default function AccessibilityWidget({ tools = [], styles = {}, ...props }) {
    const [isOpen, setIsOpen] = useState(false);

    for (const [key, value] of Object.entries(styles)) {
        document.documentElement.style.setProperty(`--color-${key}`, value);
    }

    return (
        <AccessibilityProvider userTools={tools}>
            <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
            <Button onClick={() => setIsOpen(!isOpen)} />
            <MaskCursor />
            <ReadGuideCursor />
        </AccessibilityProvider>
    );
}
