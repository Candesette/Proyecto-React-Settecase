import { CartWidget } from "./CartWidget";


export function NavBar(){
  return(
    <div className="navContainer">
      <nav>
        <a href="">Inicio</a>
        <a href="">Sobre Nosotros</a>
        <a href="">Contacto</a>
      </nav>
      <CartWidget />
    </div>
  )
}