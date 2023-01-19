import { ItemCount } from "./ItemCount"


export function ItemDetail({product}) {
  
  const onAdd = (parametro) => {console.log(parametro)}
  
  return(
    <div className="itemDetail">
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <img src={product.image} alt={product.title} className="itemImg"/>
      <ItemCount onAdd={onAdd}/>
    </div> 

  )
}



