import Item from "../Item/Item";

const ItemList = ({Ciudades}) => {
    return (
        <div className="ListaCiudades">
            {Ciudades.map(producto => <Item key={producto.id} {...producto}/>)}
        </div>
    )
}

export default ItemList