import React, { useEffect, useState } from "react";

export const ReadGuideCursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isClient, setIsClient] = useState(false);

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        if (navigator.maxTouchPoints > 0) return;
        setCursorPosition({ x: clientX, y: clientY });
    };

    useEffect(() => {
        setIsClient(true);

        setCursorPosition({
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
        });
    }, []);

    useEffect(() => {
        if (isClient) {
            document.addEventListener("mousemove", handleMouseMove);

            return () => {
                document.removeEventListener("mousemove", handleMouseMove);
            };
        }
    }, [isClient]);

    if (!isClient) return null;

    return (
        <div
            className="read-guide h-[20px] bg-widget-primary border-t-2 border-b-2 border-black/10 hidden relative pointer-events-none  z-[9999]"
            style={{ left: 0, right: 0, position: "fixed", top: cursorPosition.y - 21 }}
        >
            <div
                className="read-guide__cursor w-[20px] h-[20px] bg-widget-primary border-t-2 border-l-2 border-black/10 rotate-45 absolute -translate-x-[10px] -translate-y-[11px] z-[10004]"
                style={{ left: cursorPosition.x }}
            ></div>
        </div>
    );
};
