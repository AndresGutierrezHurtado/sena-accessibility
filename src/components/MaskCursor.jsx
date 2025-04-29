import React, { useEffect, useState } from "react";

export const MaskCursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isClient, setIsClient] = useState(false);

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        setCursorPosition({ x: clientX, y: clientY });
    };

    useEffect(() => {
        setIsClient(true);
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
        <>
            <div
                className="mask__overlay hidden fixed left-0 right-0 h-auto bg-black/60 z-[9999]"
                onMouseMove={handleMouseMove}
                style={{
                    borderBottom: "3px solid black",
                    top: 0,
                    bottom:
                        window.innerHeight - cursorPosition.y + 100 < 0
                            ? 5
                            : window.innerHeight - cursorPosition.y + 100,
                }}
            ></div>
            <div
                className="mask__overlay hidden fixed left-0 right-0 h-auto bg-black/60 z-[9999]"
                onMouseMove={handleMouseMove}
                style={{
                    borderTop: "3px solid black",
                    bottom: 0,
                    top:
                        cursorPosition.y + 100 > window.innerHeight
                            ? window.innerHeight - 5
                            : cursorPosition.y + 100,
                }}
            ></div>
        </>
    );
};
