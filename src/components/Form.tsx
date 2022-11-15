import { useState } from 'react';
import './form.scss';
import { apiKey } from '../key';
import { Weather } from '../models/models';
import { useNavigate } from 'react-router-dom';
import { setWeatherData } from './setWeatherData';

interface Props {
	setDisplayWeather: (displayWeather: Weather | null) => void;
}


function Form({setDisplayWeather}: Props) {
    const navigate = useNavigate();
    const [location, setLocation] = useState("arvika");
    const [timePeriod, setTimePeriod] = useState("last7days");
    const [unit, setUnit] = useState("metric");
    const [userApiKey, setUserApiKey] = useState("");

    const baseURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
    const include = "&include=days%2Chours"

    async function submit(event: { preventDefault: () => void; }) {
        event.preventDefault();
        const data: any = await getWeather();
        const weatherData: Weather | undefined = await setWeatherData(data, location, unit, userApiKey);
        if(weatherData) {
            setDisplayWeather(weatherData);
            const maybePreviousWeatherData = localStorage.getItem("weatherData");
            if(maybePreviousWeatherData) {
                let weathers = JSON.parse(maybePreviousWeatherData);
                weathers.push(weatherData);
                localStorage.setItem("weatherData", JSON.stringify(weathers))
            } else {
                localStorage.setItem("weatherData", JSON.stringify(weatherData));
            }
                navigate('/');
        } else {
            console.log("something went wrong with weatherData:", weatherData);
        }
    }
    
    function checkApiKey() {
        if(userApiKey.length == 0) {
            return apiKey;
        } else {
            return userApiKey;
        }
    }

    let apiCalls: number = 0;
    async function getWeather() {
        try {
        ++apiCalls;
        console.log(`${baseURL}${location}/${timePeriod}?unitGroup=${unit}${include}&key=${checkApiKey()}&contentType=json`);
                const response = await fetch(`${baseURL}${location}/${timePeriod}?unitGroup=${unit}${include}&key=${checkApiKey()}&contentType=json`);
                const data = await response.json();
        return data;
            } catch(error: unknown) {
        if(apiCalls > 5) {
            console.log("You might have used all of your calls for today; https://www.visualcrossing.com/usage");
        }
                console.log(error);
                alert("Ojdå, något gick fel när väderdata skulle hämtas.");
            }
    }

    
    return (
        <form className="form">
            <label className="form__label" htmlFor="location">Stad</label>
            <input className="form__input" type="text" id="location" onChange={ (e) => setLocation(e.target.value) }></input>

            <p>Visa väder från..</p>
            <section>
                <input className="form__input" type="radio" id="week" value="last7days" name="timePeriod" onChange={ (e) => setTimePeriod(e.target.value) }></input>
                <label htmlFor="week">senaste veckan</label>
            </section>
            <section>
                <input className="form__input" type="radio" id="month" value="last30days" name="timePeriod" onChange={ (e) => setTimePeriod(e.target.value) }></input>
                <label htmlFor="month">senaste månaden</label>
            </section>
            <section>
                <input className="form__input" type="radio" id="year" value="yeartodate" name="timePeriod" onChange={ (e) => setTimePeriod(e.target.value) }></input>
                <label htmlFor="year">årsskiftet</label>
            </section>

            <p>Enhet</p>
            <section>
                <input className="form__input" type="radio" id="celcius" value="metric" name="unit" onChange={ (e) => setUnit(e.target.value) }></input>
                <label htmlFor="celcius">Celcius</label>
            </section>
            <section>
                <input className="form__input" type="radio" id="farenheight" value="farenheight" name="unit" onChange={ (e) => setUnit(e.target.value) }></input>
                <label htmlFor="farenheight">Farenheight</label>
            </section>

            <label className="form__label" htmlFor="key">API Nyckel (frivillig)</label>
            <input className="form__input" type="text" id="key" onChange={ (e) => setUserApiKey(e.target.value) }></input>

            <button onClick={ submit }>Sök efter tempraturer</button>
        </form>
    );
}

export default Form;