import React from "react";
import * as Icons from "../assets/icons.jsx";

export default function AccessibilityItem({ item, useAccessibilityContext }) {
    const { icon , text, options, currentValue, defaultValue, id } = item;
    const IconComponent = Icons[icon];

    const { settings, updateSettings } = useAccessibilityContext();

    const handleClick = (widgetItem) => {
        const nextIndex = (options.indexOf(currentValue) + 1) % options.length;

        const newSettings = settings.map((setting) => {
            if (setting.id === id) {
                return {
                    ...setting,
                    currentValue: options[nextIndex],
                };
            }
            return setting;
        });

        updateSettings(newSettings);
    };

    return (
        <div
            className={`widget__item ${
                currentValue !== defaultValue && "widget__item--active"
            }`}
            onClick={() => handleClick(item)}
        >
            {currentValue !== defaultValue && <div className="badge"><Icons.checkIcon color="#fff" size={10} /></div>}
            <div className="widget__item-content">
                <div className="widget__item-icon">{IconComponent ? <IconComponent /> : <Icons.XIcon />}</div>
                <p className="widget__item-text">{text}</p>
            </div>
            <div className="widget__item-footer">
                {currentValue !== defaultValue &&
                    currentValue !== true &&
                    options.map((option, index) => (
                        <span
                            key={index}
                            className={`widget__item-indicator ${
                                option === currentValue ? "active" : ""
                            }`}
                        ></span>
                    ))}
            </div>
        </div>
    );
}
