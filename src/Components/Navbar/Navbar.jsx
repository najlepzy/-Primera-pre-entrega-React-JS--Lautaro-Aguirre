import { CartWidget } from "../CartWidget/CartWidget";
import "../CartWidget/CartWidget.css";

export const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <img src="../logo.png" className="logo"></img>
        <h1 className="Brand">Accent</h1>
        <ul className="nav-items">
          <li>
            <a href="/Celulares">Sofas</a>
            <a href="/Tablets">Tablets</a>
            <a href="/Ver todo">Ver todo</a>
          </li>
        </ul>

        <CartWidget />
      </div>
    </>
  );
};


