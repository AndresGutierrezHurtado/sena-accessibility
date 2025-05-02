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
            className={`sena:flex sena:items-center sena:gap-2  sena:rounded-lg sena:p-3 sena:font-medium sena:w-full sena:cursor-pointer sena:focus:outline-2 sena:outline-offset-2 sena:focus:outline-widget-primary ${
                isActive
                    ? "sena:bg-widget-primary sena:text-widget-primary-content"
                    : "sena:bg-widget-base-100 sena:text-widget-base-content"
            }`}
        >
            <div
                className={`sena:rounded-full sena:p-2 flex sena:items-center sena:justify-center ${
                    isActive
                        ? "sena:bg-widget-primary-content/10 sena:text-widget-primary-content"
                        : "sena:bg-widget-base-content/10 sena:text-widget-base-content"
                }`}
            >
                <Icon size={17} />
            </div>
            <div className="sena:grow">{t(profile.label)}</div>
            {isActive && <Icons.CheckIcon size={16} />}
        </div>
    );
}
