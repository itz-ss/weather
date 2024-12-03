import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchbox.css";
import { useState } from 'react';
import Alert from '@mui/material/Alert';

export default function SearchBox({updateInfo}){
    let[ City, setCity] = useState("");
    let[ Error, setError] = useState(false);


    const API_URL ="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "00985fcba9070f97c088afc2b99a5398";

    let getWeatherInfo = async()=>{
        try {
            let response = await fetch(`${API_URL}?q=${City}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
    
            let result = {
                city: jsonResponse.name,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather:jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        }catch(err){
            throw err
        }
    };
    let  handleChange=(event) =>{
        setCity(event.target.value);
    };

    let handleSubmit= async (event)=>{
        try{
            event.preventDefault();
            console.log(City);
            setCity(" ");
           let newInfo = await getWeatherInfo();
           updateInfo(newInfo);
        }catch{
            setError(true);
        }
   
    }
    return(
        <div className='searchbox'>
     
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="city name" variant="outlined" value={City} onChange={handleChange} required/><br></br><br></br>
            <Button variant="contained" type='submit'>Search</Button>
            {Error &&<Alert severity="error" style={{justifyContent: "center"}}>No such place is in our API.</Alert>}
            </form>
        </div>
    )
};