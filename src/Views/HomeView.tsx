import './homeView.scss';

import Table from '../components/Table';
import Header from '../components/Header';
import { Weather } from '../models/models';
import { ChangeEvent, useState } from 'react';
import placeholder from '../assets/placeholder.json';
import { CommandInteractionOptionResolver } from 'discord.js';

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
		console.log("parsedWeatherData", parsedWeatherData);
		options = parsedWeatherData.map((data: Weather, index: string) => {
			return (<option value={"weather" + index} key={index}>{data.location}: {data.days.length} dagar från {data.days[0].datetime}</option>);
		});
		if(!displayWeather) {
			setDisplayWeather(parsedWeatherData[0]);
		}
	} else {
		localStorage.setItem("weatherData", JSON.stringify(placeholder));
	}

	function getWeatherValue(e: ChangeEvent<HTMLSelectElement>) {
		const value = e.target.value.substring(7);
		if(weatherData) {
			const parsedWeatherData = JSON.parse(weatherData);
			setDisplayWeather(parsedWeatherData[value]);
		}
	}


	return (
			<section className="homepage views">
				<Header />
				<article className="views__wrapper">
					<p>Här är tidigare tidsperioder som du har sökt på: </p>
					<section className="select-wrapper">
						<select onChange={(e) => getWeatherValue(e)} className="select selectWeather">
							{options}
						</select>
						<input type="time" step={60000*60} onChange={ (e) => setDisplayHour(e.target.value) } value={displayHour} className="select selectTime"></input>
					</section>
					<Table displayWeather={displayWeather} displayHour={displayHour} />
				</article>
			</section>
	);
}

export default HomeView;
