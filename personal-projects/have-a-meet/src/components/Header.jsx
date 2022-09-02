import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import SearchedUsersContext from '../context/SearchedUsersContext';
import useGetAllUsersFromAPI from '../hooks/useGetAllUsersFromAPI';
import { getCityCoordinatesFromAPI, getCityWeatherFromAPI } from '../services/weatherAPI';
import CityWeatherCard from './CityWeatherCard';

function Header() {
  const [cityCoordinates, setCityCoordinates] = useState(null);
  const [cityWeather, setCityWeather] = useState(null);
  const contextValue = useContext(SearchedUsersContext);
  const { search } = contextValue
  const { searchedCity, setSearchedCity } = search
  
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

  const onEnterKeyDownSetSearchedCity = ({ key, target}) => {
    if (key === 'Enter') { setSearchedCity(target.value)}
  }
 
  return (
    <header className="header flex flex-col items-center justify-between md:flex-row m-1">
      <label
        htmlFor="search-city-text"
        className="flex flex-row items-center justify-center md:justify-start"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <input
          onKeyDown={ onEnterKeyDownSetSearchedCity }
          id="search-city-text"
          name="search-city-text"
          className="bg-dark-snow border border-dark-snow rounded p-1 pl-3 font-normal"
          placeholder="Search by city"
        />
      </label>

      { cityWeather && <CityWeatherCard cityWeather={cityWeather}/>}
    </header>
  );
}
export default Header;