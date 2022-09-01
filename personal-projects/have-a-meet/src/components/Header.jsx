import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { getCityCoordinatesFromAPI } from '../services/getCityCoordinatesFromAPI';

function Header() {
  const [searchCityInput, setSearchCityInput] = useState('');
  const [searchedCity, setSearchedCity] = useState('');
  
  useEffect(() => {
    const getWeather = async () => {
      const weather = await getCityCoordinatesFromAPI(searchedCity);
      console.log(weather);
    }
    getWeather();
  }, [searchedCity])


  useEffect(() => {
  }, [searchCityInput, searchedCity])

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