import React from "react";

// Context
import { useAccessibilityContext } from "../../contexts/accessibilityContext.jsx";

// Icons
import {
    CloseIcon,
    ReloadIcon,
    ScreenReaderIcon,
} from "../icons.jsx";
import * as Icons from "../icons.jsx";

export default function Menu({ isOpen, setIsOpen }) {
    const { tools, lists, values, update, translate: t } = useAccessibilityContext();

    return (
        <div
            className="fixed top-0 bottom-0 left-0 w-full max-w-[500px] bg-primary duration-300 flex flex-col"
            style={{ transform: `translateX(${true ? "0" : "-100%"})` }}
        >
            <header className="w-full flex justify-between items-center p-5 text-primary-content">
                <h2 className="text-2xl font-bold tracking-[0.3px]">{t("title")}</h2>
                <button
                    className="border border-[1.5px] border-primary-content rounded-full p-1 active:scale-95 ease-out duration-300"
                    onClick={() => setIsOpen(false)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </header>
            <main className="bg-base grow w-full rounded-t-xl p-5">
                <div className="w-full h-full flex flex-col gap-5">
                    <section className="w-full flex items-center font-medium gap-2">
                        {(() => {
                            const Icon =
                                Icons[
                                    lists.languages.find((lang) => lang.key === values.language)
                                        ?.icon
                                ] || Icons.SpanishIcon;
                            return <Icon width={25} height={25} />;
                        })()}

                        <select
                            className="w-full focus:outline-none"
                            value={values.language}
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
                    <section className="w-full flex flex-row gap-5">
                        {lists.profiles.map((profile) => {
                            const Icon = Icons[profile.icon];
                            return (
                                <div
                                    key={profile.key}
                                    className="flex items-center gap-2 bg-white rounded-lg p-3 font-medium w-full"
                                >
                                    <div className="bg-divider/50 rounded-full p-2 flex items-center justify-center">
                                        <Icon size={17} />
                                    </div>
                                    <div>{t(profile.label)}</div>
                                </div>
                            );
                        })}
                    </section>
                    <hr />
                    <section className="grow overflow-y-auto">
                        <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-5 h-full max-h-[calc(100vh-90vh)]">
                            {tools.map((tool) => {
                                const Icon = Icons[tool.icon] || ScreenReaderIcon;
                                return (
                                    <div
                                        key={tool.id}
                                        onClick={() => update.updateValue(tool.id)}
                                        className="bg-white p-5 rounded-lg flex flex-col items-center justify-center gap-2 font-medium leading-[1rem] text-center cursor-pointer"
                                    >
                                        <Icon size={40} />
                                        <p>{t(tool.text)}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                    <hr />
                    <section className="flex gap-5 items-center">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-full bg-primary text-primary-content border border-primary rounded py-1 font-medium flex justify-center items-center gap-2 cursor-pointer active:scale-95 ease-out duration-300"
                        >
                            <CloseIcon size={20} />
                            {t("close")}
                        </button>
                        <button className="w-full bg-transparent text-primary border border-primary rounded py-1 font-medium flex justify-center items-center gap-2 cursor-pointer active:scale-95 ease-out duration-300">
                            <ReloadIcon size={20} className="-rotate-x-180 rotate-180" />
                            {t("reload")}
                        </button>
                    </section>
                </div>
            </main>
        </div>
    );
}
