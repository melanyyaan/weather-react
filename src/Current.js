import React from "react";
import "./Current.css";

export default function Current() {
  return (
    <div className="Current">
      <div className="row current_location">
        <div className="col-6 city_condition">
          <div className="location_border">
            <h1 className="current_city">Cologne</h1>
            <h3 className="current_date">Wednesday, 20:30</h3>
            <h2 className="current_condition">Cloudy</h2>
          </div>
        </div>
        <div className="col-6 temperature_and_icon">
          <div className="temp_icon_border">
            <div className="temp_icon">
              <span className="current_temperature">18</span>
              <span className="current_units">°C</span>
              <span className="current_temperature_icon">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3222/3222791.png"
                  alt="Weather icon"
                />
              </span>
            </div>
          </div>
          <div className="indicators_border">
            <div className="current_indicators">
              <ul>
                <li>
                  Humidity: <span>50</span>%
                </li>
                <li>
                  Wind: <span>5</span> km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
