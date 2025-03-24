import React, { createContext, useContext, useState } from "react";

// Utils
import { toolsList, languagesList, profilesList } from "../utils/config";

const AccessibilityContext = createContext();

export const useAccessibilityContext = () => useContext(AccessibilityContext);

export const AccessibilityProvider = ({ children, userTools }) => {
    const filteredTools =
        userTools.length > 0 ? toolsList.filter((tool) => tool.id === tool) : toolsList;

    const [tools, setTools] = useState(filteredTools);
    const [language, setLanguage] = useState(languagesList[0].key);
    const [profile, setProfile] = useState(null);

    const translate = (key) => {
        const path = key.split(".");
        const dictionary = languagesList.find((lang) => lang.key === language).dictionary;
        if (path.length === 1) return dictionary[key];
        if (path.length === 2) return dictionary[path[0]][path[1]];
        if (path.length === 3) return dictionary[path[0]][path[1]][path[2]];
    };

    return (
        <AccessibilityContext.Provider
            value={{
                tools,
                lists: { languages: languagesList, profiles: profilesList },
                values: { language, profile },
                update: { setLanguage, setProfile, setTools },
                translate,
            }}
        >
            {children}
        </AccessibilityContext.Provider>
    );
};
