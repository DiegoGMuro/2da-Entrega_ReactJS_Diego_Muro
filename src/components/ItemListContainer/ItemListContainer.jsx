import React, { useState, useEffect } from "react";
import {getCiudades} from "../../data/Ciudades";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";


/* const ItemListContainer = ({ greeting }) => (
    <div>
        <h1>
            {greeting}
        </h1>
    </div>

);

export default ItemListContainer; */



export default function ItemListContainer({ greeting }) {
    const [Ciudades, setCiudades] = useState([]);

    useEffect(() => {
        getCiudades()
        .then(response =>{
            setCiudades(response)
        })
        .catch(error =>{
            console.error(error)
        })
    }, [])

    return (
        <div>
            <div><h1>{greeting}</h1></div>
            <div>
            <ItemList Ciudades={Ciudades}/>
            </div>
        </div>
    )
}