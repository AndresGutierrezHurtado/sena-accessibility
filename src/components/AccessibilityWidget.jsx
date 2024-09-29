import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "../assets/styles.css";

// Icons
import * as Icons from "../assets/icons.jsx";

// Context
import AccessibilityProvider, {
    useAccessibilityContext,
} from "../contexts/Accessibility.context.jsx";

// Components
import AccessibilityItem from "./AccessibilityItem.jsx";
import { MaskCursor } from "../components/MaskCursor.jsx";
import { ReadGuideCursor } from "./ReadGuideCursor.jsx";

// Hooks
import { useReadText } from "../hooks/useReadText";
import { useFontSizeChange } from "../hooks/useFontSizeChange";
import { useFontStyleChange } from "../hooks/useFontStyleChange";
import { useLineHeightChange } from "../hooks/useLineHeightChange";
import { useLetterSpacingChange } from "../hooks/useLetterSpacingChange";
import { useTextAlignChange } from "../hooks/useTextAlignChange";
import { useContrastChange } from "../hooks/useContrastChange";
import { useCursorChange } from "../hooks/useCursorChange";
import { useHideImages } from "../hooks/useHideImages";
import { usehighlightLinks } from "../hooks/useHighlightLinks";
import { useWidgetPositionChange, useWidgetSizeChange } from "../hooks/useWidgetConfig";

export function AccessibilityWidget({ theme, tools, styles }) {
    return (
        <AccessibilityProvider selectedTools={tools}>
            <AccessibilityWidgetContent theme={theme} styles={styles} />
            <MaskCursor />
            <ReadGuideCursor />
        </AccessibilityProvider>
    );
}

function AccessibilityWidgetContent({ theme, styles }) {
    document.body.style.setProperty("--base", styles.base);
    document.body.style.setProperty("--base-content", styles.baseContent);
    document.body.style.setProperty("--primary", styles.primary);
    document.body.style.setProperty("--primary-content", styles.primaryContent);
    document.body.style.setProperty("--secondary", styles.secondary);
    document.body.style.setProperty(
        "--secondary-content",
        styles.secondaryContent
    );

    const { settings, updateSettings, defaultSettings } =
        useAccessibilityContext();

    useReadText();
    useEffect(() => {
        useFontSizeChange(settings);
        useFontStyleChange(settings);
        useLineHeightChange(settings);
        useLetterSpacingChange(settings);
        useTextAlignChange(settings);
        useContrastChange(settings);
        useCursorChange(settings);
        useHideImages(settings);
        usehighlightLinks(settings);
        useWidgetSizeChange(settings);
        useWidgetPositionChange(settings);
    }, [settings, window.location.pathname]);

    return (
        <div
            className={`widget__container ${
                theme === "dark" ? "widget--dark" : ""
            }`}
        >
            <input type="checkbox" id="widget__toggle" />

            <button
                className="widget__button"
                onClick={() =>
                    document.getElementById("widget__toggle").click()
                }
            >
                <Icons.AccessibilityIcon color={styles.secondary} size={40} />
            </button>

            <div
                className="widget__overlay"
                onClick={() =>
                    document.getElementById("widget__toggle").click()
                }
            ></div>

            {/* Widget */}
            <article className="widget">
                {/* Widget header */}
                <div className="widget__header">
                    <h3 className="text-2xl">Menú de accesibilidad SENA</h3>
                    <hr />
                </div>

                {/* Widget content */}
                <div className="widget__main">
                    {settings &&
                        settings.map((tool) => (
                            <AccessibilityItem
                                item={tool}
                                key={tool.id}
                                useAccessibilityContext={
                                    useAccessibilityContext
                                }
                            />
                        ))}
                </div>

                {/* Widget footer */}
                <div className="widget__footer">
                    <hr />
                    <span>
                        <button
                            onClick={() =>
                                document
                                    .getElementById("widget__toggle")
                                    .click()
                            }
                        >
                            <Icons.XIcon />
                            Cerrar
                        </button>
                        <button onClick={() => updateSettings(defaultSettings)}>
                            <Icons.RotateArrowIcon />
                            Reiniciar
                        </button>
                    </span>
                </div>
            </article>
        </div>
    );
}

AccessibilityWidget.propTypes = {
    theme: PropTypes.string,
    tools: PropTypes.array,
    styles: PropTypes.object,
};

AccessibilityWidget.defaultProps = {
    theme: "light",
    tools: [
        {
            id: "screen-reader",
            defaultValue: false,
        },
        {
            id: "cursor",
            defaultValue: "auto",
        },
        {
            id: "text-size",
            defaultValue: "normal",
        },
        {
            id: "text-font",
            defaultValue: "current",
        },
        {
            id: "text-line-height",
            defaultValue: "normal",
        },
        {
            id: "text-spacing",
            defaultValue: "normal",
        },
        {
            id: "text-alignment",
            defaultValue: "auto",
        },
        {
            id: "contrast",
            defaultValue: "normal",
        },
        {
            id: "color-saturation",
            defaultValue: "normal",
        },
        {
            id: "hide-images",
            defaultValue: false,
        },
        {
            id: "highlighted-links",
            defaultValue: false,
        },
        {
            id: "widget-size",
            defaultValue: "medium",
        },
        {
            id: "widget-position",
            defaultValue: "left",
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
};
