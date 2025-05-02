import React, { useEffect, useState } from "react";

export const ReadGuideCursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isClient, setIsClient] = useState(false);

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;

        const toMatch = [
            /Android/i,
            /webOS/i,
            /iPhone/i,
            /iPad/i,
            /iPod/i,
            /BlackBerry/i,
            /Windows Phone/i,
        ];

        const isMobile = toMatch.some((toMatchItem) => navigator.userAgent.match(toMatchItem));
        if (isMobile) return;

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
            className="read-guide sena:h-[20px] sena:bg-widget-primary sena:border-t-2 sena:border-b-2 sena:border-black/10 sena:relative sena:pointer-events-none sena:z-[9999]"
            style={{ left: 0, right: 0, position: "fixed", top: cursorPosition.y + 5 }}
        >
            <div
                className="read-guide__cursor sena:w-[20px] sena:h-[20px] sena:bg-widget-primary sena:border-t-2 sena:border-l-2 sena:border-black/10 sena:rotate-45 sena:absolute sena:-translate-x-[10px] sena:-translate-y-[11px] sena:z-[10004]"
                style={{ left: cursorPosition.x }}
            ></div>
        </div>
    );
};
