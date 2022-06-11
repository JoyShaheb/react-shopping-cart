import React from "react";

const Button = ({ variant, label, size }) => {
  return (
    <div classNameName={`btn ${variant} btn-success ${size}`}>{label}</div>
  );
};

export default Button;
