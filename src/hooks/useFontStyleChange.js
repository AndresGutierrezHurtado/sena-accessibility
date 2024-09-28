export const useFontStyleChange = (settings) => {

    const fontStyle = settings.find(
        (setting) => setting.id === "text-font"
    ).currentValue;

    switch (fontStyle) {
        case "font-sans":
            document.body.style.fontFamily = "sans-serif";
            break;
        case "font-serif":
            document.body.style.fontFamily = "serif";
            break;
        case "font-mono":
            document.body.style.fontFamily = "monospace";
            break;
        default:
            document.body.style.removeProperty("font-family");
            break;
    }
}