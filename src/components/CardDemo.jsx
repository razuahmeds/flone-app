import React from "react";
import { demoData } from "../helpers/demoData";
import CardInfo from "./CardInfo";

function CardDemo() {
  return (
    <div className="components">
      {demoData.map((item, index) => {
        return <CardInfo item={item} key={index} />;
      })}
    </div>
  );
}

export default CardDemo;
