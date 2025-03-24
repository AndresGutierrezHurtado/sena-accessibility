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

    const updateValue = (key) => {
        setProfile(null);

        const newTools = tools.map((tool) => {
            if (tool.id === key) {
                const currentValue = tool.currentValue;
                const index = tool.options.indexOf(currentValue);
                const nextIndex = index === tool.options.length - 1 ? 0 : index + 1;
                tool.currentValue = tool.options[nextIndex];
            }

            return tool;
        });

        setTools(newTools);
    };

    const updateProfileValue = (key) => {
        if (key == "default") {
            setProfile(null);
            const newTools = tools.map((tool) => ({ ...tool, currentValue: tool.defaultValue }));
            setTools(newTools);
            return;
        }

        const {key: profileKey, tools: profileTools} = profilesList.find((profile) => profile.key === key);
        const newTools = filteredTools.map((tool) => ({ ...tool, currentValue: profileTools[tool.id] || tool.defaultValue }));
        setTools(newTools);
        setProfile(key);
    };

    return (
        <AccessibilityContext.Provider
            value={{
                tools,
                lists: { languages: languagesList, profiles: profilesList },
                values: { language, profile },
                update: { setLanguage, updateProfileValue, updateValue },
                translate,
            }}
        >
            {children}
        </AccessibilityContext.Provider>
    );
};
