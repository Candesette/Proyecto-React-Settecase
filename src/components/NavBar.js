import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom";

export function NavBar() {
  return(
    <div className="navContainer">
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/category/men's clothing">Ropa de hombre</Link>
        <Link to="/category/jewelery">Joyeria</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/cart"><CartWidget/></Link>
      </nav>
    </div>
  )
}