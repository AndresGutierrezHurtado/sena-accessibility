export const useContrastChange = (settings) => {
    const contrast = settings.find(
        (setting) => setting.id === "contrast"
    ).currentValue;

    switch (contrast) {
        case "low":
            document.body.style.filter = "contrast(0.5)";
            break;
        case "high":
            document.body.style.filter = "contrast(1.5)";
            break;
        case "ultra":
            document.body.style.filter = "contrast(2)";
            break;
        case "inverted":
            document.body.style.filter = "invert(1)";
            break;
        default:
            document.body.style.filter = "none";
            break;
    }
}            