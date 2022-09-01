export const getCityCoordinatesFromAPI = async (cityName) => {
  const URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${'e95a669b6b0ca8d8d5d1bdd415d284cf'}`
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export const getCityWeatherFromAPI = async (lat, lon) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${'e95a669b6b0ca8d8d5d1bdd415d284cf'}`
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}