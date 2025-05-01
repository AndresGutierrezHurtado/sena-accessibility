import React, { createContext, useContext, useEffect, useState } from "react";

// Utils
import { toolsList, languagesList, profilesList } from "../utils/config.js";
import useApplyStyles from "../hooks/useApplyStyles.js";

const AccessibilityContext = createContext();

export const useAccessibilityContext = () => useContext(AccessibilityContext);

export const AccessibilityProvider = ({ children, userTools }) => {
    // State variables
    let filteredTools = toolsList.filter((tool) => userTools.includes(tool.id));
    if (userTools.length === 0) filteredTools = toolsList;

    const [tools, setTools] = useState(filteredTools);
    const [language, setLanguage] = useState(languagesList[0].key);
    const [profile, setProfile] = useState(null);
    const [isInitialized, setIsInitialized] = useState(false);

    // Validate saved tools in localStorage
    useEffect(() => {
        const savedTools = JSON.parse(localStorage.getItem("accessibility_tools"));
        const savedLanguage = localStorage.getItem("accessibility_language");
        const savedProfile = localStorage.getItem("accessibility_profile");

        if (savedTools) {
            setTools(savedTools);
        }
        if (savedLanguage) setLanguage(savedLanguage);
        if (savedProfile) setProfile(savedProfile);

        setIsInitialized(true);
    }, []);

    // saves the tools in localStorage
    useEffect(() => {
        if (!isInitialized) return;
        localStorage.setItem("accessibility_tools", JSON.stringify(tools));
        localStorage.setItem("accessibility_language", language);
        localStorage.setItem("accessibility_profile", profile);
    }, [tools, language, profile]);

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

        const { tools: profileTools } = profilesList.find((profile) => profile.key === key);

        const newTools = [...tools].map((tool) => {
            return {
                ...tool,
                currentValue: ["widget-size", "widget-position"].includes(tool.id)
                    ? tool.currentValue
                    : profileTools[tool.id] || tool.defaultValue,
            };
        });

        setTools(newTools);
        setProfile(key);
    };

    useApplyStyles(language, tools);

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
