import React from "react";

export const AccessibilityIcon = (props) => {
    const { color= "#04324D", size = 25 } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 76 76"
            width={size}
            height={size}
            fill="none"
        >
            <circle cx="38" cy="38" r="36" stroke={color} stroke-width="5" />
            <circle
                cx="37.5"
                cy="19.5"
                r="8.5"
                fill={color}
                stroke={color}
                stroke-width="2"
            />
            <path
                d="M12.9781 32.5H31.478H44.4233H62.978C62.978 36.2587 49.9739 37.572 44.4233 37.2587L49.6567 63.1001C45.3748 64.0398 41.5687 54.6429 40.1414 49.4747H36.3353C30.6261 63.382 27.2957 64.353 25.8684 63.1001L32.0533 37.2587C15.6869 38.0105 12.5024 34.0661 12.9781 32.5Z"
                fill={color}
                stroke={color}
                stroke-width="2"
            />
        </svg>
    );
};

export const RotateArrowIcon = (props) => {
    const { color, size = 25 } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={color}
        >
            <path d="M1.611,12c.759,0,1.375,.57,1.485,1.32,.641,4.339,4.389,7.68,8.903,7.68,5.476,0,9.827-4.917,8.867-10.569-.453-2.665-2.148-5.023-4.523-6.313-3.506-1.903-7.48-1.253-10.18,1.045l1.13,1.13c.63,.63,.184,1.707-.707,1.707H2c-.552,0-1-.448-1-1V2.414c0-.891,1.077-1.337,1.707-.707l1.332,1.332C7.6-.115,12.921-1.068,17.637,1.408c3.32,1.743,5.664,5.027,6.223,8.735,1.122,7.437-4.633,13.857-11.86,13.857-6.021,0-11.021-4.457-11.872-10.246-.135-.92,.553-1.754,1.483-1.754Z" />
        </svg>
    );
};

export const XIcon = (props) => {
    const { color, size = 25 } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Bold"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={color}
        >
            <path d="M14.121,12,18,8.117A1.5,1.5,0,0,0,15.883,6L12,9.879,8.11,5.988A1.5,1.5,0,1,0,5.988,8.11L9.879,12,6,15.882A1.5,1.5,0,1,0,8.118,18L12,14.121,15.878,18A1.5,1.5,0,0,0,18,15.878Z" />
        </svg>
    );
};

export const checkIcon = (props) => {
    const { color, size = 25 } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 507.506 507.506"
            style={{ enableBackground: "new 0 0 507.506 507.506" }}
            xmlSpace="preserve"
            width={size}
            height={size}
            fill={color}
        >
            <g>
                <path d="M163.865,436.934c-14.406,0.006-28.222-5.72-38.4-15.915L9.369,304.966c-12.492-12.496-12.492-32.752,0-45.248l0,0   c12.496-12.492,32.752-12.492,45.248,0l109.248,109.248L452.889,79.942c12.496-12.492,32.752-12.492,45.248,0l0,0   c12.492,12.496,12.492,32.752,0,45.248L202.265,421.019C192.087,431.214,178.271,436.94,163.865,436.934z" />
            </g>
        </svg>
    );
};

// Sidebar icons
export const ScreenReaderIcon = (props) => {
    const { color, size = 25 } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={color}
        >
            <path d="M2,5.5a2,2,0,0,0-2,2v9a2,2,0,0,0,2,2H5.214L13,23.635V.365L5.214,5.5Zm8,.436V18.064L6.114,15.5H3v-7H6.114Z" />
            <path d="M15,8.821v7.364a3.682,3.682,0,0,0,0-7.364Z" />
            <path d="M14.863,3.367v3a6.137,6.137,0,1,1,0,12.273v3a9.137,9.137,0,1,0,0-18.273Z" />
        </svg>
    );
};

export const CursorIcon = (props) => {
    const { color, size = 25 } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={color}
        >
            <path d="m20.519 10.9-10.853-10.052a3.407 3.407 0 0 0 -5.666 2.552v15.1a1.5 1.5 0 0 0 2.52 1.1l3.672-3.4 2.922 6.41a2.553 2.553 0 0 0 4.549-2.321l-2.81-6.12 4.855-.681a1.5 1.5 0 0 0 .811-2.586zm-9.458.769a1.494 1.494 0 0 0 -.811.386l-3.25 3.01v-11.665a.383.383 0 0 1 .24-.371.45.45 0 0 1 .185-.043.334.334 0 0 1 .227.087l8.51 7.881z" />
        </svg>
    );
};

