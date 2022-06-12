import React from "react";

const Card = ({ size, imgSrc, title, desc }) => {
  return (
    <div className={`card ${size}`}>
      <img
        style={{ objectFit: "contain" }}
        height={200}
        src={imgSrc}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
