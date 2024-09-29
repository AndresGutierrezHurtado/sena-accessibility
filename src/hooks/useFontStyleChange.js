export const useFontStyleChange = (settings) => {
    const fontStyle = settings.find(
        (setting) => setting.id === "text-font"
    ).currentValue;

    const texts = document.querySelectorAll(
        "p, span, a, li, td, th, h1, h2, h3, h4, h5, h6, label, select, input, button, footer, header, code, pre"
    );

    switch (fontStyle) {
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
