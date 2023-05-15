import Item from "../Item/Item";
import LayOut from "../LayOut/LayOut"; 

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
            <LayOut title= " Destinos">
            {Ciudades.map(ciud => <Item key={ciud.id} {...ciud}/>)}
            </LayOut>
        </div>
    )
}

