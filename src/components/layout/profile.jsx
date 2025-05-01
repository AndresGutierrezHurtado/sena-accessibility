import React from "react";

import * as Icons from "../icons.jsx";

export default function Profile({ profile, currentProfile, update, t }) {
    const Icon = Icons[profile.icon];
    const isActive = currentProfile && currentProfile === profile.key;

    return (
        <div
            key={profile.key}
            onClick={() => update(profile.key)}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    update(profile.key);
                }
            }}
            role="button"
            tabIndex={0}
            className={`flex items-center gap-2  rounded-lg p-3 font-medium w-full cursor-pointer focus:outline-2 outline-offset-2 focus:outline-widget-primary ${
                isActive
                    ? "bg-widget-primary text-widget-primary-content"
                    : "bg-widget-base-100 text-widget-base-content"
            }`}
        >
            <div
                className={`rounded-full p-2 flex items-center justify-center ${
                    isActive
                        ? "bg-widget-primary-content/10 text-widget-primary-content"
                        : "bg-widget-base-content/10 text-widget-base-content"
                }`}
            >
                <Icon size={17} />
            </div>
            <div className="grow">{t(profile.label)}</div>
            {isActive && <Icons.CheckIcon size={16} />}
        </div>
    );
}
