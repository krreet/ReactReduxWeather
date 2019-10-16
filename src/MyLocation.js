import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getWeather } from "./actions";

export default function MyLocation({ locations }) {
  const [selectedButton, setSelectedButton] = useState();
  const dispatch = useDispatch();

  const handleClick = (loc, index) => e => {
    e.preventDefault();
    setSelectedButton(index);
    dispatch(getWeather(loc));
  };

  return (
    <div className="my-locations">
      {locations.map((location, index) => (
        <button
          key={index}
          style={{ backgroundColor: selectedButton === index ? "teal" : "" }}
          onClick={handleClick(location.value, index)}
        >
          {location.name}
        </button>
      ))}
    </div>
  );
}
