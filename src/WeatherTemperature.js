import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature d-inline">
        <span className="current_temperature">{Math.round(props.celsius)}</span>
        <span className="current_units">
          °C |&nbsp;
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9/5) + 32;
    return (
      <div className="WeatherTemperature d-inline">
        <span className="current_temperature">{Math.round(fahrenheit)}</span>
        <span className="current_units">
          <a href="/" onClick={showCelsius}>°C&nbsp;</a>
          | °F
        </span>
      </div>
    );
  }
}
