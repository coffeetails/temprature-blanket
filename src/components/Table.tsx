import { Key, useEffect } from 'react';
import { Day, Weather } from '../models/models';
import './table.scss';

interface Props {
	displayWeather: Weather | null;
    displayHour: string;
}

function Table({displayWeather, displayHour}: Props) {
  
    function displayTempratures() {
        console.log("table.js - displayWeather", displayWeather);
        console.log("displayHour", displayHour);
        const hour: number = +displayHour.substring(0,2);
        
        
        // ===================== TODO ===================== \\
        // - Update the localstorage when a box is checked  \\
        // - Update table checkboxes when changing what     \\
        //    weatherData is displayed.                     \\
        
        function updateCheckbox(event) {
            const newCheckedStatus = event.target.checked;
            const clickedDate = event.target.getAttribute('data-datetime');
        	const weatherData = localStorage.getItem("weatherData");
            if(weatherData) {
                let parsedWeatherData = JSON.parse(weatherData);
                console.log(newCheckedStatus, clickedDate, hour, parsedWeatherData);
                for(let i = 0; i < parsedWeatherData.length; i++) {
                    console.log("parsedWeatherData[i]", parsedWeatherData[i]);
                    if(parsedWeatherData[i].location == displayWeather?.location) {
                        for(let j = 0; i < parsedWeatherData[i].days.length; j++) {
                            if(parsedWeatherData[i].days[j]?.datetime == clickedDate) {
                                console.log("parsedWeatherData[i].days[j]", parsedWeatherData[i].days[j]);
                                console.log("parsedWeatherData[i].days[j].hours[hour]", parsedWeatherData[i].days[j].hours[hour]);
                                console.log("parsedWeatherData[i].days[j].hours[hour].checked", parsedWeatherData[i].days[j].hours[hour].checked);
                            }
                        }
                    }
                }
            }
        }
        
        if(displayWeather) {
            const mappedData = displayWeather.days.map((day: Day, index: Key) => {
                return (
                <tr key={index} >
                    <th scope="row">{day.datetime}</th>
                    <td>{day.hours[hour].datetime.substring(0, 5)}</td>
                    <td>{day.hours[hour].temp}°</td>
                    <td className="checkbox-holder"><input type="checkbox" className="checkbox" defaultChecked={day.hours[hour].checked} onChange={updateCheckbox} data-datetime={day.datetime} /></td>
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
                <th scope="col">Datum</th>
                <th scope="col">Tid</th>
                <th scope="col">Temp.</th>
                <th scope="col">Klar</th>
            </tr>
        </thead>
        <tbody className="table__content">
            {displayTempratures()}
        </tbody>
        </table>
    );
}

export default Table;