export const useLineHeightChange = (settings) => {
    const lineHeight = settings.find(
        (setting) => setting.id === "text-line-height"
    ).currentValue;

    switch (lineHeight) {
        case "loose":
            document.body.style.lineHeight = "1.5";
            break;
        case "extraloose":
            document.body.style.lineHeight = "2";
            break;
        default:
            document.body.style.lineHeight = "normal";
            break;
    }
};
