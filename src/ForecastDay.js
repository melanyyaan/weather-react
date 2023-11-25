import React from "react";

export default function ForecastDay(props) {
    return (
      <div className="ForecastDay">
        <div className="forecast_date">{props.data.dt}</div>
        <img
          src='https://openweathermap.org/img/wn/{props.data.icon}@2x.png'
          alt="Weather icon"
          className="forecast_icon"
        />
        <div className="forecast_temperatures">
          <span className="forecast_temp_max">{props.data.temp.max}°</span>
          <span className="forecast_temp_min">{props.data.temp.min}°</span>
        </div>
      </div>
    );
}