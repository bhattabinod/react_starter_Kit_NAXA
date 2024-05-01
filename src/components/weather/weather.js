import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWeatherFetch } from "@Actions/weather";

const Weather = () => {
  const [city, setCity] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const weatherData = useSelector((state) => state.weatherr?.data);
  const weatherLoading = useSelector((state) => state.weatherr?.loading);
  const weatherError = useSelector((state) => state.weatherr?.error);
  const dispatch = useDispatch();

  const handleFetchWeather = () => {
    console.log(city); // Check the value of city
    dispatch(getWeatherFetch(city));
    setIsEditing(false);
  };

  console.log("Weather Data:", weatherData); // Log weatherData
  console.log("Weather Loading:", weatherLoading); // Log weatherLoading
  console.log("Weather Error:", weatherError); // Log weatherError

  return (
    <div className="mt-8">
      <div className="flex mb-4">
        <input
          type="text"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            setIsEditing(true);
          }}
          className="p-2 border border-gray-300 mr-2 focus:outline-none"
        />
        <button
          onClick={handleFetchWeather}
          disabled={weatherLoading}
          className="bg-blue-500 text-white p-2 disabled:opacity-50"
        >
          {weatherLoading ? "Fetching..." : "Fetch Weather"}
        </button>
      </div>
      {isEditing ? null : (
        <>
          {weatherData && (
            <div className="naxatw-bg-slate-400 p-4 rounded-md mb-4">
              <h3 className="text-xl font-bold mb-2">{weatherData.name}</h3>
              <p>Temperature: {(weatherData.main.temp - 273).toFixed(2)} C</p>
              <p>Weather: {weatherData.weather[0].description}</p>
              <p>Wind: {weatherData.wind.speed}</p>
            </div>
          )}
          {weatherError && <p className="text-red-500">{weatherError}</p>}
        </>
      )}
    </div>
  );
};

export default Weather;
