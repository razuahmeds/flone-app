import React from "react";
import { Link } from "react-router-dom";
import "../styles/CardInfo.css";

function CardInfo({ item }) {
  return (
    <div className="demodate">
      <div className="demo-text">
        <h2 className="titel">{item.title}</h2>
        <img className="img-container" src={item.img} alt="" />
        <i className="date">{item.pages}</i>
        <button className="btn">
          <Link to={`/card-details/${item.id}`}>Buy now</Link>
        </button>
      </div>
    </div>
  );
}

export default CardInfo;
