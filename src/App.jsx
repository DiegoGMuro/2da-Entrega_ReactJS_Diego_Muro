import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import Carrusel from "./components/Carrusel/Carrusel";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartWidget from "./components/CartWidget/CartWidget";
import FooterPag from "./components/FooterPag/FooterPag";


function App() {
  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos a viajar por el mundo!!'} />
      <Carrusel />
      <br />
      <div className="foto">
        <img src="src/assets/Amsterdam.jpg" alt="amsterdam" />
        <h5 className="colorletra">Amsterdam - ARS 550.000</h5>
        <img src="src/assets/barcelona2.jpg" alt="barcelona" />
        <h5 className="colorletra">Barcelona - ARS 600.000</h5>
        <img src="src/assets/berlin1.jpg" alt="berlin" />
        <h5 className="colorletra">Berlin - ARS 650.000</h5>
        <img src="src/assets/londres4.jpg" alt="londres" />
        <h5 className="colorletra">Londres - ARS 750.000</h5>
        <img src="src/assets/paris2.jpg" alt="paris" />
        <h5 className="colorletra">Paris - ARS 500.000</h5>
        <img src="src/assets/roma1.jpg" alt="roma" />
        <h5 className="colorletra">Roma - ARS 450.000</h5>
      </div>
      <FooterPag/>

    </div>
  );
}

export default App;
