import React, { useState } from "react";
import axios from "axios";
function App() {
  const [dataWether, setDataWether] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=809cdc61b102f989aacfcad9e3c25477`;
  const serchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setDataWether(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Please enter your location"
          onKeyPress={serchLocation}
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{dataWether.name}</p>
          </div>
          <div className="temp">
            {dataWether.main ? (
              <h1>{dataWether.main.temp.toFixed()}°F</h1>
            ) : null}
          </div>
          <div className="description">
            <p>
              {dataWether.weather ? (
                <p>{dataWether.weather[0].description}</p>
              ) : null}
            </p>
          </div>
        </div>

        {dataWether.name !== "undefind" && (
          <div className="bottom">
            <div className="feels">
              <p className="bold">
                {dataWether.main ? (
                  <p>{dataWether.main.feels_like.toFixed()}°F</p>
                ) : null}
              </p>
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              <p className="bold">
                {dataWether.main ? <p>{dataWether.main.humidity}°F</p> : null}
              </p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p className="bold">
                {dataWether.wind ? (
                  <p>{dataWether.wind.speed.toFixed()}MPH</p>
                ) : null}
              </p>
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
