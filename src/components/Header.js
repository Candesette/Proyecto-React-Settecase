import { NavBar } from "./NavBar"
import { Link } from "react-router-dom"
export function Header() {
  return (
    <header>
      <Link to="/" className="titleLink">
        <h1>Café de Especialidad</h1>
      </Link>
      
      <NavBar />
    </header>
  )
}