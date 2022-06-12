import React from "react";
import Button from "../components/Button/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

export default {
  title: "Shopping Cart/Components/Button",
  component: Button,
  argTypes: {
    variant: {
      options: [
        "btn-primary",
        "btn-secondary",
        "btn-success",
        "btn-danger",
        "btn-warning",
        "btn-info",
        "btn-light",
        "btn-dark",
      ],
      control: { type: "select" },
    },
    size: {
      options: ["fs-1", "fs-2", "fs-3", "fs-4", "fs-5", "fs-6"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  variant: "",
  size: "",
};
