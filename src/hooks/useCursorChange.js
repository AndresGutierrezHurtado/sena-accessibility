export const useCursorChange = (settings) => {
    const cursor = settings.find((setting) => setting.id === "cursor").currentValue;

    switch (cursor) {
        case "white":
            document.body.style.cursor = "url(/src/assets/cursors/white-cursor.svg), auto";
            break;
        case "black":
            document.body.style.cursor = "url(/src/assets/cursors/black-cursor.svg), auto";
            break;
        // case "large":
        //     document.body.style.cursor = "url(/cursors/large.png), auto";
        //     break;
        // case "mask":
        //     document.body.style.cursor = "url(/cursors/mask.png), auto";
        //     break;
        // case "readGuide":
        //     document.body.style.cursor = "url(/cursors/readGuide.png), auto";
        //     break;
        default:
            document.body.style.cursor = "auto";
            break;
    }
}