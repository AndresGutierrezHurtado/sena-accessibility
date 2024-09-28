import React, { useState } from "react";

export const ReadGuideCursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: window.innerHeight / 2 });

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        setCursorPosition({ x: clientX, y: clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return (
        <div className="read-guide hidden" style={{ top: cursorPosition.y - 21}}>
            <div className="read-guide__cursor" style={{ left: cursorPosition.x }}></div>
        </div>
    );
}