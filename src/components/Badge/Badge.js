const Badge = ({ label, variant, size }) => {
  return <div classNameName={`badge ${variant} ${size}`}>{label}</div>;
};

export default Badge;
