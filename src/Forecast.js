import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Temperature from "./Temperature";
import WindSpeed from "./WindSpeed";
import Spinner from "./Spinner";
import { convertToF } from "./helpers";

function Forecast(props) {
  const { weather, isLoading, error } = props;

  const [tempColor, setTempColor] = useState("transparent");
  const [cel, setCel] = useState(true);

  const icon = weather ? weather.weather[0].icon : null;

  const { temp } = weather ? weather.main : {};

  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  useEffect(() => {
    const tempF = Math.round(convertToF(temp));
    if (tempF < 40) setTempColor("skyblue");
    if (tempF >= 40) setTempColor("royalblue");
    if (tempF >= 55) setTempColor("mediumturquoise");
    if (tempF >= 70) setTempColor("goldenrod");
    if (tempF >= 85) setTempColor("orange");
    if (tempF >= 100) setTempColor("orangered");
    if (tempF >= 115) setTempColor("firebrock");
  }, [temp, setTempColor]);

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <pre className="error">{error.toString()}</pre>;
  }

  // const { weather_state_abbr, weather_state_name, the_temp } = weather
  //   ? weather.consolidated_weather[0]
  //   : {};

  return weather ? (
    <div className="weather-forecast">
      <h2>{`${weather.name} `}</h2>
      <h3>{`${weather.weather[0].description.toUpperCase()}`}</h3>
      <figure>
        <img
          className="weather-forecast--icon"
          src={iconUrl}
          alt={weather.weather[0].description}
        />
        <figcaption>
          <Temperature temp={temp} color={tempColor} cel={cel} />
        </figcaption>
        <figcaption>
          <WindSpeed color={tempColor} speed={weather.wind.speed} />
        </figcaption>
      </figure>
      <footer>
        {cel ? (
          <button onClick={() => setCel(false)}>°F</button>
        ) : (
          <button onClick={() => setCel(true)}>°C</button>
        )}
      </footer>
    </div>
  ) : (
    <span className="weather-forecast--temp" style={{ color: "orange" }}>
      How's The Weather ?
    </span>
  );
}

const mapStateToProps = state => ({
  weather: state.weather,
  isLoading: state.weatherIsLoading,
  error: state.weatherError
});

export default connect(mapStateToProps)(Forecast);
