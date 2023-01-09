import React from "react";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert(`The weather in Washinton is ${response.data.temperature.current}°C`);
  }
  let apiKey = `d4a256f3bb9402t22bd7345b86oaccce`;
  let units = `metric`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Washington&key=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);
  return <h2>Hello from Weather</h2>;
}
