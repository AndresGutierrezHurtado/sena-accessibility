export const useCursorChange = (settings) => {
    const cursor = settings.find((setting) => setting.id === "cursor").currentValue;

    switch (cursor) {
        case "white":
            document.querySelectorAll(".mask__overlay").forEach((overlay) => overlay.classList.add("hidden"));
            document.body.style.cursor = "url(/src/assets/cursors/white-cursor.svg), auto";
            break;
        case "black":
            document.querySelectorAll(".mask__overlay").forEach((overlay) => overlay.classList.add("hidden"));
            document.body.style.cursor = "url(/src/assets/cursors/black-cursor.svg), auto";
            break;
        case "mask":
            document.querySelectorAll(".mask__overlay").forEach((overlay) => overlay.classList.remove("hidden"));
            document.body.style.cursor = "auto";
            break;
        case "readGuide":
            document.querySelectorAll(".mask__overlay").forEach((overlay) => overlay.classList.add("hidden"));
            break;
        default:
            document.querySelectorAll(".mask__overlay").forEach((overlay) => overlay.classList.add("hidden"));
            document.body.style.cursor = "auto";
            break;
    }
}