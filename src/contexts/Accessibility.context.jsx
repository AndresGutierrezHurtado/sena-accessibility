import React, { createContext, useContext, useEffect, useState } from "react";
import * as Icons from "../assets/icons";

export const AccessibilityContext = createContext();

const toolsList = [
    {
        id: "screen-reader",
        icon: () => <Icons.ScreenReaderIcon />,
        text: "Lector de pantalla",
        options: [false, true],
        defaultValue: false,
        currentValue: false,
    },
    {
        id: "cursor",
        icon: () => <Icons.CursorIcon />,
        text: "Cursor",
        options: ["auto", "white", "black", "mask", "readGuide"],
        defaultValue: "auto",
        currentValue: "auto",
    },
    {
        id: "text-size",
        icon: () => <Icons.FontSizeIcon />,
        text: "Tamaño de texto",
        options: ["small", "normal", "large", "extralarge", "giant"],
        defaultValue: "normal",
        currentValue: "normal",
    },
    {
        id: "text-font",
        icon: () => <Icons.fontStyleIcon />,
        text: "Fuente de texto",
        options: ["current", "font-sans", "font-serif", "font-mono"],
        defaultValue: "current",
        currentValue: "current",
    },
    {
        id: "text-line-height",
        icon: () => <Icons.lineHeightIcon />,
        text: "Altura de linea de texto",
        options: ["normal", "loose", "extraloose"],
        defaultValue: "normal",
        currentValue: "normal",
    },
    {
        id: "text-spacing",
        icon: () => <Icons.letterSpacingIcon />,
        text: "Espaciado de texto",
        options: ["normal", "loose", "extraloose"],
        defaultValue: "normal",
        currentValue: "normal",
    },
    {
        id: "text-alignment",
        icon: () => <Icons.textAlignIcon />,
        text: "Alineamiento de texto",
        options: ["left", "center", "right", "justify"],
        defaultValue: "left",
        currentValue: "left",
    },
    {
        id: "contrast",
        icon: () => <Icons.ContrastIcon />,
        text: "Contraste",
        options: ["low", "normal", "high", "ultra", "inverted"],
        defaultValue: "normal",
        currentValue: "normal",
    },
    {
        id: "color-saturation",
        icon: () => <Icons.colorSaturationIcon />,
        text: "Saturación de color",
        options: ["normal", "low", "high", "inverted"],
        defaultValue: "normal",
        currentValue: "normal",
    },
    {
        id: "hide-images",
        icon: () => <Icons.HideImagesIcon />,
        text: "Ocultar imágenes",
        options: [false, true],
        defaultValue: false,
        currentValue: false,
    },
    {
        id: "highlighted-links",
        icon: () => <Icons.highlightLinksIcon />,
        text: "Enlaces destacados",
        options: [false, true],
        defaultValue: false,
        currentValue: false,
    },
    {
        id: "widget-size",
        icon: () => <Icons.widgetSizeIcon />,
        text: "Tamaño del widget",
        options: ["small", "medium", "large"],
        defaultValue: "medium",
        currentValue: "medium",
    },
    {
        id: "widget-position",
        icon: () => <Icons.widgetPositionIcon />,
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
