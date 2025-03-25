import React, { useState } from "react";

export const ReadGuideCursor = () => {
    const [cursorPosition, setCursorPosition] = useState({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
    });

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        if (navigator.maxTouchPoints > 0) return;
        setCursorPosition({ x: clientX, y: clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return (
        <div
            className="read-guide h-[20px] bg-widget-secondary border-t-2 border-b-2 border-widget-primary z-[999] hidden relative pointer-events-none"
            style={{ left: 0, right: 0, position: "fixed", top: cursorPosition.y - 21 }}
        >
            <div
                className="read-guide__cursor w-[20px] h-[20px] bg-widget-secondary border-widget-primary border-t-2 border-l-2 border-widget-primary rotate-45 absolute -translate-x-[28px] -translate-y-[11px] z-[10004]"
                style={{ left: cursorPosition.x }}
            ></div>
        </div>
    );
};
