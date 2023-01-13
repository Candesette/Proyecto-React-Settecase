

export function Cart (){
  const handleClick =(e)=>{
    console.log(e.target.value)
  }
  const handleChange = (e)=>{
    console.log(e.target.value)
  }
  return(
    <div>
      <h1>Carrito de compras</h1>
      <input type="text" onChange={handleChange}/>
      <button onClick={handleClick}>terminar compra</button>
    </div>
  )
}