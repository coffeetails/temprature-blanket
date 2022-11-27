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
        
        if(displayWeather) {
            const mappedData = displayWeather.days.map((day: Day, index: Key) => {
                return (
                <tr key={index} >
                    <th scope="row">{day.datetime}</th>
                    <td>{day.hours[hour].datetime.substring(0, 5)}</td>
                    <td>{day.hours[hour].temp}°</td>
                    <td className="checkbox-holder"><input type="checkbox" className="checkbox" defaultChecked={day.hours[hour].checked} /></td>
                </tr>
                )
            });
            return mappedData; 
        }
    }
    useEffect(() => {
        displayHour;
    });

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