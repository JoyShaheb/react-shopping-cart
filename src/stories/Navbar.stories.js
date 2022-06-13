import React from "react";
import Navbar from "../widget/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

export default {
  title: "Shopping Cart/widget/Navbar",
  component: Navbar,
  argTypes: {
    variant: {
      options: [
        "bg-primary",
        "bg-secondary",
        "bg-success",
        "bg-danger",
        "bg-warning",
        "bg-info",
        "bg-light",
        "bg-dark",
      ],
      control: { type: "select" },
    },
    size: {
      options: ["fs-1", "fs-2", "fs-3", "fs-4", "fs-5", "fs-6"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  logo: "Shopping Cart",
  amount: "$0.00",
};
