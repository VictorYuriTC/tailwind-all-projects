import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SEARCH_SVG } from '../assets/images/svgs/miscellaneous/svgs';
import SearchedUsersContext from '../context/SearchedUsersContext';
import { getCityCoordinatesFromAPI, getCityWeatherFromAPI } from '../services/weatherAPI';
import CityWeatherCard from './CityWeatherCard';

function Header() {
  const [cityInfo, setCityInfo] = useState(null);
  const [cityCoordinates, setCityCoordinates] = useState(null);
  const [cityWeather, setCityWeather] = useState(null);
  const contextValue = useContext(SearchedUsersContext);
  const { search } = contextValue
  const { searchedCity, setSearchedCity } = search

  const navigate = useNavigate();

  const onEnterKeyDownSetSearchedCity = ({ key, target}) => {
    const city = target.value
    const cityNormalized = city.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    console.log(cityNormalized)
    if (key === 'Enter') {
      navigate(`/search/${cityNormalized}`)
      setSearchedCity(cityNormalized)
    }
  }

  useEffect(() => {
    const getCityInfo = async () => {
      const foundCities = await getCityCoordinatesFromAPI(searchedCity);
      const firstCityFound = await foundCities[0];
      setCityInfo(firstCityFound);
    }
    getCityInfo();
  }, [searchedCity])
  
  useEffect(() => {
    const getCityCoordinates = async () => {
      const { lat, lon } = cityInfo;
      setCityCoordinates({ lat, lon })
    }
    getCityCoordinates();
  }, [cityInfo])

  useEffect(() => {
    const getCityWeather = async () => {
      const { lat, lon } = cityCoordinates;
      const foundCityWeather = await getCityWeatherFromAPI(lat, lon);
      setCityWeather(foundCityWeather);
    }
    getCityWeather();
  }, [cityCoordinates])
 
  return (
    <header className="flex flex-col header items-center justify-center ml-4 mr-4 p-4
      md:flex md:flex-row md:justify-between md:ml-2 md:mr-2 md:p-1">
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
          className="bg-dark-snow text-center border border-gray rounded p-1 font-normal md:text-start md:pl-3 md:group-focus:scale-105 md:focus:font-medium focus:outline-2"
          placeholder="Search by city"
        />
      </label>

      <div className="flex flex-row items-center justify-center">
        { cityWeather && <CityWeatherCard cityWeather={ cityWeather } />}
      </div>
    </header>
  );
}
export default Header;