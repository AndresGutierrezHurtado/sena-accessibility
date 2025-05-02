import React, { useRef } from "react";

// Context
import { useAccessibilityContext } from "../../contexts/accessibilityContext.jsx";

// Icons
import { CloseIcon, ReloadIcon } from "../icons.jsx";
import * as Icons from "../icons.jsx";

// Components
import Tool from "./tool.jsx";
import Profile from "./profile.jsx";

// Hooks
import { useTabNavigator } from "../../hooks/useTabNavigator.js";

export default function Menu({ isOpen, setIsOpen }) {
    const { tools, lists, values, update, translate: t } = useAccessibilityContext();
    const initialFocusRef = useRef(null);

    useTabNavigator(isOpen, setIsOpen, initialFocusRef);

    return (
        <>
            <div
                className="sena:fixed sena:top-0 sena:bottom-0 sena:w-full sena:max-w-[var(--widget-size,500px)] sena:bg-widget-primary sena:duration-300 sena:flex sena:flex-col sena:z-[9999]"
                style={{
                    transform: `translateX(${isOpen ? "0" : "var(--widget-position)"})`,
                    opacity: isOpen ? 1 : 0,
                    left: "var(--widget-left)",
                    right: "var(--widget-right)",
                    transition: isOpen
                        ? "transform 400ms ease-in-out, opacity 0ms ease-in-out"
                        : "transform 400ms ease-in-out, opacity 0ms ease-in-out 400ms",
                }}
                id="accessibility-menu"
            >
                <header className="sena:w-full sena:flex sena:justify-between sena:items-center sena:p-5 sena:text-widget-primary-content">
                    <h2
                        className="sena:text-2xl sena:font-bold sena:tracking-[0.3px] sena:focus:outline-none"
                        ref={initialFocusRef}
                        tabIndex={-1}
                    >
                        {t("title")}
                    </h2>
                    <button
                        className="sena:border-[1.5px] sena:border-widget-primary-content sena:rounded-full sena:p-1 sena:active:scale-95 sena:ease-out sena:duration-300 sena:cursor-pointer sena:focus:outline-2 sena:outline-offset-2 sena:focus:outline-widget-primary-content"
                        aria-label={t("close")}
                        onClick={() => setIsOpen(false)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                setIsOpen(false);
                            }
                        }}
                        role="button"
                        tabIndex={0}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="sena:w-6 sena:h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </header>
                <main className="sena:bg-widget-base-200 sena:text-widget-base-content sena:grow sena:w-full sena:rounded-t-xl sena:p-5">
                    <div className="sena:w-full sena:h-full sena:flex sena:flex-col sena:gap-5">
                        <section className="sena:w-full sena:flex sena:items-center sena:font-medium sena:gap-2">
                            {(() => {
                                const Icon =
                                    Icons[
                                        lists.languages.find((lang) => lang.key === values.language)
                                            ?.icon
                                    ] || Icons.SpanishIcon;
                                return <Icon width={25} height={25} />;
                            })()}

                            <select
                                className="sena:w-full sena:focus:outline-2 sena:focus:outline-widget-primary sena:p-1 sena:rounded-lg"
                                value={values.language}
                                tabIndex={0}
                                onChange={(e) => update.setLanguage(e.target.value)}
                            >
                                {lists.languages.map((lang) => (
                                    <option value={lang.key} key={lang.key}>
                                        {lang.label}
                                    </option>
                                ))}
                            </select>
                        </section>
                        <hr />
                        <section className="sena:w-full sena:grid sena:grid-cols-2 sena:gap-5">
                            {lists.profiles.map((profile) => (
                                <Profile
                                    key={profile.key}
                                    currentProfile={values.profile}
                                    update={update.updateProfileValue}
                                    profile={profile}
                                    t={t}
                                />
                            ))}
                        </section>
                        <hr />
                        <section className="sena:grow sena:overflow-y-auto sena:p-1" tabIndex={-1}>
                            <div className="sena:grid sena:grid-cols-[repeat(auto-fill,minmax(120px,1fr))] sena:gap-5 sena:h-full sena:max-h-[calc(100vh-90vh)]">
                                {tools.map((tool) => (
                                    <Tool
                                        key={tool.id}
                                        tool={tool}
                                        update={update.updateValue}
                                        t={t}
                                    />
                                ))}
                            </div>
                        </section>
                        <hr />
                        <section className="sena:flex sena:gap-5 sena:items-center">
                            <button
                                onClick={() => setIsOpen(false)}
                                tabIndex={0}
                                className="sena:w-full sena:bg-widget-primary sena:text-widget-primary-content sena:border sena:border-widget-primary sena:rounded sena:py-1 sena:font-medium sena:flex justify-center sena:items-center sena:gap-2 sena:cursor-pointer sena:active:scale-95 sena:ease-out sena:duration-300 sena:focus:outline-2 sena:focus:outline-widget-primary"
                            >
                                <CloseIcon size={20} />
                                {t("close")}
                            </button>
                            <button
                                onClick={() => update.updateProfileValue("default")}
                                tabIndex={0}
                                className="sena:w-full sena:bg-transparent sena:text-widget-primary sena:border sena:border-widget-primary sena:rounded sena:py-1 sena:font-medium sena:flex sena:justify-center sena:items-center sena:gap-2 sena:cursor-pointer sena:active:scale-95 sena:ease-out sena:duration-300 sena:focus:outline-2 sena:focus:outline-widget-primary"
                            >
                                <ReloadIcon size={20} className="sena:-rotate-x-180 sena:rotate-180" />
                                {t("reload")}
                            </button>
                        </section>
                    </div>
                </main>
            </div>
            <div
                className="sena:fixed sena:top-0 sena:bottom-0 sena:left-0 sena:right-0 sena:bg-black/60 sena:duration-300"
                style={{ zIndex: isOpen ? 9998 : -100, opacity: isOpen ? 1 : 0 }}
                onClick={() => setIsOpen(false)}
            ></div>
        </>
    );
}
