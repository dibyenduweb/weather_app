/* eslint-disable no-useless-catch */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "15332e044278e8b46c851e48b23b9485";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      let jsonResponse = await response.json();

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
    if (error) {
      setError(false);
    }
  };

  let handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      console.log(city);
      let newInfo = await getWeatherInfo();
      setCity("");
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      <div className="SearchBox">
        <h3>Search for the weather</h3>
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Location"
            variant="outlined"
            value={city}
            required
            onChange={handleChange}
          />
          <br />
          <br />
          <Button variant="contained" type="submit">
            Search
          </Button>
          {error && <p>No such place exists.</p>}
        </form>
      </div>
    </>
  );
}
