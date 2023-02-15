import './aboutView.scss';

import Header from '../components/Header';
import yarn from '../assets/yarn.png';

function AboutView() {

  return (
		<section className="aboutpage views">
		<Header />
        <h1>Om projektet</h1>
        <article className="views__wrapper">
            <h2>Bakgrund</h2>
            <p>Som många andra så började jag med handarbete under pandemin 2020-2022. Jag började virka så smått. Senare upptäckte jag att det är väldigt skönt att virka medans jag programmerar.</p>
            <p>En av många projekt som jag stötte på var <span className="italic">temperaturfiltar</span> då man varje dag vid en bestämd tidpunkt kollar vad temperaturen är (oftast där man bor) och låter temperaturen bestämma vilken färg nästa rad på filten ska ha. Så man har i förväg bestämt vilka färger som ska vara för olika temperaturintervaller. I slutet på året får man en randig filt som visar årets temperaturer.</p>
        </article>

        <article className="views__wrapper howIveWorkedText">
            <div className="floatie">
                <h2>Techstacken</h2>
                <ul>
                    <li>Typecript</li>
                    <li>SASS</li>
                    <li>Vite</li>
                    <li>React Router</li>
                    <li>React Snap</li>
                    <li>Hämtar väderdata från <br/><a href="https://www.visualcrossing.com/weather/weather-data-services">visualcrossing</a> genom REST</li>
                </ul>
            </div>
            <h2 className="howIveWorkedTitle">Hur jag har arbetat</h2>
            <p>Jag började på det här projektet innan sommaren 2022 och <span className="italic">vi har lärt oss mycket</span> sedan dess, så jag har börjat om 2 gånger. Första gången var för att jag hade med redux, vilket jag sedan kom på kändes väldigt överflödigt men jag lyckades inte få bort det helt så jag tog bort repot och började om. Andra gången var för att vi nu på hösten hade lärt oss om Vite, så jag ville hellre använda det istället för bara React, så att säga.</p>
            <p>Det första jag började med var att få upp tabellen och visa datan på ett hyffsat bra sätt. Sedan hoppa jag över till sökningen där man hämtar ny data med ett API ifrån <a href="https://www.visualcrossing.com/weather/weather-data-services">visualcrossing</a>. Jag sparar datan i localstorage.</p>
            <p>Medans jag jobbade på att kunna välja data att visa i tabellen så insåg jag hur mycket onödig data jag sparar eftersom jag sparade <span className="italic">all data</span> från APIet, utan att användas. Så då skapa jag funktioner för att raffinera datan och bara ha med det jag faktiskt behöver.</p>
            <p>Jag får tillslut ihop tabellen med localstorage, jag lyckas med att uppdatera datan i tabellen och boolean värdena i localstorage för om dagen/tiden är avbockad eller inte.</p>
            <p>Efter mycket tangentsmatter, kaffe, googlande och hjälp från både klasskamrater och lärare så blev jag tillslut klar med första versionen av <span className="bold">Temperaturfilt Guiden</span>. Är den perfekt? Absolut inte. Fungerar den? Ja!</p>
            <a href="https://github.com/MonBjo/temprature-blanket">Github repo</a>
        </article>
        <img src={yarn} className="yarn" />
    </section>
  );
}

export default AboutView;
