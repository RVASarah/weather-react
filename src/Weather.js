import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      date: "Monday 09:00",
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png",
    });
  }

  if (weatherData.ready) {
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
                  <strong id="temperature">
                    {Math.round(weatherData.temperature)}
                  </strong>
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
                src={weatherData.iconUrl}
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
  } else {
    const apiKey = "d4a256f3bb9402t22bd7345b86oaccce";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
