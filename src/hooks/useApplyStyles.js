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
    }, [language, tools]);
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

    switch (fontFamily) {
        case "font-sans":
            document.body.classList.remove("font-sans", "font-mono");
            document.body.classList.add("font-sans");
            break;
        case "font-serif":
            document.body.classList.remove("font-sans", "font-mono");
            document.body.classList.add("font-serif");
            break;
        case "font-mono":
            document.body.classList.remove("font-sans", "font-serif");
            document.body.classList.add("font-mono");
            break;
        default:
            document.body.classList.remove("font-sans", "font-serif", "font-mono");
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
            multiplier = 0.05;
            break;
        case "extraloose":
            multiplier = 0.1;
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

    switch (textAlign) {
        case "left":
            document.body.classList.remove("text-center", "text-right", "text-justify");
            document.body.classList.add("text-left");
            break;
        case "center":
            document.body.classList.remove("text-left", "text-right", "text-justify");
            document.body.classList.add("text-center");
            break;
        case "right":
            document.body.classList.remove("text-left", "text-center", "text-justify");
            document.body.classList.add("text-right");
            break;
        case "justify":
            document.body.classList.remove("text-left", "text-center", "text-right");
            document.body.classList.add("text-justify");
            break;
        default:
            document.body.classList.remove(
                "text-left",
                "text-center",
                "text-right",
                "text-justify"
            );
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
        document.body.querySelectorAll("a").forEach((link) => {
            link.style.boxShadow = "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)";
        });
    } else {
        document.body.querySelectorAll("a").forEach((link) => {
            link.style.boxShadow = "none";
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
// Namespace	Utility classes
// --color-*	Color utilities like bg-red-500, text-sky-300, and many more
// --font-weight-*	Font weight utilities like font-bold
// --breakpoint-*	Responsive breakpoint variants like sm:*
// --spacing-*	Spacing and sizing utilities like px-4, max-h-16, and many more
// --radius-*	Border radius utilities like rounded-sm
// --shadow-*	Box shadow utilities like shadow-md
// --inset-shadow-*	Inset box shadow utilities like inset-shadow-xs
// --drop-shadow-*	Drop shadow filter utilities like drop-shadow-md
// --blur-*	Blur filter utilities like blur-md
// --perspective-*	Perspective utilities like perspective-near
// --aspect-*	Aspect ratio utilities like aspect-video
// --ease-*	Transition timing function utilities like ease-out
// --animate-*	Animation utilities like animate-spin
