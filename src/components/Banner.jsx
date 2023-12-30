import React from "react";

import "../styles/banner.css";
import single from "../img/single-slide-hm1-2.png";

function Banner() {
  return (
    <div className="Banner-container">
      <div className="text">
        <h3>Smart Products</h3>
        <h1>Winter Offer 2024 Collection</h1>
        <button className="Banner-btn">SHOP NOW</button>
      </div>
      <div className="img">
        <img src={single} alt="" />
      </div>
    </div>
  );
}

export default Banner;
