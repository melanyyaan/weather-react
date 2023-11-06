import React, { useState } from "react";
import axios from "axios";
import "./Current.css";

export default function Current(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Wednesday, 20:30",
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      iconUrl: "https://cdn-icons-png.flaticon.com/512/3222/3222791.png"
    });
  }

  if (weatherData.ready) {
  return (
    <div className="Current">
      <form className="search">
        <input
          className="search_bar"
          type="text"
          name="city"
          placeholder="Enter a city..."
          autoFocus
        />
        <span className="buttons">
          <input
            className="btn btn-dark search_btn"
            type="submit"
            value="Search"
          />
        </span>
      </form>
      <div className="row current_location">
        <div className="col-6 city_condition">
          <div className="location_border">
            <h1 className="current_city">{props.defaultCity}</h1>
            <h3 className="current_date">{weatherData.date}</h3>
            <h2 className="current_condition text-capitalize">{weatherData.description}</h2>
          </div>
        </div>
        <div className="col-6 temperature_and_icon">
          <div className="temp_icon_border">
            <div className="temp_icon">
              <span className="current_temperature">{Math.round(weatherData.temperature)}</span>
              <span className="current_units">°C</span>
              <span className="current_temperature_icon">
                <img
                  src={weatherData.iconUrl}
                  alt="Weather icon"
                />
              </span>
            </div>
          </div>
          <div className="indicators_border">
            <div className="current_indicators">
              <ul>
                <li>
                  Humidity: <span>{weatherData.humidity}</span>%
                </li>
                <li>
                  Wind: <span>{Math.round(weatherData.wind)}</span> km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  } else {
  const apiKey = "743bee57fddbfaf52447193a87d5dd25";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading...";
  }

}
