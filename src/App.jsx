import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import Carrusel from "./components/Carrusel/Carrusel";
import ItemCount from "./components/ItemCount/ItemCount";
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
      <ItemCount initial={1} stock={5} onAdd={(quantity) => console.log("cantidad agregada", quantity)} />
      <br />
{/*       <div className="foto">
        
      </div > */}
      <FooterPag />
    </div>
  );
}

export default App;
