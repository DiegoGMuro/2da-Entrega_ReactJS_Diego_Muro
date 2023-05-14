import Item from "../Item/Item";

/* const ItemList = ({Ciudades}) => {
    return (
        <div className="ListaCiudades">
            {Ciudades.map(ciud => <Item key={ciud.id} {...ciud}/>)}
        </div>
    )
}

export default ItemList */


export default function ItemList ({Ciudades}) {
    return (
        <div className="ListaCiudades">
            {Ciudades.map(ciud => <Item key={ciud.id} {...ciud}/>)}
        </div>
    )
}

