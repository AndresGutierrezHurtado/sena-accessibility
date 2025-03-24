import React from "react";
import { IoReload as ReloadIcon, IoReaderOutline as DyslexiaIcon } from "react-icons/io5";
import { IoMdClose as CloseIcon } from "react-icons/io";
import { RiVoiceAiLine as ScreenReaderIcon } from "react-icons/ri";
import { PiCursorBold as CursorIcon } from "react-icons/pi";
import { FaBlind as BlindIcon } from "react-icons/fa";
import { MdInvertColorsOff as ColorBlindIcon } from "react-icons/md";

const AccessibilityIcon = (props) => {
    const { color = "#04324D", size = 25 } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 34 36"
            fill="none"
        >
            <circle cx="16.9711" cy="6.82898" r="5.75" fill={color} stroke={color} />
            <path
                d="M0.538243 15.079H12.7093H21.2259H33.433C33.433 17.5518 24.8776 18.4158 21.2259 18.2097L24.6689 35.2106C21.8519 35.8288 19.3478 29.6467 18.4088 26.2465H15.9048C12.1487 35.3961 9.95772 36.0349 9.01871 35.2106L13.0877 18.2097C2.32036 18.7043 0.225238 16.1093 0.538243 15.079Z"
                fill={color}
                stroke={color}
            />
        </svg>
    );
};

export {
    AccessibilityIcon,
    ReloadIcon,
    CloseIcon,
    ScreenReaderIcon,
    CursorIcon,

    // Profile
    BlindIcon,
    DyslexiaIcon,
};
