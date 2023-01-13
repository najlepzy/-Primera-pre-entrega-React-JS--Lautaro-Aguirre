import "./App.css";
import { useEffect, useState } from "react";
import "./Components/Navbar/Navbar.css";
import "./Components/ItemListContainer/ItemListContainer.css";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Categorias from "./Components/Dom/Categorias";
import Sillas from "./Components/Dom/Sillas";
import Sillones from "./Components/Dom/Sillones";
import Inicio from "./Components/Dom/Inicio";

function App() {
  const [products, setProducts] = useState([]);
  const [input,setInput] = useState('')

  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/search?q=Motorola%20G6")
      .then((response) => {
        return response.json();
      })
      .then((search) => {
        setProducts(search.results);
      });
  }, []);
  
  const handleOnSubmit = () => {
}

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ItemListContainer greeting="Bienvenidos a Accent" />
        <h1>Mercado libre</h1>
        <form onSubmit={handleOnSubmit}>
          <input value= {input} onChange={(e) => setInput(e.target.value)}  />
          <button type="submit">Search</button>
        </form>
        <div>
          {products.map((prod) => {
            return (
              <div key={prod.id}>
                <h2>{prod.title}</h2>
                <img src={prod.thumbnail} alt={prod.title} />
                <h3>{prod.price}</h3>
              </div>
            );
          })}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
