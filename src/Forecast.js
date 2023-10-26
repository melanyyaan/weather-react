import React from "react";
import "./Forecast.css";

export default function Forecast() {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            <div className="forecast_date">Wed</div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3222/3222791.png"
              alt="Weather icon"
              className="forecast_icon"
            />
            <div className="forecast_temperatures">
              <span className="forecast_temp_max">15°</span>
              <span className="forecast_temp_min">4°</span>
            </div>
          </div>
          <div className="col">
            <div className="forecast_date">Thu</div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3222/3222791.png"
              alt="Weather icon"
              className="forecast_icon"
            />
            <div className="forecast_temperatures">
              <span className="forecast_temp_max">11°</span>
              <span className="forecast_temp_min">5°</span>
            </div>
          </div>
          <div className="col">
            <div className="forecast_date">Fri</div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3222/3222791.png"
              alt="Weather icon"
              className="forecast_icon"
            />
            <div className="forecast_temperatures">
              <span className="forecast_temp_max">17°</span>
              <span className="forecast_temp_min">6°</span>
            </div>
          </div>
          <div className="col">
            <div className="forecast_date">Sat</div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3222/3222791.png"
              alt="Weather icon"
              className="forecast_icon"
            />
            <div className="forecast_temperatures">
              <span className="forecast_temp_max">12°</span>
              <span className="forecast_temp_min">3°</span>
            </div>
          </div>
          <div className="col">
            <div className="forecast_date">Sun</div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3222/3222791.png"
              alt="Weather icon"
              className="forecast_icon"
            />
            <div className="forecast_temperatures">
              <span className="forecast_temp_max">14°</span>
              <span className="forecast_temp_min">6°</span>
            </div>
          </div>
          <div className="col">
            <div className="forecast_date">Mon</div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3222/3222791.png"
              alt="Weather icon"
              className="forecast_icon"
            />
            <div className="forecast_temperatures">
              <span className="forecast_temp_max">15°</span>
              <span className="forecast_temp_min">6°</span>
            </div>
          </div>
        </div>
      </div>
    );
}