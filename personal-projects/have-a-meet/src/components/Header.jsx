import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { getCityCoordinatesFromAPI, getCityWeatherFromAPI } from '../services/weatherAPI';

function Header() {
  const [searchCityInput, setSearchCityInput] = useState('');
  const [searchedCity, setSearchedCity] = useState('');
  const [cityCoordinates, setCityCoordinates] = useState({});
  
  useEffect(() => {
    const getCityCoordinates = async () => {
      const foundCities = await getCityCoordinatesFromAPI(searchedCity);
      const firstCity = foundCities[0];
      const { lat, lon } = firstCity;
      setCityCoordinates({ lat, lon })
    }
    getCityCoordinates();
  }, [searchedCity])

  useEffect(() => {
    const getCityWeather = async () => {
      const { lat, lon } = cityCoordinates;
      const cityWeather = await getCityWeatherFromAPI(lat, lon);
      console.log(cityWeather);
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