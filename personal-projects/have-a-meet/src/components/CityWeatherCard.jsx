import React from 'react'

function CityWeatherCard({ cityWeather }) {
  const KELVIN = cityWeather.main.temp
  const CELSIUS = (KELVIN - 272).toFixed(1)
  const FARENHEIT = (1.8 *(KELVIN - 273) + 32).toFixed(1)

  const FEELS_LIKE_KELVIN = cityWeather.main.feels_like
  const FEELS_LIKE_CELSIUS = (FEELS_LIKE_KELVIN - 272.15).toFixed(1)
  const FEELS_LIKE_FARENHEIT = (1.8 *(FEELS_LIKE_KELVIN - 273) + 32).toFixed(1)
  return (
    <section
        className="flex flex-col md:flex-row justify-between">
        <span>
          City: {cityWeather.name}
        </span>
        <span>
          Temperature: {FARENHEIT}ºF/{CELSIUS}ºC
        </span>
        <span>
          Feels like: {FEELS_LIKE_FARENHEIT}ºF/{FEELS_LIKE_CELSIUS}ºC
        </span>
    </section>
  );
}
export default CityWeatherCard;