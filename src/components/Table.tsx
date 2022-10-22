import React from 'react';
import './table.scss';

function Table() {
  
  function displayTempratures() {
    // let weatherData = localStorage.getItem(weatherData);
      // weatherData = weatherData.days.map((day, index) => {
      // return (
      //   <tr key={index} >
      //     <td>{day.datetime}</td>
      //     <td>{day.hours[13].datetime.substring(0, 5)}</td>
      //     <td>{day.hours[13].temp}°</td>
      //     <td><input type="checkbox" /></td>
      //   </tr>
      // )
    // });
    // console.log("table.js - weatherData",Date(), weatherData);
    // return weatherData; 
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