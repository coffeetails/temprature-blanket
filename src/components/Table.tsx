import { Key } from 'react';
import { Day, Weather } from '../models/models';
import './table.scss';

interface Props {
	displayWeather: Weather | null;
	setDisplayWeather: (displayWeather: Weather | null) => void;
}

function Table({displayWeather, setDisplayWeather}: Props) {
  
    function displayTempratures() {
        // const weatherData = localStorage.getItem("weatherData");
        console.log("table.js - displayWeather", displayWeather);
        // if(!displayWeather) {
        //     if(weatherData) {
        //         const parsedWeatherData = JSON.parse(weatherData);
        //         setDisplayWeather(parsedWeatherData[1]);
        //     }
        // }
        
        if(displayWeather) {
            const mappedData = displayWeather.days.map((day: Day, index: Key) => {
            // const mappedData = parsedWeatherData.days.map((day: { datetime: string; hours: { temp: number; datetime: string; }[]; }, index: Key) => {
                return (
                <tr key={index} >
                    <td>{day.datetime}</td>
                    <td>{day.hours[13].datetime.substring(0, 5)}</td>
                    <td>{day.hours[13].temp}°</td>
                    <td><input type="checkbox" /></td>
                </tr>
                )
            });
            return mappedData; 
        }
    }

    return (
        <table className="table">
        <thead className="table__header">
            <tr>
            <th>Datum</th>
            <th>Tid</th>
            <th>Tempratur</th>
            <th>Klar</th>
            </tr>
        </thead>
        <tbody className="table__content">
            {displayTempratures()}
        </tbody>
        </table>
    );
}

export default Table;