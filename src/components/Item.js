import{Link} from "react-router-dom";

export function Item ({product}) {
  return(
    <article key={product.id} className="item">
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} className="itemImg"/>
      <Link to={"/item/" + product.id}>Ver mas</Link>
    </article> 
  )
}
