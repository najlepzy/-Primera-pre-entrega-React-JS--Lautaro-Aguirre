import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const CartWidget = () => {
  return (
    <>
      <FontAwesomeIcon className="CartWidget" icon={faCartShopping} />
      <p className="CartNumber">0</p>
    </>
  );
};
