import React from "react";

// Components
import { AccessibilityIcon } from "../icons.jsx";

export default function Button({ className = "", ...props }) {
    return (
        <button
            className={
                "sena:shadow-lg sena:shadow-widget-base-content/30 sena:fixed sena:bottom-[5rem] sena:mx-[6rem] sena:w-[50px] sena:h-[50px] sena:bg-widget-primary-content sena:border-[3px] sena:border-widget-primary sena:rounded-full sena:flex sena:items-center sena:justify-center sena:active:scale-95 sena:ease-out sena:duration-300 sena:cursor-pointer sena:z-[9999] sena:focus:outline-2 sena:focus:outline-widget-primary sena:outline-offset-2" +
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
