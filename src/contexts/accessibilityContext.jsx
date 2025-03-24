import React, { createContext, useContext, useState } from "react";

// Utils
import { toolsList, languagesList, profilesList } from "../utils/config";

const AccessibilityContext = createContext();

export const useAccessibilityContext = () => useContext(AccessibilityContext);

export const AccessibilityProvider = ({ children, userTools }) => {
    const filteredTools = userTools.length > 0 ? toolsList.filter((tool) => tool.id === tool) : toolsList;

    const [tools, setTools] = useState(filteredTools);
    const [language, setLanguage] = useState(languagesList[0]);

    return (
        <AccessibilityContext.Provider value={{ tools, lenguages: languagesList, profiles: profilesList }}>
            {children}
        </AccessibilityContext.Provider>
    );
};
