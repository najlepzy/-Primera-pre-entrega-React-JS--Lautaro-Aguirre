import { CartWidget } from "../CartWidget/CartWidget";
import "../CartWidget/CartWidget.css";

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <img src="../logo.png" className="logo"></img>
        <a href="/Category/Inicio"><h1 className="Brand">Accent</h1></a>
        <ul className="nav-items">
          <li>
            <a href="/Category/Inicio">Inicio</a>
            <a href="/Category/Sillones">Sillones</a>
            <a href="/Category/Sillas">Sillas</a>
            <a href="/Category/Categorias">Categorias</a>
          </li>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};

export default Navbar;