export const FontSizeIcon = (props) => {
    const { color, size = 25 } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={color}
        >
            <path d="M24,15v.5c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5v-.5c0-.55-.45-1-1-1h-1v7.5c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5v-7.5h-1c-.55,0-1,.45-1,1v.5c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5v-.5c0-2.21,1.79-4,4-4h5c2.21,0,4,1.79,4,4ZM12,4c1.1,0,2,.9,2,2v.5c0,.83,.67,1.5,1.5,1.5s1.5-.67,1.5-1.5v-.5c0-2.76-2.24-5-5-5H5C2.24,1,0,3.24,0,6v.5c0,.83,.67,1.5,1.5,1.5s1.5-.67,1.5-1.5v-.5c0-1.1,.9-2,2-2h2V21.5c0,.83,.67,1.5,1.5,1.5s1.5-.67,1.5-1.5V4h2Z" />
        </svg>
    );
};

export const fontStyleIcon = (props) => {
    const { color, size = 25 } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={color}
        >
            <path d="m19 0h-14a5.006 5.006 0 0 0 -5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-14a5.006 5.006 0 0 0 -5-5zm-2 10a1 1 0 0 1 -1-1 1 1 0 0 0 -1-1h-2v8h1a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2h1v-8h-2a1 1 0 0 0 -1 1 1 1 0 0 1 -2 0 3 3 0 0 1 3-3h6a3 3 0 0 1 3 3 1 1 0 0 1 -1 1z" />
        </svg>
    );
};

export const lineHeightIcon = (props) => {
    const { color, size = 25 } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={color}
            style={{ rotate: "90deg" }}
        >
            <path d="M24,1.5V22.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5V12.558c-.064,.136-.141,.268-.254,.379l-3.373,3.329c-.51,.503-1.373,.142-1.373-.574v-2.192H7.999v2.192c0,.716-.863,1.077-1.373,.574l-3.373-3.329c-.113-.111-.19-.243-.254-.378v9.941c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5V1.5C0,.672,.672,0,1.5,0s1.5,.672,1.5,1.5V11.441c.064-.135,.141-.267,.254-.378l3.373-3.329c.51-.503,1.373-.142,1.373,.574v2.192h8.001v-2.192c0-.716,.863-1.077,1.373-.574l3.373,3.329c.113,.112,.19,.244,.254,.379V1.5c0-.828,.672-1.5,1.5-1.5s1.5,.672,1.5,1.5Z" />
        </svg>
    );
};

export const letterSpacingIcon = (props) => {
    const { color, size = 25 } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={color}
        >
            <path d="M24,1.5V22.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5V12.558c-.064,.136-.141,.268-.254,.379l-3.373,3.329c-.51,.503-1.373,.142-1.373-.574v-2.192H7.999v2.192c0,.716-.863,1.077-1.373,.574l-3.373-3.329c-.113-.111-.19-.243-.254-.378v9.941c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5V1.5C0,.672,.672,0,1.5,0s1.5,.672,1.5,1.5V11.441c.064-.135,.141-.267,.254-.378l3.373-3.329c.51-.503,1.373-.142,1.373,.574v2.192h8.001v-2.192c0-.716,.863-1.077,1.373-.574l3.373,3.329c.113,.112,.19,.244,.254,.379V1.5c0-.828,.672-1.5,1.5-1.5s1.5,.672,1.5,1.5Z" />
        </svg>
    );
};

export const textAlignIcon = (props) => {
    const { color, size = 25 } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={color}
        >
            <path d="M1.5,6h21a1.5,1.5,0,0,0,0-3H1.5a1.5,1.5,0,0,0,0,3Z" />
            <path d="M1.5,11h13a1.5,1.5,0,0,0,0-3H1.5a1.5,1.5,0,0,0,0,3Z" />
            <path d="M14.5,18H1.5a1.5,1.5,0,0,0,0,3h13a1.5,1.5,0,0,0,0-3Z" />
            <path d="M22.5,13H1.5a1.5,1.5,0,0,0,0,3h21a1.5,1.5,0,0,0,0-3Z" />
        </svg>
    );
};

export const ContrastIcon = (props) => {
    const { color, size = 25 } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={color}
        >
            <path d="M12,0C5.38,0,0,5.38,0,12s5.38,12,12,12,12-5.38,12-12S18.62,0,12,0Zm0,21V3c4.96,0,9,4.04,9,9s-4.04,9-9,9Z" />
        </svg>
    );
};

export const colorSaturationIcon = (props) => {
    const { color, size = 25 } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={color}
        >
            <path d="M20.057,16.8l.1.1a1.912,1.912,0,0,0,1.769.521,1.888,1.888,0,0,0,1.377-1.177A11.924,11.924,0,0,0,24.08,11.7,12.155,12.155,0,0,0,12.5.007,12,12,0,0,0,.083,12a12.014,12.014,0,0,0,12,12c.338,0,.67-.022,1-.05a1,1,0,0,0,.916-1l-.032-3.588A3.567,3.567,0,0,1,20.057,16.8ZM17.115,8.05A1.5,1.5,0,1,1,16.05,9.885,1.5,1.5,0,0,1,17.115,8.05Zm-9.23,8.9A1.5,1.5,0,1,1,8.95,15.115,1.5,1.5,0,0,1,7.885,16.95Zm0-6A1.5,1.5,0,1,1,8.95,9.115,1.5,1.5,0,0,1,7.885,10.95Zm5-3A1.5,1.5,0,1,1,13.95,6.115,1.5,1.5,0,0,1,12.885,7.95Z" />
        </svg>
    );
};

