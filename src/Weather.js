import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Richmond",
    temperature: "44",
    date: "Monday 9:00",
    imgUrl:
      "https://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
    description: "cloudy",
    humidity: "50",
    wind: "11",
  };
  return (
    <div className="Weather">
      <div className="overview">
        <h1 id="city">{weatherData.city}</h1>
        <ul>
          <li id="date">{weatherData.date}</li>
          <li id="description">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-4">
            <div className="d-flex weather-temperature">
              <div>
                <strong id="temperature">{weatherData.temperature}</strong>
                <span className="units">
                  <span
                    id="fahrenheit-link"
                    className="active"
                  >
                    °F
                  </span>
                  |<span id="celsius-link">°C</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-4">
            <img
              className="weather-icon"
              src={weatherData.imgUrl}
              alt=""
              id="icon"
            />
          </div>
          <div className="col-4">
            <ul>
              <li>
                Humidity: <span id="humidity">{weatherData.humidity}</span>%
              </li>
              <li>
                Wind: <span id="wind">{weatherData.wind}</span> mph
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
