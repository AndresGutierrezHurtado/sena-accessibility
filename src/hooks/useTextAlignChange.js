export const useTextAlignChange = (settings) => {
    const textAlign = settings.find(
        (setting) => setting.id === "text-alignment"
    ).currentValue;

    switch (textAlign) {
        case "left":
            document.body.style.textAlign = "left";
            break;
        case "center":
            document.body.style.textAlign = "center";
            break;
        case "right":
            document.body.style.textAlign = "right";
            break;
        case "justify":
            document.body.style.textAlign = "justify";
            break;
        default:
            document.body.style.textAlign = "left";
            break;
    }
}