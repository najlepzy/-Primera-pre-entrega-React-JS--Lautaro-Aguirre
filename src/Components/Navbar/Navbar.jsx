import { CartWidget } from "../CartWidget/CartWidget";
import "../CartWidget/CartWidget.css";

export const Navbar = () => {
  return (
    <>
      <div className='NavContainer'>
        Celulares
        <div>Tablets</div>
        <div>Ver todo</div>
        <CartWidget />
      </div>
    </>
  );
};


