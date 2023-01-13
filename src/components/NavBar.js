import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom";

export function NavBar(){
  return(
    <div className="navContainer">
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/category/:id">Categoría</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/item/:id">Item</Link>
        <Link to="/cart"><CartWidget/></Link>
      </nav>
      
    </div>
  )
}