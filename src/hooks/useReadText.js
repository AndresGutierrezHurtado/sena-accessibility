import { useEffect } from "react";
import { useAccessibilityContext } from "../contexts/Accessibility.context";

export const useReadText = () => {
    const { settings } = useAccessibilityContext();

    useEffect(() => {
        if (typeof window.speechSynthesis === "undefined") return;

        const readTextSetting = settings.find(
            (setting) => setting.id === "screen-reader"
        )?.currentValue;

        // Voice configuration
        const speakText = (text) => {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.voice = window.speechSynthesis.getVoices()[0];
            utterance.lang = "es-CO";
            utterance.rate = 1;
            utterance.pitch = 1;
            window.speechSynthesis.speak(utterance);
        };

        // Add and remove mouse over listeners
        const handleMouseOver = (event) => {
            let text;
            if (event.target.tagName.toLowerCase() === "img") {
                text =
                    event.target.alt ||
                    event.target.getAttribute("aria-label") ||
                    "Imagen sin descripción";
            } else {
                text = event.target.textContent;
            }

            if (window.speechSynthesis.speaking) {
                window.speechSynthesis.cancel();
            }

            speakText(text);
        };

        const addMouseOverListeners = () => {
            const textElements = document.querySelectorAll(
                "p, span, a, li, td, th, h1, h2, h3, h4, h5, h6, label, select, input, button, footer, header"
            );
            textElements.forEach((element) => {
                element.addEventListener("mouseover", handleMouseOver);
            });
        };

        const removeMouseOverListeners = () => {
            const textElements = document.querySelectorAll(
                "p, span, a, li, td, th, h1, h2, h3, h4, h5, h6, label, select, input, button, footer, header"
            );
            textElements.forEach((element) => {
                element.removeEventListener("mouseover", handleMouseOver);
            });
        };

        if (readTextSetting) {
            addMouseOverListeners();
        } else {
            window.speechSynthesis.cancel();
            removeMouseOverListeners();
        }

        return () => {
            window.speechSynthesis.cancel();
            removeMouseOverListeners();
        };
    }, [settings]);
};
