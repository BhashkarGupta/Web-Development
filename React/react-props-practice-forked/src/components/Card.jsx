import React from "react";
import Avtar from "./Avtar";

function Card(params) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name"> {params.contactName}</h2>
        <Avtar imageSource={params.imageSource} imageName={params.imageName} />
      </div>
      <div className="bottom">
        <p className="info">{params.tel}</p>
        <p className="info">{params.email}</p>
      </div>
    </div>
  );
}

export default Card;
