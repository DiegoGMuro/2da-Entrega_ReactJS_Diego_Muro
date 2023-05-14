import "./ItemDetailContainer.css";
import React, { useState, useEffect } from "react";
import { getCiudadById } from "../../data/Ciudades";
import ItemDetail from "../ItemDetail/ItemDetail";


export default function ItemDetailContainer() {
    const [Ciudades, setCiudades] = useState(null)

    useEffect(() => {
        getCiudadById(14)
            .then(response => {
                setCiudades(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...Ciudades}/>
        </div>
    )
}

