export const useContrastChange = (settings) => {
    const contrast = settings.find(
        (setting) => setting.id === "contrast"
    ).currentValue;

    const colorSaturation = settings.find(
        (setting) => setting.id === "color-saturation"
    ).currentValue;

    let graphicFilter = "";

    switch (contrast) {
        case "low":
            graphicFilter = "contrast(0.5)";
            break;
        case "high":
            graphicFilter = "contrast(1.5)";
            break;
        case "ultra":
            graphicFilter = "contrast(2)";
            break;
        case "inverted":
            graphicFilter = "invert(1)";
            break;
        default:
            graphicFilter = "contrast(1)";
            break;
    }

    switch (colorSaturation) {
        case "low":
            graphicFilter += " saturate(0.5)";
            break;
        case "high":
            graphicFilter += " saturate(1.5)";
            break;
        case "ultra":
            graphicFilter += " saturate(2)";
            break;
        default:
            graphicFilter += " saturate(1)";
            break;
    }

    document.body.style.filter = graphicFilter;
};
