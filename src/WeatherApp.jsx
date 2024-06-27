import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";

export default function WeatherApp(){
    const [weather, setWeather] = useState(
{
        city:"Kolkata",
        feelsLike: 35.97,
        temp: 28.97,
        tempMax: 28.97,
        tempMin: 28.97,
        weather: "haze"
}
    );
    let updateInfo = (newInfo) => {
        setWeather(newInfo);
    }
    return(
    <div style={{textAlign:"center"}}>
        <h2>
            Weather app by dibyendu
        </h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weather}/>
        </div>)

}