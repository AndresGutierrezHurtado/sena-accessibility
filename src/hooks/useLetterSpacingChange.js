export const useLetterSpacingChange = (settings) => {
    const lineHeight = settings.find(
        (setting) => setting.id === "text-spacing"
    ).currentValue;
    
    switch (lineHeight) {
        case "loose":
            document.body.style.letterSpacing = "1px";
            break;
        case "extraloose":
            document.body.style.letterSpacing = "2px";
            break;
        default:
            document.body.style.letterSpacing = "normal";
            break;
    }
};
