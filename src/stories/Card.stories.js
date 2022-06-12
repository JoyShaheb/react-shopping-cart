import React from "react";
import Card from "../components/Card/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

export default {
  title: "Shopping Cart/Widgets/Card",
  component: Card,
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
      options: [
        "col-1",
        "col-2",
        "col-3",
        "col-4",
        "col-5",
        "col-6",
        "col-7",
        "col-8",
        "col-9",
        "col-10",
        "col-11",
        "col-12",
      ],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "$45",
  desc: "Leather Jacket ",
  imgSrc: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  size: "col-2",
};
