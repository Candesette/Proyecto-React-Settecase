export function ItemListContainer(props){
  return(
    <div className="listContainer">
      <p className="listContainerText">
        {props.message}
      </p>
    </div>
  )
}