import React, { useState } from "react";

import "../styles.css";
import Button from "./button.jsx";
import Menu from "./menu.jsx";

export default function AccessibilityWidget({ ...props }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
            <Button onClick={() => setIsOpen(!isOpen)} />
        </>
    );
}
