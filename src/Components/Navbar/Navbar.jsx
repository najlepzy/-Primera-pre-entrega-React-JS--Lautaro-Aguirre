import { CartWidget } from "../CartWidget/CartWidget";
import "../CartWidget/CartWidget.css";

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <img src="../logo.png" className="logo"></img>
        <h1 className="Brand">Accent</h1>
        <ul className="nav-items">
          <li>
            <a href="/Inicio">Inicio</a>
            <a href="/Sillones">Sillones</a>
            <a href="/Sillas">Sillas</a>
            <a href="/Categorias">Categorias</a>
          </li>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};

export default Navbar

