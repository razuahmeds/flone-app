import React from "react";
import { useParams } from "react-router-dom";
import { getSignData } from "../helpers/demoData";

function CardDetails() {
  const id = useParams().name;

  const { title, description, img, pages } = getSignData(Number(id));

  return (
    <div>
      <h4>{title}</h4>
      <img src={img} alt="" style={{ width: "98vw" }} />
      <p>{description}</p>
      <div>
        <i>{pages}</i>
      </div>
    </div>
  );
}

export default CardDetails;
