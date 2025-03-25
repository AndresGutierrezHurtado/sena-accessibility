import { useEffect } from "react";

export default function useApplyStyles(language, tools) {
    useEffect(() => {
        useChangeFontSize(tools);
        useChangeFontFamily(tools);
        useChangeLineHeight(tools);
        useChangeLetterSpacing(tools);
        useChangeTextAlign(tools);
        useChangeContrast(tools);
        useHideImages(tools);
        useHightlightLinks(tools);
        useChangeWidgetSize(tools);
        useChangeWidgetPosition(tools);
        useChangeCursor(tools);
    }, [language, tools]);

    useScreenReader(tools, language);
}

const useChangeFontSize = (tools) => {
    const fontSize = tools.find((tool) => tool.id === "text-size").currentValue;
    let multiplier = 1;

    switch (fontSize) {
        case "small":
            multiplier = 0.8;
            break;
        case "large":
            multiplier = 1.25;
            break;
        case "extralarge":
            multiplier = 1.5;
            break;
        case "giant":
            multiplier = 1.75;
            break;
        default:
            multiplier = 1;
            break;
    }

    const tailwindFontSizes = [
        {
            var: "--text-xs",
            size: 0.75 * multiplier,
        },
        {
            var: "--text-sm",
            size: 0.875 * multiplier,
        },
        {
            var: "--text-base",
            size: 1 * multiplier,
        },
        {
            var: "--text-lg",
            size: 1.125 * multiplier,
        },
        {
            var: "--text-xl",
            size: 1.25 * multiplier,
        },
        {
            var: "--text-2xl",
            size: 1.5 * multiplier,
        },
        {
            var: "--text-3xl",
            size: 1.875 * multiplier,
        },
        {
            var: "--text-4xl",
            size: 2.25 * multiplier,
        },
        {
            var: "--text-5xl",
            size: 3 * multiplier,
        },
        {
            var: "--text-6xl",
            size: 3.75 * multiplier,
        },
        {
            var: "--text-7xl",
            size: 4.5 * multiplier,
        },
        {
            var: "--text-8xl",
            size: 6 * multiplier,
        },
        {
            var: "--text-9xl",
            size: 8 * multiplier,
        },
    ];

    tailwindFontSizes.forEach((size) => {
        document.documentElement.style.setProperty(size.var, `${size.size}rem`);
        document.documentElement.style.fontSize = multiplier + "rem";
    });
};

const useChangeFontFamily = (tools) => {
    const fontFamily = tools.find((tool) => tool.id === "text-font").currentValue;

    const texts = document.querySelectorAll(
        "p, span, a, li, td, th, h1, h2, h3, h4, h5, h6, label, select, input, button, footer, header, code, pre, div"
    );

    switch (fontFamily) {
        case "font-sans":
            texts.forEach((text) => {
                text.style.fontFamily = "sans-serif";
            });
            break;
        case "font-serif":
            texts.forEach((text) => {
                text.style.fontFamily = "serif";
            });
            break;
        case "font-mono":
            texts.forEach((text) => {
                text.style.fontFamily = "monospace";
            });
            break;
        default:
            texts.forEach((text) => {
                text.style.removeProperty("font-family");
            });
            break;
    }
};

const useChangeLineHeight = (tools) => {
    const leading = tools.find((tool) => tool.id === "text-line-height").currentValue;
    let multiplier = 1;

    switch (leading) {
        case "tight":
            multiplier = 0.875;
            break;
        case "loose":
            multiplier = 1.25;
            break;
        case "extraloose":
            multiplier = 1.5;
            break;
        default:
            multiplier = 1;
            break;
    }

    const tailwindLeadings = [
        {
            var: "--leading-tight",
            size: 1.25 * multiplier,
        },
        {
            var: "--leading-snug",
            size: 1.375 * multiplier,
        },
        {
            var: "--leading-normal",
            size: 1.5 * multiplier,
        },
        {
            var: "--leading-relaxed",
            size: 1.625 * multiplier,
        },
        {
            var: "--leading-loose",
            size: 2 * multiplier,
        },
    ];

    tailwindLeadings.forEach((leading) => {
        document.documentElement.style.setProperty(leading.var, `${leading.size}rem`);
        document.documentElement.style.lineHeight = multiplier + "rem";
    });
};

