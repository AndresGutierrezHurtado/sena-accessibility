export const useFontSizeChange = (settings) => {
    const fontSize = settings.find(
        (setting) => setting.id === "text-size"
    ).currentValue;

    let textScale = 1;

    switch (fontSize) {
        case "small":
            textScale = 0.8;
            break;
        case "large":
            textScale = 1.2;
            break;
        case "extralarge":
            textScale = 1.4;
            break;
        case "giant":
            textScale = 1.6;
            break;
        default:
            break;
    }

    document.querySelectorAll(".text-xs").forEach((text) => {
        text.style.fontSize = `${textScale * 0.75}rem`;
    });

    document.querySelectorAll(".text-sm").forEach((text) => {
        text.style.fontSize = `${textScale * 0.875}rem`;
    });

    document.querySelectorAll(".text-base, p, span, a, li, td, th, label, select, input, button, footer, header").forEach((text) => {
        text.style.fontSize = `${textScale * 1}rem`;
    });

    document.querySelectorAll(".text-lg, h3, h4, h5, h6").forEach((text) => {
        text.style.fontSize = `${textScale * 1.125}rem`;
    });

    document.querySelectorAll(".text-xl, h1, h2").forEach((text) => {
        text.style.fontSize = `${textScale * 1.25}rem`;
    });

    document.querySelectorAll(".text-2xl").forEach((text) => {
        text.style.fontSize = `${textScale * 1.5}rem`;
    });

    document.querySelectorAll(".text-3xl").forEach((text) => {
        text.style.fontSize = `${textScale * 1.875}rem`;
    });

    document.querySelectorAll(".text-4xl").forEach((text) => {
        text.style.fontSize = `${textScale * 2.25}rem`;
    });

    document.querySelectorAll(".text-5xl").forEach((text) => {
        text.style.fontSize = `${textScale * 3}rem`;
    });

    document.querySelectorAll(".text-6xl").forEach((text) => {
        text.style.fontSize = `${textScale * 3.75}rem`;
    });

    document.querySelectorAll(".text-7xl").forEach((text) => {
        text.style.fontSize = `${textScale * 4.5}rem`;
    });

    document.querySelectorAll(".text-8xl").forEach((text) => {
        text.style.fontSize = `${textScale * 6}rem`;
    });

    document.querySelectorAll(".text-9xl").forEach((text) => {
        text.style.fontSize = `${textScale * 8}rem`;
    });
};
