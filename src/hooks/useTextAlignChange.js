export const useTextAlignChange = (settings) => {
    const textAlign = settings.find(
        (setting) => setting.id === "text-alignment"
    ).currentValue;

    const texts = document.querySelectorAll(
        "p, span, a, li, td, th, h1, h2, h3, h4, h5, h6, label, select, input, button, footer, header, code, pre"
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
