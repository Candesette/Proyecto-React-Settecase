import { useEffect, useState } from "react" 
import { useParams } from "react-router-dom"
import { ItemList } from "./Itemlist"

export function ItemListContainer(){

  const [load, setLoad] = useState(false)
  const [products, setProducts] = useState([])
  const {category} = useParams()

  useEffect(()=>{
    let url = "https://fakestoreapi.com/products"
    if (category) {
      url = url + "/category/" + category
    }
    fetch(url)
    .then((respuesta)=> {
      const products = respuesta.json() 
      return products
    })
    .then((products)=>{
      setProducts(products)
      setLoad(true)
    })
    .catch((error)=>{
      console.log(error)
    })

  },[category])
  
  return(
    <div className="itemListContainer">
      {load ? null : "Load..."}
      <ItemList products={products} />
    </div>
  )
} 
   

