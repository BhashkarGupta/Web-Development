import React from "react";

function Avtar(params) {
  return (
    <div>
      <img
        className="circle-img"
        src={params.imageSource}
        alt={params.imageName}
      />
    </div>
  );
}

export default Avtar;
