import React from "react";

const Button = ({ variant, label, size }) => {
  return <div className={`btn ${variant} ${size}`}>{label}</div>;
};

export default Button;
