import React from "react";

// Components
import { AccessibilityIcon } from "../icons.jsx";

export default function Button({ className = "", ...props }) {
    return (
        <button
            className={
                "shadow-lg shadow-widget-base-content/30 fixed bottom-[5rem] mx-[6rem] w-[50px] h-[50px] bg-widget-primary-content border-[3px] border-widget-primary rounded-full flex items-center justify-center active:scale-95 ease-out duration-300 cursor-pointer z-[9999]" +
                className
            }
            style={{
                right: "var(--widget-left)",
                left: "var(--widget-right)",
            }}
            {...props}
            id="button-accessibility"
        >
            <AccessibilityIcon size={30} />
        </button>
    );
}
