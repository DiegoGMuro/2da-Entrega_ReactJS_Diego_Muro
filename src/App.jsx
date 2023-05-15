import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Carrusel from "./components/Carrusel/Carrusel";
/* import ItemCount from "./components/ItemCount/ItemCount"; */
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
/* import CartWidget from "./components/CartWidget/CartWidget"; */
import FooterPag from "./components/FooterPag/FooterPag";




function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='./' element={<ItemListContainer />} />
          <Route path='./continente/:continenteId' element={<ItemListContainer />} />
          <Route path='./Item/:itemId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
          
          <ItemListContainer greeting={'Bienvenidos a viajar por el mundo!!'} />
          <ItemDetailContainer />

          </BrowserRouter>

      <br />
      <Carrusel />
      <br />
      {/*       <ItemCount initial={1} stock={5} onAdd={(quantity) => console.log("cantidad agregada", quantity)} /> */}
      <br />
      {/*       <div className="foto">
        
      </div > */}
      <FooterPag />
    </div>
  );
}

export default App;
