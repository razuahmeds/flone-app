import React from "react";
import { demoData } from "../helpers/demoData";
import "../styles/DailyDeals.css";
import { Link } from "react-router-dom";

function DailyDeals() {
  return (
    <div className="-daily-container">
      <div className="daily-deals-container">
        <div className="DEALS">
          <h1>__________ DAILY DEALS! __________</h1>
          <div className="daily">
            <h4>New Arrivals</h4>
            <h4>Best Sellers</h4>
            <h4>Sale Items</h4>
          </div>
        </div>

        <div className="img-container">
          {demoData?.map((item) => {
            return (
              <div key={item.id} className="sale-items">
                <img src={item.img} alt="" />
                <h4>{item.title}</h4>
                <div className="button">
                  <Link to={`/card-details/${item.id}`}>
                    {" "}
                    <button>Details</button>
                  </Link>
                  <h4> {item.pages} </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DailyDeals;
