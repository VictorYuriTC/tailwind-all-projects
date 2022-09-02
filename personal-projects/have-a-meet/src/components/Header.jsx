import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import { SEARCH_SVG } from '../assets/images/svgs/miscellaneous/svgs';
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
    <header className="header flex flex-col ml-2 mr-2 p-4 items-center justify-center
    md:flex-row md:justify-between md:p-1">
      <label
        htmlFor="search-city-text"
        className="group flex flex-row items-center justify-center gap-2 md:justify-start"
      >
        <span className="">
          { SEARCH_SVG }
        </span>
        <input
          onKeyDown={ onEnterKeyDownSetSearchedCity }
          id="search-city-text"
          name="search-city-text"
          className="bg-dark-snow text-center border border-dark-snow rounded p-1
          font-normal md:text-start md:pl-3 md:group-focus:scale-105 md:focus:font-medium"
          placeholder="Search by city"
        />
      </label>

      <div>
        { cityWeather && <CityWeatherCard cityWeather={cityWeather} />}
      </div>
    </header>
  );
}
export default Header;