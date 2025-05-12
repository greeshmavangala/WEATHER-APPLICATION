// client/src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/weather?city=${city}`);
      setWeather(response.data);
    } catch (error) {
      alert('Error fetching weather data');
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city" />
      <button onClick={getWeather}>Search</button>

      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].main} - {weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp}°C</p>
        </div>
      )}
    </div>
  );
}

export default App;
