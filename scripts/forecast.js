// This file is for interacting with the APIs

const key = "rvttlJUgjVEfVYif3tG6vAlLAnWdZyYc";

// Get weather information
const getWeather = async id => {
  const base = "https://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

// Get city information
const getCity = async city => {
  const base = "https://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};
