import { Key, useEffect } from 'react';
import { Day, Weather } from '../models/models';
import './table.scss';

interface Props {
	setDisplayWeather: (displayWeather: Weather | null) => void;
	displayWeather: Weather | null;
    displayHour: string;
}

function Table({displayWeather, displayHour, setDisplayWeather}: Props) {
    

    function displayTempratures() {
        console.log("table.js - displayWeather", displayWeather);
        console.log("displayHour", displayHour);
        const hour: number = +displayHour.substring(0,2);
        

        function updateCheckbox(event) {
            const clickedDate = event.target.getAttribute('data-target');
        	const weatherData = localStorage.getItem("weatherData");
            // console.log(clickedDate);

            if(displayWeather) {
                if(weatherData) {
                    const parsedWeatherData = JSON.parse(weatherData);
                    for(let data of parsedWeatherData) { 
                        if(data.location == displayWeather.location && data.days[0].datetime == displayWeather.days[0].datetime && data.days.length == displayWeather.days.length) {
                            // console.log(" data.days[clickedDate].hours[hour].checked", data.days[clickedDate].hours[hour].checked);
                            // console.log("before", data.days[clickedDate].hours[hour].checked);
                            let boolean = data.days[clickedDate].hours[hour].checked;
                            boolean = boolean !== true;
                            data.days[clickedDate].hours[hour].checked = boolean;
                            // console.log("after", data.days[clickedDate].hours[hour].checked);
                            
                            localStorage.setItem("weatherData", JSON.stringify(parsedWeatherData));
                            setDisplayWeather(data);
                            console.log("LocalStorage and displayWeather is updated.");
                            break;
                        }
                    }
                }
                // console.log(displayWeather.days[clickedDate].hours[hour].checked);
            }
        }
        
        if(displayWeather) {
            const mappedData = displayWeather.days.map((day: Day, index: Key) => {
                console.log(day.datetime, day.hours[hour].datetime, day.hours[hour].checked);
                return (
                <tr key={index} >
                    <th scope="row">{day.datetime}</th>
                    <td>{day.hours[hour].datetime.substring(0, 5)}</td>
                    <td>{day.hours[hour].temp}°</td>
                    <td className="checkbox-holder"><input type="checkbox" className="checkbox" checked={day.hours[hour].checked} onChange={updateCheckbox} data-target={index} /></td>
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