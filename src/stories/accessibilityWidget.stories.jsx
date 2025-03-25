import React from "react";
import AccessibilityWidget from "../components/accessibilityWidget.jsx";
import "../styles.css";

export default {
    title: "components/AccessibilityWidget",
    component: AccessibilityWidget,
};

const Template = (args) => <AccessibilityWidget {...args} />;

export const Default = Template.bind({});
Default.args = {};
