import{useEffect, useState} from 'react'
import{ItemDetail} from './ItemDetail'
import { useParams } from 'react-router-dom'

export function ItemDetailContainer() { 
    const [product, setProduct] = useState([])
    const {id} = useParams()
   
    useEffect(() => {
      fetch("https://fakestoreapi.com/products/" + id)
      .then((response) => response.json())
      .then((product) => setProduct(product))
      .catch((error) => {
        console.log(error)
      })
    }, [])
    
    return (
      <ItemDetail product={product}/>
    )
}