const useChangeLetterSpacing = (tools) => {
    const letterSpacing = tools.find((tool) => tool.id === "text-spacing").currentValue;
    let multiplier = 1;

    switch (letterSpacing) {
        case "tight":
            multiplier = -0.025;
            break;
        case "loose":
            multiplier = 0.1;
            break;
        case "extraloose":
            multiplier = 0.15;
            break;
        default:
            multiplier = 0;
            break;
    }

    const tailwindLetterSpacings = [
        {
            var: "--tracking-tighter",
            size: -0.05 + multiplier,
        },
        {
            var: "--tracking-tight",
            size: -0.025 + multiplier,
        },
        {
            var: "--tracking-normal",
            size: 0 + multiplier,
        },
        {
            var: "--tracking-wide",
            size: 0.025 + multiplier,
        },
        {
            var: "--tracking-wider",
            size: 0.05 + multiplier,
        },
        {
            var: "--tracking-widest",
            size: 0.1 + multiplier,
        },
    ];

    tailwindLetterSpacings.forEach((letterSpacing) => {
        document.documentElement.style.setProperty(letterSpacing.var, `${letterSpacing.size}em`);
        document.documentElement.style.letterSpacing = multiplier + "em";
    });
};

const useChangeTextAlign = (tools) => {
    const textAlign = tools.find((tool) => tool.id === "text-align").currentValue;

    const texts = document.querySelectorAll(
        "p, span, a, li, td, th, h1, h2, h3, h4, h5, h6, label, select, input, button, footer, header, code, pre, div"
    );

    switch (textAlign) {
        case "left":
            texts.forEach((text) => {
                text.style.textAlign = "left";
            });
            break;

        case "center":
            texts.forEach((text) => {
                text.style.textAlign = "center";
            });
            break;

        case "right":
            texts.forEach((text) => {
                text.style.textAlign = "right";
            });
            break;

        case "justify":
            texts.forEach((text) => {
                text.style.textAlign = "justify";
            });
            break;

        default:
            texts.forEach((text) => {
                text.style.removeProperty("text-align");
            });
            break;
    }
};

const useChangeContrast = (tools) => {
    // Contrast
    const contrast = tools.find((tool) => tool.id === "contrast").currentValue;

    let contrastValue = "100%";

    switch (contrast) {
        case "low":
            contrastValue = "75%";
            break;
        case "normal":
            contrastValue = "100%";
            break;
        case "high":
            contrastValue = "125%";
            break;
        case "ultra":
            contrastValue = "150%";
            break;
        case "inverted":
            contrastValue = "invert(100%)";
            break;
        default:
            contrastValue = "100%";
            break;
    }

    // Color saturation
    const saturation = tools.find((tool) => tool.id === "color-saturation").currentValue;

    let saturationValue = "100%";

    switch (saturation) {
        case "null":
            saturationValue = "0%";
            break;
        case "low":
            saturationValue = "50%";
            break;
        case "high":
            saturationValue = "125%";
            break;
        case "ultra":
            saturationValue = "150%";
            break;
        default:
            saturationValue = "100%";
            break;
    }

    document.documentElement.style.filter = `contrast(${contrastValue}) saturate(${saturationValue})`;
};

const useHideImages = (tools) => {
    const hideImages = tools.find((tool) => tool.id === "hide-images").currentValue;

    if (hideImages) {
        document.body.querySelectorAll("img").forEach((image) => (image.style.opacity = "0"));
    } else {
        document.body.querySelectorAll("img").forEach((image) => (image.style.opacity = "1"));
    }
};

const useHightlightLinks = (tools) => {
    const highlightLinks = tools.find((tool) => tool.id === "highlight-links").currentValue;

    if (highlightLinks) {
        document.body.querySelectorAll("a[href]").forEach((link) => {
            link.style.fontWeight = 700;
            link.style.backgroundColor = "var(--color-widget-secondary)";
            link.style.color = "var(--color-widget-secondary-content)";
        });
    } else {
        document.body.querySelectorAll("a[href]").forEach((link) => {
            link.style.removeProperty("font-weight");
            link.style.removeProperty("color");
            link.style.removeProperty("background-color");
        });
    }
};

const useChangeWidgetSize = (tools) => {
    const widgetSize = tools.find((tool) => tool.id === "widget-size").currentValue;
    let size = 1;

    switch (widgetSize) {
        case "small":
            size = 400;
            break;
        case "medium":
            size = 500;
            break;
        case "large":
            size = 600;
            break;
        default:
            size = 1;
            break;
    }

    document.documentElement.style.setProperty("--widget-size", size + "px");
};

const useChangeWidgetPosition = (tools) => {
    const widgetPosition = tools.find((tool) => tool.id === "widget-position").currentValue;
    let transform = "";
    let right = "";
    let left = "";

    switch (widgetPosition) {
        case "right":
            transform = "100%";
            right = "0";
            left = "auto";
            break;
        default:
            transform = "-100%";
            left = "0";
            right = "auto";
            break;
    }

    document.documentElement.style.setProperty("--widget-position", transform);
    document.documentElement.style.setProperty("--widget-right", right);
    document.documentElement.style.setProperty("--widget-left", left);
};

