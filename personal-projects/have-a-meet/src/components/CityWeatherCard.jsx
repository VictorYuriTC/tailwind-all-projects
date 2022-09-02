import React from 'react'

function CityWeatherCard({ cityWeather }) {
  const TEMPERATURE_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
</svg>

  )
  const KELVIN = cityWeather.main.temp
  const CELSIUS = (KELVIN - 272).toFixed(1)
  const FARENHEIT = (1.8 *(KELVIN - 273) + 32).toFixed(1)

  const FEELS_LIKE_KELVIN = cityWeather.main.feels_like
  const FEELS_LIKE_CELSIUS = (FEELS_LIKE_KELVIN - 272.15).toFixed(1)
  const FEELS_LIKE_FARENHEIT = (1.8 *(FEELS_LIKE_KELVIN - 273) + 32).toFixed(1)
  return (
    <section
        className="flex flex-col items-center justify-center md:flex-row justify-around md:p-2">
        <div>
          <span>
            {cityWeather.name}
          </span>
        </div>
        <div className="flex flex-row">
          { TEMPERATURE_SVG }
          <span>
            {FARENHEIT}ºF/{CELSIUS}ºC
          </span>
        </div>
        <div>
          <span>
            Feels like: {FEELS_LIKE_FARENHEIT}ºF/{FEELS_LIKE_CELSIUS}ºC
          </span>
        </div>
    </section>
  );
}
export default CityWeatherCard;