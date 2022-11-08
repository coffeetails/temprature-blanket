import Table from '../components/Table';
import Header from '../components/Header';
import { Weather } from '../models/models';
import { TextInputStyle } from 'discord.js';
import { ChangeEvent, useEffect } from 'react';

interface Props {
	displayWeather: Weather | null;
	setDisplayWeather: (displayWeather: Weather | null) => void;
}

function HomeView({displayWeather, setDisplayWeather}: Props) {
	let options = <option>Inga val tillgängliga, gör en sökning</option>;
	const weatherData = localStorage.getItem("weatherData");
	
	if(weatherData) {
		const parsedWeatherData = JSON.parse(weatherData);
		options = parsedWeatherData.map((data: Weather, index: string) => {
			return (<option value={"weather" + index}>{data.location}: {data.days.length}dagar, {data.days[0].datetime}</option>);
		});
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
					<select onChange={(e) => getWeatherValue(e)}>
						{options}
					</select>
					<Table displayWeather={displayWeather} setDisplayWeather={setDisplayWeather} />
				</article>
			</section>
	);
}

export default HomeView;
