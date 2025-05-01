import React, { useEffect } from "react";

export const useTabNavigator = (isOpen, setIsOpen, initialFocusRef) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "k") {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            }

            if (e.key === "Escape") {
                setIsOpen(false);
            }

            if (
                e.key === "ArrowDown" ||
                e.key === "ArrowUp" ||
                e.key === "ArrowLeft" ||
                e.key === "ArrowRight"
            ) {
                e.preventDefault();
                const $menu = document.querySelector("#accessibility-menu");
                const $focusableElements = $menu.querySelectorAll("[tabindex]:not([tabindex='-1'])");

                const currentIndex = Array.from($focusableElements).indexOf(document.activeElement);
                console.log(Array.from($focusableElements), currentIndex);

                let nextIndex =
                    e.key === "ArrowDown" || e.key === "ArrowRight"
                        ? currentIndex + 1
                        : currentIndex - 1;

                // Asegúrate de que no se desborde
                nextIndex = Math.max(0, Math.min(nextIndex, $focusableElements.length - 1));

                $focusableElements[nextIndex]?.focus();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    useEffect(() => {
        if (isOpen && initialFocusRef.current) {
            initialFocusRef.current.focus();
        }
    }, [isOpen]);
};
