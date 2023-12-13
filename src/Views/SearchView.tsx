import Header from '../components/Header';
import Form from '../components/Form';
import { Weather } from '../models/models';
import yarn from '../assets/yarn.png';

interface Props {
	setDisplayWeather: (displayWeather: Weather | null) => void;
	firestore: any;
}

function SearchView({setDisplayWeather, firestore}: Props) {

  return (
		<section className="searchpage views">
			<Header />

			<article className="views__wrapper">
				<p>Gör en sökning nedan för att få fram tidigare temperaturer på din valda plats.</p>

				<Form setDisplayWeather={setDisplayWeather} firestore={firestore} />
			</article>
			<img src={yarn} className="yarn" />
		</section>
  );
}

export default SearchView;
