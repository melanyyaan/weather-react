import React from "react";

export default function ForecastDay(props) {
  function icon() {
    let icon = props.data.weather[0].icon;
    let iconSrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    return iconSrc;
  }

  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    return days[day];
  }

  return (
    <div className="ForecastDay">
      <div className="forecast_date">{day()}</div>
      <img src={icon()} alt="Weather icon" className="forecast_icon" />
      <div className="forecast_temperatures">
        <span className="forecast_temp_max">{maxTemp()}</span>
        <span className="forecast_temp_min">{minTemp()}</span>
      </div>
    </div>
  );
}
