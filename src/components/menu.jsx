import React from "react";
import { BlindIcon, CloseIcon, ReloadIcon, ScreenReaderIcon } from "./icons";

export default function Menu({ isOpen, setIsOpen }) {
    return (
        <div
            className="fixed top-0 bottom-0 left-0 w-full max-w-[500px] bg-primary duration-300 flex flex-col"
            style={{ transform: `translateX(${isOpen ? "0" : "-100%"})` }}
        >
            <header className="w-full flex justify-between items-center p-5 text-primary-content">
                <h2 className="text-2xl font-bold tracking-[0.3px]">Menu de Accesibilidad</h2>
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
                    <section className="w-full flex items-center font-medium">
                        <select className="w-full">
                            <option value="en">English</option>
                            <option value="es">Español</option>
                        </select>
                    </section>
                    <hr />
                    <section className="w-full flex flex-row gap-5">
                        <div className="flex items-center gap-2 bg-white rounded-lg p-3 font-medium w-full">
                            <div className="bg-divider/50 rounded-full p-2 flex items-center justify-center">
                                <BlindIcon size={17} />
                            </div>
                            <div>Perfil</div>
                        </div>
                        <div className="flex items-center gap-2 bg-white rounded-lg p-3 font-medium w-full">
                            <div className="bg-divider/50 rounded-full p-2 flex items-center justify-center">
                                <BlindIcon size={17} />
                            </div>
                            <div>Perfil</div>
                        </div>
                    </section>
                    <hr />
                    <section className="grow">
                        <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-5">
                            <div className="bg-white p-5 rounded-lg flex flex-col items-center justify-center gap-2 font-medium leading-[1rem] text-center">
                                <ScreenReaderIcon size={40} />
                                <p>Screen Reader</p>
                            </div>
                            <div className="bg-white p-5 rounded-lg flex flex-col items-center justify-center gap-2 font-medium leading-[1rem] text-center">
                                <ScreenReaderIcon size={40} />
                                <p>Screen Reader</p>
                            </div>
                            <div className="bg-white p-5 rounded-lg flex flex-col items-center justify-center gap-2 font-medium leading-[1rem] text-center">
                                <ScreenReaderIcon size={40} />
                                <p>Screen Reader</p>
                            </div>
                        </div>
                    </section>
                    <hr />
                    <section className="flex gap-5 items-center">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-full bg-primary text-primary-content border border-primary rounded py-1 font-medium flex justify-center items-center gap-2 cursor-pointer active:scale-95 ease-out duration-300"
                        >
                            <CloseIcon size={20} />
                            Cerrar
                        </button>
                        <button className="w-full bg-transparent text-primary border border-primary rounded py-1 font-medium flex justify-center items-center gap-2 cursor-pointer active:scale-95 ease-out duration-300">
                            <ReloadIcon size={20} className="-rotate-x-180 rotate-180" />
                            Reiniciar
                        </button>
                    </section>
                </div>
            </main>
        </div>
    );
}
