import React from "react";

function WindSpeed(props) {
  return (
    <span className="weather-forecast--temp" style={{ color: props.color }}>
      {props.speed} m/s
    </span>
  );
}

export default WindSpeed;
