import './homeView.scss';

import Table from '../components/Table';
import Header from '../components/Header';
import { Weather } from '../models/models';
import { ChangeEvent, useEffect, useState } from 'react';
import placeholder from '../assets/placeholder.json';
import yarn from '../assets/yarn.png';

interface Props {
	displayWeather: Weather | null;
	setDisplayWeather: (displayWeather: Weather | null) => void;
}

function HomeView({displayWeather, setDisplayWeather}: Props) {
	const [displayHour, setDisplayHour] = useState("");
	const weatherData = localStorage.getItem("weatherData");
	let options = <option>Inga val tillgängliga, gör en sökning</option>;

	if(displayHour.length == 0) {
		setDisplayHour("13:00");
	}

	if(weatherData) {
		const parsedWeatherData = JSON.parse(weatherData);
		// console.log("parsedWeatherData", parsedWeatherData);
		options = parsedWeatherData.map((data: Weather, index: string) => {
			const startDate: string = data.days[0].datetime.slice(5,7) + "/" + data.days[0].datetime.slice(8,10);
			return (<option value={"weather" + index} key={index}>{data.location}: {data.days.length} dagar från {startDate}</option>);
		});
	} else {
		localStorage.setItem("weatherData", JSON.stringify(placeholder));
	}

	function getWeatherValue(event: ChangeEvent<HTMLSelectElement>) {
		const value = event.target.value.substring(7);
		if(weatherData) {
			const parsedWeatherData = JSON.parse(weatherData);
			setDisplayWeather(parsedWeatherData[value]);
		}
	}


	return (
		<section className="homepage views">
			<Header />
			<article className="views__wrapper">
				<p>Här nedan ser du redan sökta tidsperioder, till vänster nedan kan du välja plats med antalet dagar samt startdatum. Till höger kan du välja vilket klockslag på dygnet du vill visa tempraturen för.</p>
				<section className="select-wrapper">
					<select onChange={(e) => getWeatherValue(e)} className="select selectWeather">
						<option>Välj väderdata</option>
						{options}
					</select>
					<input type="time" step={60000*60} onChange={ (e) => setDisplayHour(e.target.value) } value={displayHour} className="select selectTime"></input>
				</section>
				<Table displayWeather={displayWeather} displayHour={displayHour} />
			</article>
			<img src={yarn} />
		</section>
	);
}

export default HomeView;
