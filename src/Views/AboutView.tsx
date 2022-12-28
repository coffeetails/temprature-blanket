import './aboutView.scss';

import Header from '../components/Header';
import icons from '../assets/fakePostFB/icons.png'
import profile from '../assets/fakePostFB/profile.jpg'
import concept1 from '../assets/fakePostFB/concept1.png'
import concept2 from '../assets/fakePostFB/concept2.png'
import yarn from '../assets/yarn.png';

function AboutView() {

  return (
		<section className="homepage views">
		<Header />
        <h1>Om projektet</h1>
        <article className="views__wrapper">
            <h2>Bakgrund</h2>
            <p>Som många andra så började jag med handarbete under pandemin 2020-2022. Jag började virka så smått. Senare upptäckte jag att det är väldigt skönt att virka medans jag programmerar.</p>
            <p>En av många projekt som jag stötte på var <span className="italic">temperaturfiltar</span> då man varje dag vid en bestämd tidpunkt kollar vad tempraturen är (oftast där man bor) och låter tempraturen bestämma vilken färg nästa rad på filten ska ha. Så man har i förväg bestämt vilka färger som ska vara för olika tempraturintervaller. I slutet på året får man en randig filt som visar årets tempraturer.</p>
        </article>

        {/* <article className="views__wrapper"> */}
            {/* <h2>Design processen</h2> */}
            {/* <h3>Empathize</h3> */}
            {/* <p>Målgruppen är personer som virkar. Sedan pandemin så har åldersspannet bland dom som virkar blivit bredare och jag tror även att målgruppens fördelning av  könsidentiteter har blivit jämnare.</p> */}
            {/* <p>För att lära mig mera om målgruppen så tänker jag att ett frågeformulär vore passande. Jag är med i en facebook grupp som heter <a href="https://www.facebook.com/groups/virkamera">Virka mera</a> med lite över 41 tusen medlemmar. </p> */}

            {/* <article className="facebook-post">
                <header className="post-header">
                    <img src={profile} />
                    <section>
                    <p>Monica Björk</p>
                    <p>23 oktober 2022</p>
                    </section>
                </header>

                <h2>🧶🧶HEJSAN ALLA VIRKGLADA! HAR DU GJORT ELLER FUNDERAR PÅ ATT GÖRA EN TEMPERATURFILT? 🥶🌡️🥵</h2>
                <p>Jag har börjat knåpa ihop <span className="italic">en webbsida för att får hjälp med att göra sin temperaturfilt</span>! Tanken är att man ska kunna söka på plats och klockslag för att sedan få tillbaka en tabell med temperaturer🌡️ ett visst antal dagar tillbaka, t.ex. en vecka eller en månad. (jag bifogar bilder för förtydligande.)</p>
                <p>För att denna sidan ska bli så bra som möjligt så behöver jag ha <span className="italic">eran hjälp</span> att fylla i ett litet frågeformulär! (Jag har fått <span className="bold">ok</span> från admin!)</p>
                <ul>
                    <li>Huvudsaklig sysselsättning:</li>
                    <li>Könsidentitet:</li>
                    <li>Ålder:</li>
                    <li>Hur länge har du virkat?:</li>
                    <li>Har du tidigare gjort en temperaturfilt?:</li>
                    <li>Vad har hindrat dig i att göra en tempraturfilt? (varesig du faktiskt gjort en eller inte):</li>
                    <li>Vad för funktioner skulle du vilja se på den här webbsidan?:</li>
                </ul>
                <p>Du väljer själv om du vill svara i en kommentar nedan eller om du vill skriva till mig privat.</p>
                <p>Om något känns otydligt så är det bara att fråga 😊</p>
                
                <section className="postImages">
                    <img src={concept1} /> 
                    <img src={concept2} /> 
                </section>

                <a href="https://www.facebook.com/groups/virkamera/permalink/5681876648501478/">&nbsp; _ &nbsp; &nbsp; Länk till det faktiska inlägget på facebook &nbsp; &nbsp; _ &nbsp;</a>

                <footer className="post-footer">
                    <section className="interact-section">
                        <section>
                            <img src={icons} className="like" />
                            <p>Gilla</p>
                        </section>

                        <section>
                            <img src={icons} className="comment" />
                            <p>Kommentera</p>
                        </section>

                        <section>
                            <img src={icons} className="messenger" />
                            <p>Skicka</p>
                        </section>
                    </section>

                    <section className="comment-section">
                        <section>
                            <p>Skriv en kommentar...</p>
                        </section>
                    </section>
                </footer>

            </article> */}

            {/* <h4>User stories</h4>
            <ul>
                <li>Som användare vill jag kunna se tidigare tempraturer för att jag ibland missar att kolla tempraturen vid rätt klockslag varje dag.</li>
                <li>Som användare vill jag kunna checka av tidigare tempraturer för att jag ibland missar att kolla tempraturen vid rätt klockslag varje dag.</li>
            </ul>

            <h3>Define</h3>
            <p>Varför behövs denna guiden? För att se tidigare tempraturer</p>
            <p>Varför vill man se tidigare tempraturer ? För att man inte alltid minns</p>
            <p>Varför ... ? För att ...</p>
            <p>Varför ... ? För att ...</p>
            <p>Varför ... ? För att ...</p>
            <h3>Ideate</h3>
            <p>Hitta på idéer för hur problemet ska lösas med brainwriting, mind map och brainstorming.</p>
            <h3>Prototype</h3>
            <p>Dags att skissa fram idéer</p>
            <h3>Test</h3>
            <p>Testa prototypen för att få värdefull feedback.</p> */}
		{/* </article> */}

        <article className="views__wrapper wrapper__columns">
            <div className="floatie">
                <h2>Användna bibliotek</h2>
                <ul>
                    <li>Typecript</li>
                    <li>SASS</li>
                    <li>Vite</li>
                    <li>React Router</li>
                </ul>
            </div>
            <h2>Hur jag har arbetat</h2>
            <p>Jag började på det här projektet innan sommaren 2022 och <span className="italic">vi har lärt oss mycket</span> sedan dess, så jag har börjat om 2 gånger sedan dess. Första gången var för att jag hade med redux, vilket jag sedan kom på kändes väldigt överflödigt men jag lyckades inte få bort det helt så jag tog bort repot och började om. Andra gången var för att vi nu på hösten hade lärt oss om Vite, så jag ville hellre använda det istället för bara React, så att säga.</p>
            <p>Det första jag började med var att få upp tabellen och visa datan på ett hyffsat bra sätt. Sedan hoppa jag över till sökningen där man hämtar ny data med ett API ifrån <a href="https://www.visualcrossing.com/weather/weather-data-services">visualcrossing.com</a>. Jag sparar datan i localstorage.</p>
            <p>Medans jag jobbade på att kunna välja data att visa i tabellen så insåg jag hur mycket onödig data jag sparar eftersom jag sparade <span className="italic">all data</span> från APIet, utan att användas. Så då skapa jag funktioner för att raffinera datan och bara ha med det jag faktiskt behöver.</p>
            <p>Jag får tillslut ihop tabellen med localstorage, jag lyckas med att uppdatera datan i tabellen och boolean värdena i localstorage för om dagen/tiden är avbockad eller inte.</p>
            <p>Efter mycket tangentsmatter, kaffe, googlande och hjälp från både klasskamrater och lärare så blev jag tillslut klar med första versionen av <span className="bold">Temperaturfilt Guiden</span>. Är den perfekt? Absolut inte. Fungerar den? Ja!</p>
        </article>
        <img src={yarn} className="yarn" />
    </section>
  );
}

export default AboutView;
