import React, { useState } from "react";

export const ReadGuideCursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: (window.innerWidth / 2), y: (window.innerHeight / 2) });

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        if (navigator.maxTouchPoints > 0) return;
        setCursorPosition({ x: clientX, y: clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return (
        <div className="read-guide hidden" style={{ top: cursorPosition.y - 21}}>
            <div className="read-guide__cursor" style={{ left: cursorPosition.x }}></div>
        </div>
    );
}