export const useChangeCursor = (settings) => {
    const cursor = settings.find((setting) => setting.id === "cursor").currentValue;

    switch (cursor) {
        case "white":
            document
                .querySelectorAll(".mask__overlay")
                .forEach((overlay) => overlay.classList.add("hidden"));
            document
                .querySelectorAll(".read-guide")
                .forEach((overlay) => overlay.classList.add("hidden"));
            document.body.style.cursor =
                "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiPg0KICAgIDxwYXRoIHN0eWxlPSJ0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTNweCwgLTRweCk7IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9IndoaXRlIiBkPSJNIDI5LjY5OTIxOSA0NyBDIDI5LjU3ODEyNSA0NyAyOS40NTcwMzEgNDYuOTc2NTYzIDI5LjMzOTg0NCA0Ni45MzM1OTQgQyAyOS4wODk4NDQgNDYuODM1OTM4IDI4Ljg5MDYyNSA0Ni42NDQ1MzEgMjguNzgxMjUgNDYuMzk4NDM4IEwgMjIuOTQ1MzEzIDMyLjkwNjI1IEwgMTUuNjgzNTk0IDM5LjczMDQ2OSBDIDE1LjM5NDUzMSA0MC4wMDM5MDYgMTQuOTY4NzUgNDAuMDc0MjE5IDE0LjYwMTU2MyAzOS45MTc5NjkgQyAxNC4yMzgyODEgMzkuNzYxNzE5IDE0IDM5LjM5ODQzOCAxNCAzOSBMIDE0IDYgQyAxNCA1LjYwMTU2MyAxNC4yMzQzNzUgNS4yNDIxODggMTQuNjAxNTYzIDUuMDgyMDMxIEMgMTQuOTY0ODQ0IDQuOTI1NzgxIDE1LjM5MDYyNSA0Ljk5NjA5NCAxNS42ODM1OTQgNS4yNjk1MzEgTCAzOS42ODM1OTQgMjcuNjY3OTY5IEMgMzkuOTcyNjU2IDI3LjkzNzUgNDAuMDc0MjE5IDI4LjM1NTQ2OSAzOS45NDUzMTMgMjguNzI2NTYzIEMgMzkuODE2NDA2IDI5LjEwMTU2MyAzOS40ODA0NjkgMjkuMzYzMjgxIDM5LjA4NTkzOCAyOS4zOTg0MzggTCAyOC45MDIzNDQgMzAuMjczNDM4IEwgMzUuMDA3ODEzIDQzLjU4NTkzOCBDIDM1LjExNzE4OCA0My44MjQyMTkgMzUuMTI4OTA2IDQ0LjEwMTU2MyAzNS4wMzUxNTYgNDQuMzUxNTYzIEMgMzQuOTQxNDA2IDQ0LjYwMTU2MyAzNC43NTc4MTMgNDQuODAwNzgxIDM0LjUxNTYyNSA0NC45MTAxNTYgTCAzMC4xMTMyODEgNDYuOTEwMTU2IEMgMjkuOTgwNDY5IDQ2Ljk2ODc1IDI5Ljg0Mzc1IDQ3IDI5LjY5OTIxOSA0NyBaIi8+DQo8L3N2Zz4='), auto";
            break;
        case "black":
            document
                .querySelectorAll(".mask__overlay")
                .forEach((overlay) => overlay.classList.add("hidden"));
            document
                .querySelectorAll(".read-guide")
                .forEach((overlay) => overlay.classList.add("hidden"));
            document.body.style.cursor =
                "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiPg0KICAgIDxwYXRoIHN0eWxlPSJ0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTNweCwgLTRweCk7IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9ImJsYWNrIiBkPSJNIDI5LjY5OTIxOSA0NyBDIDI5LjU3ODEyNSA0NyAyOS40NTcwMzEgNDYuOTc2NTYzIDI5LjMzOTg0NCA0Ni45MzM1OTQgQyAyOS4wODk4NDQgNDYuODM1OTM4IDI4Ljg5MDYyNSA0Ni42NDQ1MzEgMjguNzgxMjUgNDYuMzk4NDM4IEwgMjIuOTQ1MzEzIDMyLjkwNjI1IEwgMTUuNjgzNTk0IDM5LjczMDQ2OSBDIDE1LjM5NDUzMSA0MC4wMDM5MDYgMTQuOTY4NzUgNDAuMDc0MjE5IDE0LjYwMTU2MyAzOS45MTc5NjkgQyAxNC4yMzgyODEgMzkuNzYxNzE5IDE0IDM5LjM5ODQzOCAxNCAzOSBMIDE0IDYgQyAxNCA1LjYwMTU2MyAxNC4yMzQzNzUgNS4yNDIxODggMTQuNjAxNTYzIDUuMDgyMDMxIEMgMTQuOTY0ODQ0IDQuOTI1NzgxIDE1LjM5MDYyNSA0Ljk5NjA5NCAxNS42ODM1OTQgNS4yNjk1MzEgTCAzOS42ODM1OTQgMjcuNjY3OTY5IEMgMzkuOTcyNjU2IDI3LjkzNzUgNDAuMDc0MjE5IDI4LjM1NTQ2OSAzOS45NDUzMTMgMjguNzI2NTYzIEMgMzkuODE2NDA2IDI5LjEwMTU2MyAzOS40ODA0NjkgMjkuMzYzMjgxIDM5LjA4NTkzOCAyOS4zOTg0MzggTCAyOC45MDIzNDQgMzAuMjczNDM4IEwgMzUuMDA3ODEzIDQzLjU4NTkzOCBDIDM1LjExNzE4OCA0My44MjQyMTkgMzUuMTI4OTA2IDQ0LjEwMTU2MyAzNS4wMzUxNTYgNDQuMzUxNTYzIEMgMzQuOTQxNDA2IDQ0LjYwMTU2MyAzNC43NTc4MTMgNDQuODAwNzgxIDM0LjUxNTYyNSA0NC45MTAxNTYgTCAzMC4xMTMyODEgNDYuOTEwMTU2IEMgMjkuOTgwNDY5IDQ2Ljk2ODc1IDI5Ljg0Mzc1IDQ3IDI5LjY5OTIxOSA0NyBaIi8+DQo8L3N2Zz4='), auto";
            break;
        case "mask":
            document
                .querySelectorAll(".mask__overlay")
                .forEach((overlay) => overlay.classList.remove("hidden"));
            document
                .querySelectorAll(".read-guide")
                .forEach((overlay) => overlay.classList.add("hidden"));
            document.body.style.cursor = "auto";
            break;
        case "readGuide":
            document
                .querySelectorAll(".mask__overlay")
                .forEach((overlay) => overlay.classList.add("hidden"));
            document
                .querySelectorAll(".read-guide")
                .forEach((overlay) => overlay.classList.remove("hidden"));
            document.body.style.cursor = "none";
            break;
        default:
            document
                .querySelectorAll(".mask__overlay")
                .forEach((overlay) => overlay.classList.add("hidden"));
            document
                .querySelectorAll(".read-guide")
                .forEach((overlay) => overlay.classList.add("hidden"));
            document.body.style.cursor = "auto";
            break;
    }
};

