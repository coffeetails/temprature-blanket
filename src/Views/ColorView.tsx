import Header from '../components/Header';
import yarn from '../assets/yarn.png';
import { SliderPicker } from "@hello-pangea/color-picker";


function ColorView() {
    return (
        <section className="colorpage views">
            <Header />
            <article className="views__wrapper">
                <p>Välj färg: </p>
                <SliderPicker />
                <p>Namn på garnet: </p>
                <input type="text"></input>
                <p>Välj temperatur: </p>
                <p>0C - +5C</p>
                <button>+ Lägg till färg</button>
                <p>Röd</p>
                <p>Grön</p>
                <p>Blå</p>
                <p>Gul</p>
                <p>Orange</p>
                <p>Lila</p>
            </article>
			<img src={yarn} className="yarn" />
        </section>
    );
}
    
    export default ColorView;