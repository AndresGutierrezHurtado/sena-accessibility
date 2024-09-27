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

    const titles = document.querySelectorAll(".text--title, h1, h2");
    const subTitles = document.querySelectorAll(
        ".text--subtitle, h3, h4, h5, h6"
    );
    const extraLarges = document.querySelectorAll(".text--extralarge");
    const larges = document.querySelectorAll(".text--large");
    const normals = document.querySelectorAll(
        ".text--normal, p, span, a, li, td, th, label, select, input, button, footer, header, .widget__item-text"
    );
    const smalls = document.querySelectorAll(".text--small");

    titles.forEach((title) => {
        title.style.fontSize = `${textScale * 1.4}rem`;
    });

    subTitles.forEach((subTitle) => {
        subTitle.style.fontSize = `${textScale * 1.3}rem`;
    });

    extraLarges.forEach((extraLarge) => {
        extraLarge.style.fontSize = `${textScale * 1.2}rem`;
    });

    larges.forEach((large) => {
        large.style.fontSize = `${textScale * 1.1}rem`;
    });

    normals.forEach((normal) => {
        normal.style.fontSize = `${textScale * 1}rem`;
    });

    smalls.forEach((small) => {
        small.style.fontSize = `${textScale * 0.8}rem`;
    });
};