export const HideImagesIcon = (props) => {
    const { color, size = 25 } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={color}
        >
            <path d="m18,8c0,1.105-.895,2-2,2s-2-.895-2-2,.895-2,2-2,2,.895,2,2Zm5.561,15.561c-.293.293-.677.439-1.061.439s-.768-.146-1.061-.439L.439,2.561C-.146,1.975-.146,1.025.439.439S1.975-.146,2.561.439l1.258,1.258c.814-.454,1.735-.698,2.681-.698h11c3.033,0,5.5,2.468,5.5,5.5v11c0,.946-.243,1.868-.698,2.681l1.258,1.258c.586.586.586,1.535,0,2.121ZM6.146,4.025l13.828,13.828c.017-.116.025-.235.025-.354V6.5c0-1.379-1.122-2.5-2.5-2.5H6.5c-.119,0-.237.009-.354.025Zm9.108,16.179l-6.755-6.755c-.538-.538-1.41-.538-1.948,0l-2.551,2.551v-6.5c0-.828-.671-1.5-1.5-1.5s-1.5.672-1.5,1.5v8c0,3.032,2.467,5.5,5.5,5.5h8c.829,0,1.5-.672,1.5-1.5,0-.553-.3-1.036-.745-1.296Z" />
        </svg>
    );
};

export const highlightLinksIcon = (props) => {
    const { color, size = 25 } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={color}
        >
            <path d="M7.896,16.104c-.586-.585-.586-1.536,0-2.121,.586-.586,1.535-.586,2.121,0,1.326,1.326,3.64,1.327,4.966,0l4.989-4.989c1.369-1.369,1.369-3.597,0-4.966s-3.597-1.369-4.966,0c-.586,.586-1.535,.586-2.121,0-.586-.585-.586-1.536,0-2.121,2.538-2.539,6.67-2.539,9.208,0,2.539,2.539,2.539,6.669,0,9.208l-4.989,4.989c-1.27,1.27-2.937,1.904-4.604,1.904s-3.335-.635-4.604-1.904Zm-1.384,7.893c1.667,0,3.334-.635,4.604-1.904,.586-.585,.586-1.536,0-2.121-.586-.586-1.535-.586-2.121,0-1.37,1.37-3.598,1.369-4.966,0-1.369-1.369-1.369-3.597,0-4.966l4.961-4.961c1.37-1.37,3.598-1.37,4.966,0,.586,.586,1.535,.586,2.121,0,.586-.585,.586-1.536,0-2.121-2.539-2.539-6.669-2.539-9.208,0L1.907,12.885c-2.539,2.539-2.539,6.669,0,9.208,1.27,1.27,2.937,1.904,4.604,1.904Z" />
        </svg>
    );
};

export const widgetSizeIcon = (props) => {
    const { color, size = 25 } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={color}
        >
            <path d="M10.561,13.439c.586,.585,.586,1.536,0,2.121l-5.439,5.439h2.379c.828,0,1.5,.671,1.5,1.5s-.672,1.5-1.5,1.5H3.5c-1.93,0-3.5-1.57-3.5-3.5v-4c0-.829,.672-1.5,1.5-1.5s1.5,.671,1.5,1.5v2.379l5.439-5.439c.586-.586,1.535-.586,2.121,0ZM20.5,0h-4c-.828,0-1.5,.671-1.5,1.5s.672,1.5,1.5,1.5h2.379l-5.439,5.439c-.586,.585-.586,1.536,0,2.121,.293,.293,.677,.439,1.061,.439s.768-.146,1.061-.439l5.439-5.439v2.379c0,.829,.672,1.5,1.5,1.5s1.5-.671,1.5-1.5V3.5c0-1.93-1.57-3.5-3.5-3.5Z" />
        </svg>
    );
};

export const widgetPositionIcon = (props) => {
    const { color, size = 25 } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={color}
        >
            <g>
                <path d="M22.5,15.5H4.267l1.612-1.64a1.5,1.5,0,1,0-2.14-2.1L.993,14.552a3.515,3.515,0,0,0,0,4.9l2.746,2.793a1.5,1.5,0,0,0,2.14-2.1L4.267,18.5H22.5a1.5,1.5,0,0,0,0-3Z" />
                <path d="M1.5,8.5H19.733l-1.612,1.64a1.5,1.5,0,1,0,2.14,2.1l2.746-2.793a3.515,3.515,0,0,0,0-4.9L20.261,1.758a1.5,1.5,0,0,0-2.14,2.1L19.733,5.5H1.5a1.5,1.5,0,0,0,0,3Z" />
            </g>
        </svg>
    );
};
