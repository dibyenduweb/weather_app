import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}) {
    const imgURL = "https://images.theconversation.com/files/442675/original/file-20220126-17-1i0g402.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1356&h=668&fit=crop"
   

    return (
        
        <div className='cardContainer'>
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={imgURL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <div>
          <p>Feels Like: {info.feelsLike}°C</p>
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
