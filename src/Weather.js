import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");
  const changeHandle = (e) => {
    setCity(e.target.value);
    console.log(setCity)
  };
  const submitHandle = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`
    )
      .then((response) => response.json())
      .then((data) => {
        const kelvin = data.main.temp;
        const celcius = kelvin - 273.15;
        setResult("Temperature at " + city +" "+ Math.round(celcius) + "C");
      })
      .catch((error) => console.log(error));
    setCity("");
  };
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">Weather App</h1>
          <form onSubmit={submitHandle}>
            <input
              type="text"
              name="city"
              value={city}
              onChange={changeHandle}
            />
            <br />
            <br />
            <input type="submit" value="Get Temperature " />
          </form>
          <br />
          <br />
          <div>
            <h1>{result}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
