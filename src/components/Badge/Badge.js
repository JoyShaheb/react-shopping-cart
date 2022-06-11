import React from "react";

const Badge = ({ label, variant, size }) => {
  return <div className={`badge ${variant} ${size}`}>{label}</div>;
};

export default Badge;
