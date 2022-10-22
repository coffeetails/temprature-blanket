import './about.scss';

import React from 'react';
import Header from '../components/Header';


function About() {

  return (
		<section className="homepage views">
			<Header />
      <h1>Om projektet</h1>
			<article className="views__wrapper about">
        <h2>Bakgrund</h2>
				<p>Som många andra så började jag med handarbete under pandemin 2020-2022. Jag började virka så smått. Faktiskt så upptäckte jag att det är väldigt skönt att virka medans jag programmerar.</p>
        <p>En av många projekt som jag stötte på var temperaturfiltar då man varje dag vid en bestämd tidpunkt kollar vad tempraturen är (oftast där man bor) och låter tempraturen bestämma vilken färg nästa rad på filten ska ha.</p>
        <p>Så man har i förväg bestämt vilka färger som ska vara för olika tempraturintervaller. I slutet på året får man en randig filt som visar årets tempraturer.</p>
      </article>

      <article className="views__wrapper about">
        <h2>Design processen</h2>
        <h3>Empathize</h3>
        <p>Målgruppen är personer som virkar. Sedan pandemin så har åldersspannet bland dom som virkar blivit bredare och jag tror även att målgruppens fördelning av  könsidentiteter har blivit jämnare.</p>
        <p>För att lära mig mera om målgruppen så tänker jag att ett frågeformulär vore passande. Jag är med i en facebook grupp som heter <a href="https://www.facebook.com/groups/virkamera">Virka mera</a> med lite över 41 tusen medlemmar. </p>

        <section className="researchQuestion">
          <h4>Litet frågeformulär om tempraturfiltar</h4>
          <ul>
            <li>Huvudsaklig sysselsättning:</li>
            <li>Könsidentitet:</li>
            <li>Ålder:</li>
            <li>Hur länge har du virkat?</li>
            <li>Har du tidigare gjort en temperaturfilt?</li>
            <li>Vad har hindrat dig i att göra en tempraturfilt? (varesig du faktiskt gjort en eller inte)</li>
          </ul>
        </section>
        <h4>User stories</h4>
        <ul>
          <li>Som *användare* vill jag ... för att ...</li>
        </ul>

        <h3>Define</h3>
        <p>Varför behövs denna guiden? För att ...</p>
        <p>Varför ... ? För att ...</p>
        <p>Varför ... ? För att ...</p>
        <p>Varför ... ? För att ...</p>
        <p>Varför ... ? För att ...</p>
        <h3>Ideate</h3>
        <p>Hitta på idéer för hur problemet ska lösas med brainwriting, mind map och brainstorming.</p>
        <h3>Prototype</h3>
        <p>Dags att skissa fram idéer</p>
        <h3>Test</h3>
        <p>Testa prototypen för att få värdefull feedback.</p>
			</article>

      <article className="views__wrapper about">
        <h2>Tekniker och metoder</h2>
        <ul>
          <li>Javascript</li>
          <li>SASS</li>
          <li>React</li>
          <li>React-router</li>
          <li>Redux</li>
          <li></li>
        </ul>
      </article>
    </section>
  );
}

export default About;
