/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function InfoBox({ info }) {
  // const imgURL =
  //   "https://images.theconversation.com/files/442675/original/file-20220126-17-1i0g402.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1356&h=668&fit=crop";

  const HOT_URL =
    "https://media.istockphoto.com/id/1243760572/photo/heat-wave-concrept.webp?b=1&s=170667a&w=0&k=20&c=DirvRYfFTjOjsPDxPDPGLPS8FfUsIHW2PtMbCSGMGtM=";
  const COLD_URL =
    "https://media.istockphoto.com/id/1294986667/photo/concept-for-cold-temperatures-with-snow-and-minus-degrees-with-mobile-phone-showing-weather.webp?b=1&s=170667a&w=0&k=20&c=f5l8IgGeNmS8lI1_tPydS9_ew1w_sPopHZ9MsCEkeY4=";
  const RAIN_URL =
    "https://media.istockphoto.com/id/1164520030/photo/rain-on-umbrella-weather-concept.webp?b=1&s=170667a&w=0&k=20&c=WX3w2La8biJTiiQHHrrmzqcFm2-w-HzGXyTVzL7gCZ8=";




  return (
    <div className="cardContainer">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia 
        sx={{ height: 140 }} 
        image={
          info.humidity > 80 ? RAIN_URL : info.temp > 20 ? HOT_URL : COLD_URL} 
        title="green iguana" />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div>
              <p>Feels Like: {info.feelsLike}°C</p>
              <p>Humidity: {info.humidity}</p>
              <p>Temperature: {info.temp}°C</p>
              <p>Max Temperature: {info.tempMax}°C</p>
              <p>Min Temperature: {info.tempMin}°C</p>
              <p>Weather: {info.weather}</p>
            </div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
