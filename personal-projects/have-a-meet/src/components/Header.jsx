import React from 'react'
import { useState, useEffect } from 'react';
import { getCityCoordinatesFromAPI, getCityWeatherFromAPI } from '../services/weatherAPI';
import CityWeatherCard from './CityWeatherCard';

function Header() {
  const [searchCityInput, setSearchCityInput] = useState('');
  const [searchedCity, setSearchedCity] = useState('');
  const [cityCoordinates, setCityCoordinates] = useState(null);
  const [cityWeather, setCityWeather] = useState(null);
  
  useEffect(() => {
    const getCityCoordinates = async () => {
      const foundCities = await getCityCoordinatesFromAPI(searchedCity);
      const firstCityFound = await foundCities[0];
      const { lat, lon } = await firstCityFound;
      setCityCoordinates({ lat, lon })
    }
    getCityCoordinates();
  }, [searchedCity])

  useEffect(() => {
    const getCityWeather = async () => {
      const { lat, lon } = cityCoordinates;
      const foundCityWeather = await getCityWeatherFromAPI(lat, lon);
      setCityWeather(foundCityWeather);
    }
    getCityWeather();
  }, [cityCoordinates])

  return (
    <header className='header'>
      <label htmlFor="search-city-text">
        Search by city
        <input
          onChange={({ target: { value }}) => { setSearchCityInput(value) }}
          id="search-city-text"
          name="search-city-text"
          className="border border-black"
        />
      </label>

      { cityWeather && <CityWeatherCard cityWeather={cityWeather}/>}

      <button
        onClick={() => { setSearchedCity(searchCityInput) }}
        className="bg-cyan-300 hover:bg-cyan-600"
      >
        Search
      </button>
    </header>
  );
}
export default Header;