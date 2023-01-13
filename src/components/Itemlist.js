import { Item } from "./Item"

export function ItemList({products}){
  return (
    <div className="itemList">
      {products.map((product)=>{
        return(
          <Item product={product} key={product.id}/>
        )
      })}
    </div>
  )
}
