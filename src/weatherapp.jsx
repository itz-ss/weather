import SearchBox from './searchbox';
import InfoBox from './infoBox';
import { useState } from 'react';


export default function WeatherApp (){
    const [WeatherInfo, setWeatherInfo] = useState({
        city: "City Name",
        feelsLike: "" ,
        humidity: "",
        temp: "",
        tempMax: "",
        tempMin: "",
        weather: "",
    });

    let updateInfo =(newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign: "center"}}>
            <h1>weather app by Saransh</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={WeatherInfo}/>
        </div>
    )
}