export const useScreenReader = (tools, language) => {
    useEffect(() => {
        if (typeof window.speechSynthesis === "undefined") return;

        const screenReader = tools.find((s) => s.id === "screen-reader").currentValue;

        const getVoice = (lang) => {
            const voices = window.speechSynthesis.getVoices();
            return (
                voices.find((voice) => voice.lang.startsWith(lang)) ||
                voices.find((voice) => voice.default) ||
                voices[0]
            );
        };

        // Configuración de la voz
        const speakText = (text) => {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.voice = getVoice(language);
            utterance.lang = language;
            utterance.rate = 1;
            utterance.pitch = 1;
            window.speechSynthesis.speak(utterance);
        };

        // Evento para leer el texto al pasar el mouse
        const handleMouseOver = (event) => {
            let text;
            if (event.target.tagName.toLowerCase() === "img") {
                text =
                    event.target.alt ||
                    event.target.getAttribute("aria-label") ||
                    "Imagen sin descripción";
            } else {
                text = event.target.textContent;
            }

            if (window.speechSynthesis.speaking) {
                window.speechSynthesis.cancel();
            }

            speakText(text);
        };

        const addMouseOverListeners = () => {
            const textElements = document.querySelectorAll(
                "p, span, a, li, td, th, h1, h2, h3, h4, h5, h6, label, select, input, button, footer, header, div"
            );
            textElements.forEach((element) => {
                element.addEventListener("mouseover", handleMouseOver);
            });
        };

        const removeMouseOverListeners = () => {
            const textElements = document.querySelectorAll(
                "p, span, a, li, td, th, h1, h2, h3, h4, h5, h6, label, select, input, button, footer, header, div"
            );
            textElements.forEach((element) => {
                element.removeEventListener("mouseover", handleMouseOver);
            });
        };

        if (screenReader) {
            addMouseOverListeners();
        } else {
            window.speechSynthesis.cancel();
            removeMouseOverListeners();
        }

        return () => {
            window.speechSynthesis.cancel();
            removeMouseOverListeners();
        };
    }, [tools, language]);
};
