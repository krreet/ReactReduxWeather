import React from "react";
import { convertToF } from "./helpers";

function Temperature(props) {
  return (
    <span className="weather-forecast--temp" style={{ color: props.color }}>
      {props.cel
        ? props.temp + "\u00b0C"
        : convertToF(props.temp).toFixed(2) + "\u00b0F"}
    </span>
  );
}

export default Temperature;
