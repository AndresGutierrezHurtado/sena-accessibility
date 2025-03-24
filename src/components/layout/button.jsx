import React from "react";

// Components
import { AccessibilityIcon } from "../icons.jsx";

export default function Button({ className = "", ...props }) {
    return (
        <button
            className={
                "fixed bottom-[5rem] right-[6rem] w-[50px] h-[50px] bg-white border-[3px] border-primary rounded-full flex items-center justify-center active:scale-95 ease-out duration-300 cursor-pointer" +
                className
            }
            {...props}
        >
            <AccessibilityIcon size={30} />
        </button>
    );
}
