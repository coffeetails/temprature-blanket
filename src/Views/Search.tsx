import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';

function Search() {

  return (
		<section className="searchpage views">
			<Header />

			<article className="views__wrapper">
				<p>Gör en sökning nedan för att få fram tidigare temperaturer på din valda plats. Om du vill hämta mycket väderdata så kan du skapa din egna nyckel hos <a href="https://www.visualcrossing.com/weather/weather-data-services">visualcrossing.com</a></p>
				<details>
					<summary>Läs mer</summary>
					<p>https://www.visualcrossing.com/</p>
					<p>Visual Crossing Weather is the easiest-to-use and lowest-cost source for historical and forecast weather data. Our weather API is designed to integrate easily into any app or code, and our prices are lower than any other provider in the industry.</p>
				</details>

				<br /> {/* booo! I'm lazy */}

				<Form />
			</article>
		</section>
  );
}

export default Search;
