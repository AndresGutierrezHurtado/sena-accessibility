import React from "react";
import Button from "../components/button.jsx";

export default {
    title: "Componentes/Button",
    component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primario = Template.bind({});
Primario.args = {
    label: "Button",
};
