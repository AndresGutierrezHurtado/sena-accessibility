export const useWidgetSizeChange = (settings) => {
    const widgetSize = settings.find(
        (setting) => setting.id === "widget-size"
    ).currentValue;

    switch (widgetSize) {
        case "small":
            document.querySelector(".widget").style.maxWidth = "350px";
            break;
        case "large":
            document.querySelector(".widget").style.maxWidth = "450px";
            break;
        default:
            document.querySelector(".widget").style.maxWidth = "400px";
            break;
    }
}

export const useWidgetPositionChange = (settings) => {
    const widgetPosition = settings.find(
        (setting) => setting.id === "widget-position"
    ).currentValue;

    switch (widgetPosition) {
        case "left":
            document.querySelector(".widget").classList.remove("widget--right");
            document.querySelector(".widget").classList.add("widget--left");
            break;
        case "right":
            document.querySelector(".widget").classList.add("widget--right");
            document.querySelector(".widget").classList.remove("widget--left");
            break;
    }
}