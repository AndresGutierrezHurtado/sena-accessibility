export const useTextAlignChange = (settings) => {
    const textAlign = settings.find(
        (setting) => setting.id === "text-alignment"
    ).currentValue;

    const texts = document.querySelectorAll(
        "p, span, a, li, td, th, h1, h2, h3, h4, h5, h6, label, select, input, button, footer, header, code, pre, *"
    );

    texts.forEach((text) => {
        text.style.textAlign = textAlign;
    });
};
