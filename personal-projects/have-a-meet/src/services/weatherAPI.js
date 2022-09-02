import weatherToken from '../../tokens';

export const getCityCoordinatesFromAPI = async (cityName) => {
  const URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${weatherToken}`
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export const getCityWeatherFromAPI = async (lat, lon) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherToken}`
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}