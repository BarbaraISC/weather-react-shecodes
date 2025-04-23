import React, { useState } from "react";
import axios from "axios";

export default function WeatherForm() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState();

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "43b563a3f016fb0f8t1650905fb6o494";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  function handleResponse(response) {
    setWeather(
      <ul>
        <li>Temperature:{response.data.temperature.current}</li>
        <li>Description:{response.data.condition.description}</li>
        <li>Humidity:{response.data.temperature.humidity}</li>
        <li>Wind:{response.data.wind.speed}</li>
        <li>
          <img src={response.data.condition.icon_url} />
        </li>
      </ul>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city.."
          onChange={updateCity}
          value={city}
        />
        <input type="submit" />
      </form>
      {weather}
    </>
  );
}
