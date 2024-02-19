import { useEffect, useState } from 'react';
import './App.css'
import Forecast from './components/Forecast';
import { getFormattedWeatherData } from './weatherService';

function App() {
  const [city, setCity] = useState("Shrirampur");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  
  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units);
      setWeather(data);
    };

    fetchWeatherData();
  }, [units, city])

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius ? "°F" : "°C";
    setUnits(isCelsius ? "metric" : "imperial");
  };

  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  }

  return (
    <>
    <div className="main">
      <Forecast weather={weather} units={units} onUnitsClick={handleUnitsClick} onKeyDown={enterKeyPressed} />
      </div>
    </>
  )
}

export default App