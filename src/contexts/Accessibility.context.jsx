import React, { createContext, useContext, useEffect, useState } from "react";

export const AccessibilityContext = createContext();

const toolsList = [
    {
        id: "screen-reader",
        icon: "ScreenReaderIcon",
        text: "Lector de pantalla",
        options: [false, true],
        defaultValue: false,
        currentValue: false,
    },
    {
        id: "cursor",
        icon: "CursorIcon",
        text: "Cursor",
        options: ["auto", "white", "black", "mask", "readGuide"],
        defaultValue: "auto",
        currentValue: "auto",
    },
    {
        id: "text-size",
        icon: "FontSizeIcon",
        text: "Tamaño de texto",
        options: ["small", "normal", "large", "extralarge", "giant"],
        defaultValue: "normal",
        currentValue: "normal",
    },
    {
        id: "text-font",
        icon: "fontStyleIcon",
        text: "Fuente de texto",
        options: ["current", "font-sans", "font-serif", "font-mono"],
        defaultValue: "current",
        currentValue: "current",
    },
    {
        id: "text-line-height",
        icon: "lineHeightIcon",
        text: "Altura de linea de texto",
        options: ["normal", "loose", "extraloose"],
        defaultValue: "normal",
        currentValue: "normal",
    },
    {
        id: "text-spacing",
        icon: "letterSpacingIcon",
        text: "Espaciado de texto",
        options: ["normal", "loose", "extraloose"],
        defaultValue: "normal",
        currentValue: "normal",
    },
    {
        id: "text-alignment",
        icon: "textAlignIcon",
        text: "Alineamiento de texto",
        options: ["auto", "left", "center", "right", "justify"],
        defaultValue: "auto",
        currentValue: "auto",
    },
    {
        id: "contrast",
        icon: "ContrastIcon",
        text: "Contraste",
        options: ["low", "normal", "high", "ultra", "inverted"],
        defaultValue: "normal",
        currentValue: "normal",
    },
    {
        id: "color-saturation",
        icon: "colorSaturationIcon",
        text: "Saturación de color",
        options: ["low", "normal", "high", "ultra"],
        defaultValue: "normal",
        currentValue: "normal",
    },
    {
        id: "hide-images",
        icon: "HideImagesIcon",
        text: "Ocultar imágenes",
        options: [false, true],
        defaultValue: false,
        currentValue: false,
    },
    {
        id: "highlighted-links",
        icon: "highlightLinksIcon",
        text: "Enlaces destacados",
        options: [false, true],
        defaultValue: false,
        currentValue: false,
    },
    {
        id: "widget-size",
        icon: "widgetSizeIcon",
        text: "Tamaño del widget",
        options: ["small", "medium", "large"],
        defaultValue: "medium",
        currentValue: "medium",
    },
    {
        id: "widget-position",
        icon: "widgetPositionIcon",
        text: "Posición del sidebar",
        options: ["left", "right"],
        defaultValue: "left",
        currentValue: "left",
    },
];

export default function AccessibilityProvider({ children, selectedTools }) {
    const defaultSettings = toolsList.filter((tool) => {
        const item = selectedTools.find(
            (selectedTool) => selectedTool.id === tool.id
        );
        return item ? { ...tool, currentValue: item.currentValue } : null;
    });

    const [settings, setSettings] = useState(defaultSettings);

    localStorage.removeItem("settings");

    // Guarda los valores de configuración en localStorage
    const updateSettings = (newConfig) => {
        localStorage.setItem("settings", JSON.stringify(newConfig));
        setSettings(newConfig);
    };

    // Obtener los datos de configuración almacenados en localStorage
    useEffect(() => {
        try {
            const storedSettings = JSON.parse(localStorage.getItem("settings"));
            setSettings(storedSettings ? storedSettings : defaultSettings);
        } catch (error) {
            console.error("Error parsing settings from localStorage", error);
        }
    }, [window.location.pathname]);

    return (
        <AccessibilityContext.Provider
            value={{
                settings,
                updateSettings,
                defaultSettings,
            }}
        >
            {children}
        </AccessibilityContext.Provider>
    );
}

export function useAccessibilityContext() {
    return useContext(AccessibilityContext);
}
