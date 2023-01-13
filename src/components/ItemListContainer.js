import { useEffect, useState } from "react" 
import { useParams } from "react-router-dom"
import { ItemList } from "./Itemlist"

export function ItemListContainer(props){

  const params = useParams()
  console.log(params.category)

  const [load, setLoad] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(()=>{
  
    fetch("https://api.sampleapis.com/coffee/hot")
    .then((respuesta)=> {
      const products = respuesta.json() 
      return products
    })
    .then((products)=>{
        console.log(products)
        setProducts(products)
        setLoad(true)
    })
    .catch((error)=>{
      console.log(error)
    })

  },[])
  
  return(
    <div className="itemListContainer">
      {load ? "Loaded Products" : "Load..."}
      <ItemList products={products} />
    </div>
  )
} 
   

