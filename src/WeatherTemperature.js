import React from "react";

export default function WeatherTemperature(props) {
    return (
      <div className="WeatherTemperature d-inline">
        <span className="current_temperature">{Math.round(props.celsius)}</span>
        <span className="current_units">
          °C
        </span>
      </div>
    );


}
