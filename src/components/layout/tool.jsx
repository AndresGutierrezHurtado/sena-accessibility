import React, { useEffect } from "react";

import * as Icons from "../icons.jsx";

export default function Tool({ tool, update, t }) {
    const Icon = Icons[tool.icon] || ScreenReaderIcon;
    const isActive = tool.currentValue !== tool.defaultValue;
    const [shouldShow, setShouldShow] = React.useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (["cursor", "screen-reader"].includes(tool.id)) {
                const toMatch = [
                    /Android/i,
                    /webOS/i,
                    /iPhone/i,
                    /iPad/i,
                    /iPod/i,
                    /BlackBerry/i,
                    /Windows Phone/i,
                ];

                const isMobile = toMatch.some((toMatchItem) =>
                    navigator.userAgent.match(toMatchItem)
                );
                if (isMobile) return;

                setShouldShow(!isMobile);
            } else {
                setShouldShow(true);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            key={tool.id}
            onClick={() => update(tool.id)}
            className="sena:bg-widget-base-100 sena:p-5 sena:rounded-lg sena:flex-col sena:items-center sena:justify-center sena:gap-2 sena:font-medium sena:leading-tight sena:text-center sena:cursor-pointer sena:relative sena:focus:outline-2 sena:outline-offset-2 sena:focus:outline-widget-primary"
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    update(tool.id);
                }
            }}
            role="button"
            tabIndex={0}
            style={{
                display: shouldShow ? "flex" : "none",
                border: isActive ? "2px solid var(--sena-color-widget-primary)" : "",
                color: isActive
                    ? "var(--sena-color-widget-primary)"
                    : "var(--sena-color-widget-base-content)",
            }}
        >
            <Icon size={40} />
            <p>{t(tool.text)}</p>
            {isActive && typeof tool.options[0] === "string" && (
                <span className="sena:absolute sena:left-0 sena:bottom-0 sena:right-0 sena:px-2 sena:py-2">
                    <div className="sena:w-full sena:flex sena:items-center sena:gap-1">
                        {tool.options.map((option, index) => (
                            <div
                                key={option}
                                className={`sena:w-full sena:h-[3px] sena:rounded-full sena:duration-200 ${
                                    option === tool.currentValue
                                        ? "sena:bg-widget-primary"
                                        : "sena:bg-widget-primary/30"
                                }`}
                            ></div>
                        ))}
                    </div>
                </span>
            )}
            {isActive && (
                <span className="sena:absolute sena:top-0 sena:right-0 sena:px-2 sena:py-2">
                    <div className="sena:w-full sena:rounded-full sena:bg-widget-primary/20 sena:p-1">
                        <Icons.CheckIcon size={13} />
                    </div>
                </span>
            )}
        </div>
    );
}
