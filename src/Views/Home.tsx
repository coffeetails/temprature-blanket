import React from 'react';
import Table from '../components/Table';
import Header from '../components/Header';

function Home() {

  return (
		<section className="homepage views">
			<Header />
			<article className="views__wrapper">
				<p>Hej, här är ett exempel på hur det kan se ut</p>
				<Table />
			</article>
		</section>
  );
}

export default Home;
