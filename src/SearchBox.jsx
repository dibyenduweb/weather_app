import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";
export default function SearchBox() {
    const API_URL ="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "15332e044278e8b46c851e48b23b9485";

let getWeatherInfo = async () => {
  let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
  let jsonResponse = await response.json();
let result = {
    temp:jsonResponse.main.temp,
    tempMin:jsonResponse.main.temp_min,
    tempMax:jsonResponse.main.temp_max,
    feelsLike:jsonResponse.main.feels_like,
    weather:jsonResponse.weather[0].description,
}
console.log(result);
}
  let [city, setCity] = useState("");

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };
  let handleSubmit = (evt) => {
   evt.preventDefault();
   console.log(city);
   setCity("")
   getWeatherInfo();
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
        </form>
      </div>
    </>
  );
}
