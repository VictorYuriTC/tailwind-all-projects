import React, { useEffect, useState } from 'react'
import { CHILLING_THERMOMETER, CLOUDY_TEMP_SVG, COLD_THERMOMETER, FREEZING_THERMOMETER, SIZZLING_THERMOMETER, SOFT_THERMOMETER, SUNNY_TEMP_SVG, WARM_THERMOMETER, WINDY_TEMP_SVG } from '../assets/images/svgs/svgs'

function CityWeatherCard({ cityWeather }) {
  const [tempSVG, setTempSVG] = useState(SUNNY_TEMP_SVG)
  const KELVIN = cityWeather.main.temp
  const CELSIUS = (KELVIN - 272).toFixed(1)
  const FARENHEIT = (1.8 *(KELVIN - 273) + 32).toFixed(1)

  const FEELS_LIKE_KELVIN = cityWeather.main.feels_like
  const FEELS_LIKE_CELSIUS = (FEELS_LIKE_KELVIN - 272.15).toFixed(1)
  const FEELS_LIKE_FARENHEIT = (1.8 *(FEELS_LIKE_KELVIN - 273) + 32).toFixed(1)

  useEffect(() => {
    if (CELSIUS >= 33) setTempSVG(SIZZLING_THERMOMETER)
    if (CELSIUS < 33 && CELSIUS >= 26) setTempSVG(WARM_THERMOMETER)
    if (CELSIUS < 26 && CELSIUS >= 19) setTempSVG(SOFT_THERMOMETER)
    if (CELSIUS < 19 && CELSIUS >= 12) setTempSVG(CHILLING_THERMOMETER)
    if (CELSIUS < 12 && CELSIUS >= 5) setTempSVG(COLD_THERMOMETER)
    if (CELSIUS < 5) setTempSVG(FREEZING_THERMOMETER)
  }, [CELSIUS])

  return (
    <section
        className="flex flex-col items-center justify-center md:flex-row justify-around md:p-2 gap-3">
        <div>
          <span>
            {cityWeather.name}
          </span>
        </div>
        <div className="flex flex-row items-center justify-center gap-1">
            { tempSVG }
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