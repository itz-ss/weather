import "./infoBox.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



export default function InfoBox({info}){
    const Image_URL = 
     "https://i.pinimg.com/736x/01/97/9c/01979cf1b2debf9e52872adf25cf3e5c.jpg";
     const Hot_URL = "https://cdn.zeebiz.com/sites/default/files/2024/09/24/321496-hot-weather-ani.jpg?im=FitAndFill=(1200,900)";
     const Cold_URL = "https://thumbs.dreamstime.com/b/thermometer-snow-shows-low-temperatures-zero-low-temperatures-degrees-celsius-fahrenheit-cold-winter-weather-zero-102786329.jpg";
     const Rain_URL = "https://www.shutterstock.com/image-photo/transparent-umbrella-under-heavy-rain-260nw-2176486433.jpg";
    return(
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                sx={{ height: 140 }}
                image={info.temp== info.humidity? Image_URL: info.humidity > 50? Rain_URL: info.temp > 25 ? Hot_URL: Cold_URL}
                title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p> temperature ={info.temp}&deg;C </p>
                        <p> Minimum temperature ={info.tempMin}&deg;C </p>
                        <p> Maximum temperature ={info.tempMax}&deg;C </p>
                        <p> Humidity ={info.humidity} </p>
                        <p> Weather can be described as <i><b>{info.weather}</b></i> and feels like {info.feelsLike}&deg;C </p>
                    </Typography>
                </CardContent>
                </Card>
            </div>
        </div>
    );
};