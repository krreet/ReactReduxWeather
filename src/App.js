import React from "react";
import MyLocation from "./MyLocation";
import Forecast from "./Forecast";
import * as Constants from "./Constants";
function App() {
  return (
    <div className="App">
      <h1>Live UK Weather</h1>
      <p>
        Data provided by{" "}
        <a
          href="https://openweathermap.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          OpenWeather
        </a>
      </p>
      <MyLocation locations={Constants.LOCATIONS} />
      <Forecast />
    </div>
  );
}

export default App;
