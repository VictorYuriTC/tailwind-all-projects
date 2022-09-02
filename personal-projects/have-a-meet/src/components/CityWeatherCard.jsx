import React, { useEffect, useState } from 'react'
import { HOME_SVG } from '../assets/images/svgs/miscellaneous/svgs.jsx'
import { CHILLING_THERMOMETER, CLOUDY_TEMP_SVG, CLOUD_SUN_TEMP_SVG, COLD_THERMOMETER, FREEZING_THERMOMETER, RAINY_TEMP_SVG, SIZZLING_THERMOMETER, SNOW_TEMP_SVG, SOFT_THERMOMETER, SUNNY_TEMP_SVG, WARM_THERMOMETER, WINDY_TEMP_SVG } from '../assets/images/svgs/weather/svgs.jsx'

function CityWeatherCard({ cityWeather }) {
  const [tempSVG, setTempSVG] = useState(SOFT_THERMOMETER)
  const [weatherSVG, setWeatherSVG] = useState({
    description: 'scattered clouds',
    svg: CLOUDY_TEMP_SVG
  })

  const KELVIN = cityWeather.main.temp
  const CELSIUS = (KELVIN - 272).toFixed(1)
  const FARENHEIT = (1.8 *(KELVIN - 273) + 32).toFixed(1)

  const FEELS_LIKE_KELVIN = cityWeather.main.feels_like
  const FEELS_LIKE_CELSIUS = (FEELS_LIKE_KELVIN - 272.15).toFixed(1)
  const FEELS_LIKE_FARENHEIT = (1.8 *(FEELS_LIKE_KELVIN - 273) + 32).toFixed(1)

  useEffect(() => {
    const renderingThermometerSVG = () => {
      if (CELSIUS >= 38) setTempSVG(SIZZLING_THERMOMETER)
      if (CELSIUS < 38 && CELSIUS >= 32) setTempSVG(WARM_THERMOMETER)
      if (CELSIUS < 32 && CELSIUS >= 24) setTempSVG(SOFT_THERMOMETER)
      if (CELSIUS < 24 && CELSIUS >= 16) setTempSVG(CHILLING_THERMOMETER)
      if (CELSIUS < 12 && CELSIUS >= 0) setTempSVG(COLD_THERMOMETER)
      if (CELSIUS < 0) setTempSVG(FREEZING_THERMOMETER)
    }
    renderingThermometerSVG();
  }, [CELSIUS])

  useEffect(() => {
    const renderingWeatherSVG = () => {
      const { weather } = cityWeather;
      const { description } = weather[0]
      if (description === 'clear sky') { setWeatherSVG({ description, svg: SUNNY_TEMP_SVG }) }
      if (description === 'few clouds') { setWeatherSVG({ description, svg: CLOUD_SUN_TEMP_SVG }) }
      if (description === 'scattered clouds') { setWeatherSVG({ description, svg: CLOUDY_TEMP_SVG }) }
      if (description === 'rain') { setWeatherSVG({ description, svg: RAINY_TEMP_SVG }) }
      if (description === 'snow') {setWeatherSVG({ description, svg: SNOW_TEMP_SVG }) }
    }
    renderingWeatherSVG();
  }, [cityWeather])

  return (
    <section
        className="xsm:grid xsm:gap-0 xsn:auto-cols-max xsm:grid-cols-1 flex flex-row items-center p-1 justify-center md:p-2 gap-3 text-lg md:text-base">

        <div className="flex flex-row items-center justify-center gap-1">
          <span>
            { HOME_SVG }
          </span>
          <span className="flex flex-row items-center">
            { cityWeather.name}
          </span>
        </div>

        <div className="flex flex-row items-center justify-center gap-1">
          <span>
            { tempSVG }
          </span>
          <span>
          </span>
          <span className="flex flex-row items-center">
            { FARENHEIT }ºF/{ CELSIUS }ºC
          </span>
        </div>

        <div className="flex flex-row items-center justify-center gap-1">
          <span>
            { weatherSVG.svg }
          </span>
          <span className="flex flex-row items-center">
            { FEELS_LIKE_FARENHEIT }ºF/{ FEELS_LIKE_CELSIUS }ºC
          </span>
        </div>

    </section>
  );
}
export default CityWeatherCard;