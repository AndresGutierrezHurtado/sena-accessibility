export const useHideImages = (settings) => {
    const hideImages = settings.find(
        (setting) => setting.id === "hide-images"
    ).currentValue;

    if (hideImages) {
        document.querySelectorAll("img").forEach((image) => {
            image.style.opacity = 0;
        })
    } else {
        document.querySelectorAll("img").forEach((image) => {
            image.style.opacity = 100;
        })
    }
}