import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="overview">
        <h1 id="city">{props.data.city}</h1>
        <ul>
          <li id="date">
            <FormattedDate date={props.data.date} />
          </li>
          <li id="description">{props.data.description}</li>
        </ul>
        <div className="row">
          <div className="col-4">
            <div className="d-flex weather-temperature">
              <div>
                <strong id="temperature">
                  {Math.round(props.data.temperature)}
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
              src={props.data.iconUrl}
              alt="icon"
              id="icon"
            />
          </div>
          <div className="col-4">
            <ul>
              <li>
                Humidity: <span id="humidity">{props.data.humidity}</span>%
              </li>
              <li>
                Wind: <span id="wind">{props.data.wind}</span> mph
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
