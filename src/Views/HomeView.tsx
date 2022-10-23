import Table from '../components/Table';
import Header from '../components/Header';
import { Weather } from '../models/models';

interface Props {
	displayWeather: Weather | null;
}

function HomeView({displayWeather}: Props) {

  return (
		<section className="homepage views">
			<Header />
			<article className="views__wrapper">
				<p>Hej, här är ett exempel på hur det kan se ut</p>
				<Table displayWeather={displayWeather} />
			</article>
		</section>
  );
}

export default HomeView;
