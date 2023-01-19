import{useState} from 'react'

export function ItemCount() {

  const [counter, setCounter] = useState(1)
  const handleAdd = () => {}
  const handleDelete = () => {}

  return(
    <div className="itemCount">
      
      <button onClick={handleAdd()}>+</button>
      <span>Cantidad 0</span>
      <button onClick={handleDelete()}>-</button>
    </div>
  )
}