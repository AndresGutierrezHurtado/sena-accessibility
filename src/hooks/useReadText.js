export const useReadText = (settings) => {
    const readText = settings.find(
        (setting) => setting.id === "screen-reader"
    ).currentValue;

    const speak = () => {
        if (typeof speechSynthesis === "undefined") return;
        if (!readText) return;

        let voices = [];

        const populateVoiceList = () => {
            voices = speechSynthesis.getVoices();
        };

        populateVoiceList();
        if (speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = populateVoiceList;
        }

        const speakText = (text) => {
            const utterThis = new SpeechSynthesisUtterance(text);
            utterThis.voice =
                voices.find((voice) => voice.default) || voices[0];
            speechSynthesis.speak(utterThis);
        };

        const textElements = document.querySelectorAll(
            "p, span, a, li, td, th, h1, h2, h3, h4, h5, h6, label, select, input, button, footer, header, .widget__item-text"
        );

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

            if (speechSynthesis.speaking) {
                speechSynthesis.cancel();
            }
            speakText(text);
        };

        // Agregamos los eventos a los elementos de texto
        textElements.forEach((element) => {
            element.addEventListener("mouseover", handleMouseOver);
        });

        return () => {
            textElements.forEach((element) => {
                element.removeEventListener("mouseover", handleMouseOver);
            });
            speechSynthesis.cancel();
        };
    };

    const cleanup = speak();
    return cleanup;
};
