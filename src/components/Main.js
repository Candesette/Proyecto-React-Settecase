import { ItemListContainer } from "./ItemListContainer";
import {Routes} from "react-router-dom" 
import {Route} from "react-router-dom"
import { ItemDetailContainer } from "./ItemDetailContainer";
import { Cart } from "./Cart";

export function Main(){
  return (
    <main> 
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Bienvenido a nuestro sitio"}/>}/>
        <Route path="category/:category" element={<ItemListContainer/>}/>        
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/contacto" element={<p>Contacto</p>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      
    </main>

  )
}