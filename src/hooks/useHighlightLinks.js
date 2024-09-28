export const usehighlightLinks = (settings) => {

    const highlightLinks = settings.find(
        (setting) => setting.id === "highlighted-links"
    ).currentValue;

    if (highlightLinks) {
        document.querySelectorAll("a").forEach((link) => link.classList.add("highlighted-link"));
    } else {
        document.querySelectorAll("a").forEach((link) => link.classList.remove("highlighted-link"));
    }
}