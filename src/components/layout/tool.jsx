import React from "react";

import * as Icons from "../icons.jsx";

export default function Tool({ tool, update, t }) {
    const Icon = Icons[tool.icon] || ScreenReaderIcon;
    const isActive = tool.currentValue !== tool.defaultValue;

    return (
        <div
            key={tool.id}
            onClick={() => update(tool.id)}
            className="bg-white p-5 rounded-lg flex flex-col items-center justify-center gap-2 font-medium leading-tight text-center cursor-pointer relative"
            style={{
                border: isActive ? "2px solid var(--color-widget-primary)" : "",
                color: isActive
                    ? "var(--color-widget-primary)"
                    : "var(--color-widget-base-content)",
            }}
        >
            <Icon size={40} />
            <p>{t(tool.text)}</p>
            {isActive && typeof tool.options[0] === "string" && (
                <span className="absolute left-0 bottom-0 right-0 px-2 py-2">
                    <div className="w-full flex items-center gap-1">
                        {tool.options.map((option, index) => (
                            <div
                                key={option}
                                className={`w-full h-[3px] rounded-full duration-200 ${
                                    option === tool.currentValue
                                        ? "bg-widget-primary"
                                        : "bg-widget-primary/30"
                                }`}
                            ></div>
                        ))}
                    </div>
                </span>
            )}
            {isActive && (
                <span className="absolute top-0 right-0 px-2 py-2">
                    <div className="w-full rounded-full bg-gray-300 p-1">
                        <Icons.CheckIcon size={13} />
                    </div>
                </span>
            )}
        </div>
    );
}
