import React, { createContext, useContext } from "react";

// Utils
import { tools, languages, profiles } from "../utils/config";

const AccessibilityContext = createContext();

export const useAccessibilityContext = () => useContext(AccessibilityContext);

export const AccessibilityProvider = ({ children, language, tools, theme }) => {
    return (
        <AccessibilityContext.Provider value={{ language, tools, theme }}>
            {children}
        </AccessibilityContext.Provider>
    );
};
