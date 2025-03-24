import dictionary from "./dictionary.js";

const toolsList = [
    {
        id: "screen-reader",
        icon: "ScreenReaderIcon",
        text: "tools.screenReader",
        options: [false, true],
        defaultValue: false,
        currentValue: false,
    },
    {
        id: "cursor",
        icon: "CursorIcon",
        text: "tools.cursor",
        options: ["auto", "white", "black", "mask", "readGuide"],
        defaultValue: "auto",
        currentValue: "auto",
    },
    {
        id: "text-size",
        icon: "FontSizeIcon",
        text: "tools.fontSize",
        options: ["small", "normal", "large", "extralarge", "giant"],
        defaultValue: "normal",
        currentValue: "normal",
    },
    {
        id: "text-font",
        icon: "fontStyleIcon",
        text: "tools.fontFamily",
        options: ["current", "font-sans", "font-serif", "font-mono"],
        defaultValue: "current",
        currentValue: "current",
    },
    {
        id: "text-line-height",
        icon: "lineHeightIcon",
        text: "tools.lineHeight",
        options: ["normal", "loose", "extraloose"],
        defaultValue: "normal",
        currentValue: "normal",
    },
    {
        id: "text-spacing",
        icon: "letterSpacingIcon",
        text: "tools.letterSpacing",
        options: ["normal", "loose", "extraloose"],
        defaultValue: "normal",
        currentValue: "normal",
    },
    {
        id: "text-alignment",
        icon: "textAlignIcon",
        text: "tools.textAlign",
        options: ["auto", "left", "center", "right", "justify"],
        defaultValue: "auto",
        currentValue: "auto",
    },
    {
        id: "contrast",
        icon: "ContrastIcon",
        text: "tools.contrast",
        options: ["low", "normal", "high", "ultra", "inverted"],
        defaultValue: "normal",
        currentValue: "normal",
    },
    {
        id: "color-saturation",
        icon: "colorSaturationIcon",
        text: "tools.colorSaturation",
        options: ["low", "normal", "high", "ultra"],
        defaultValue: "normal",
        currentValue: "normal",
    },
    {
        id: "hide-images",
        icon: "HideImagesIcon",
        text: "tools.hideImages",
        options: [false, true],
        defaultValue: false,
        currentValue: false,
    },
    {
        id: "highlighted-links",
        icon: "highlightLinksIcon",
        text: "tools.highlightedLinks",
        options: [false, true],
        defaultValue: false,
        currentValue: false,
    },
    {
        id: "widget-size",
        icon: "widgetSizeIcon",
        text: "tools.widgetSize",
        options: ["small", "medium", "large"],
        defaultValue: "medium",
        currentValue: "medium",
    },
    {
        id: "widget-position",
        icon: "widgetPositionIcon",
        text: "tools.widgetPosition",
        options: ["left", "right"],
        defaultValue: "left",
        currentValue: "left",
    },
];

const languagesList = [
    {
        key: "es",
        label: "Español",
        dictionary: dictionary.es,
    },
    {
        key: "en",
        label: "English",
        dictionary: dictionary.en,
    },
];

const profilesList = [
    {
        key: "blind",
        label: "profiles.blind",
        tools: {
            hideImages: true,
            screenReader: true,
            cursor: "auto",
            fontSize: "large",
        },
    },
    {
        key: "dyslexia",
        label: "profiles.dyslexia",
        tools: {
            screenReader: true,
            contrast: "low",
            colorSaturation: "low",
            fontSize: "extralarge",
            fontFamily: "font-mono",
            letterSpacing: "loose",
            lineHeight: "loose",
            widgetSize: "large",
        },
    },
];

export { toolsList, languagesList, profilesList };
