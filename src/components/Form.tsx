import React from 'react';
import './form.css';
import { apiKey } from '../key';

function Form() {
  const baseURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
  let location = "Arvika";
  let timePeriod = "last7days"; // can also be "last30days" and "yeartodate"
  let unit = "metric"; // can also be us to recive farenheit insted of celcius
  let userApiKey = "";
  const include = "&include=days%2Chours"
  
  function getLocation(event) {
    console.log("getLocation", event.target.value);
    location = event.target.value;
  }
  function getTimePeriod(event) {
    console.log("getTimePeriod", event.target.value);
    timePeriod = event.target.value;
  }
  function getUnit(event) {
    console.log("getUnit", event.target.value);
    unit = event.target.value;
  }
  function getKey(event) {
    console.log("getKey", event.target.value);
    userApiKey = event.target.value;
  }

  function submit(event) {
    event.preventDefault();
		let data = getWeather();
    console.log(data);
    
  }
  

  function checkApiKey() {
    if(userApiKey.length == 0) {
      return apiKey;
    } else {
      return userApiKey;
    }
  }

  async function getWeather() {
		try {
			const response = await fetch(`${baseURL}${location}/${timePeriod}?unitGroup=${unit}${include}&key=${checkApiKey()}&contentType=json`);
			const data = await response.json();
			console.log("data", data);
      return data;
		} catch(error) {
			console.log(error);
			alert("Ojdå, den API nyckeln passade inte! \nOm du inte har någon API nyckel så kan du lämna fältet tomt.", error);
		}
  }

 
  return (
    <form className="form">
      <label className="form__label" htmlFor="location">Stad</label>
      <input className="form__input" type="text" id="location" onChange={ getLocation }></input>

      <p>Visa väder från..</p>
      <section>
        <input className="form__input" type="radio" id="week" value="last7days" name="timePeriod" onChange={ getTimePeriod }></input>
        <label htmlFor="week">senaste veckan</label>
      </section>
      <section>
        <input className="form__input" type="radio" id="month" value="last30days" name="timePeriod" onChange={ getTimePeriod }></input>
        <label htmlFor="month">senaste månaden</label>
      </section>
      <section>
        <input className="form__input" type="radio" id="year" value="yeartodate" name="timePeriod" onChange={ getTimePeriod }></input>
        <label htmlFor="year">årsskiftet</label>
      </section>

      <p>Enhet</p>
      <section>
        <input className="form__input" type="radio" id="celcius" value="metric" name="unit" onChange={ getUnit }></input>
        <label htmlFor="celcius">Celcius</label>
      </section>
      <section>
        <input className="form__input" type="radio" id="farenheight" value="farenheight" name="unit" onChange={ getUnit }></input>
        <label htmlFor="farenheight">Farenheight</label>
      </section>

      <label className="form__label" htmlFor="key">API Nyckel (frivillig)</label>
      <input className="form__input" type="text" id="key" onChange={ getKey }></input>

      {/* <input type="submit" value="Sök efter tempraturer" onChange={ submit } /> */}
      <button onClick={ submit }>Sök efter tempraturer</button>
    </form>
  );
}

export default Form;