import React from "react";

import * as Icons from "../icons.jsx";

export default function Profile({ profile, currentProfile, update, t }) {
    const Icon = Icons[profile.icon];
    const isActive = currentProfile && currentProfile === profile.key;

    return (
        <div
            key={profile.key}
            onClick={() => update(profile.key)}
            className="flex items-center gap-2 bg-white rounded-lg p-3 font-medium w-full cursor-pointer"
            style={{
                backgroundColor: isActive ? "var(--color-widget-secondary)" : "var(--color-white)",
                color: isActive ? "var(--color-widget-secondary-content)" : "var(--color-widget-base-content)",
            }}
        >
            <div className="rounded-full p-2 flex items-center justify-center"
                style={{
                    backgroundColor: isActive ? "var(--color-sky-800)" : "var(--color-neutral-300)",
                }}
            >
                <Icon size={17} />
            </div>
            <div className="grow">{t(profile.label)}</div>
            {isActive && <Icons.CheckIcon size={16} />}
        </div>
    );
}
