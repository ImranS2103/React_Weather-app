import React from 'react';
import Description from './Description';

function Forecast({ weather, units, onUnitsClick, onKeyDown }) {
  return (
    <div className="app">
 
      <div className="overlay">
        {weather && (
          <div className="container">
            <div className="section section__inputs">
              <input onKeyDown={onKeyDown} type="text" name="city" placeholder="Enter City..." />
              <button onClick={(e) => onUnitsClick(e)}>°F</button>
            </div>
            <div className="section section__temperature">
              <div className="icon">
                <h3>{`${weather.name}, ${weather.country}`}</h3>
                <img src={weather.iconURL} alt="" />
                <h3>{weather.description}</h3>
              </div>
              <div className="temperature">
                <h1>{`${weather.temp.toFixed()} °${units === "metric" ? "C" : "F"}`}</h1>
              </div>
            </div>
            <Description weather={weather} units={units} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Forecast;
