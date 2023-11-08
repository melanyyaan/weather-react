import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Current.css";

export default function Current(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      iconUrl: "https://cdn-icons-png.flaticon.com/512/3222/3222791.png",
    });
  }

  function search() {
    const apiKey = "743bee57fddbfaf52447193a87d5dd25";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Current">
        <form className="search" onClick={handleSubmit}>
          <input
            className="search_bar"
            type="text"
            name="city"
            placeholder="Enter a city..."
            autoFocus
            onChange={handleChange}
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
              <h1 className="current_city">{weatherData.city}</h1>
              <h3 className="current_date">
                <FormattedDate date={weatherData.date} />
              </h3>
              <h2 className="current_condition text-capitalize">
                {weatherData.description}
              </h2>
            </div>
          </div>
          <div className="col-6 temperature_and_icon">
            <div className="temp_icon_border">
              <div className="temp_icon">
                <span className="current_temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="current_units">°C</span>
                <span className="current_temperature_icon">
                  <img src={weatherData.iconUrl} alt="Weather icon" />
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
    search();
    return "Loading...";
  }
}
