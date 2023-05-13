import React from "react";
import "./ItemListContainer.css";

/* const ItemListContainer = ({ greeting }) => (
    <div>
        <h1>
            {greeting}
        </h1>
    </div>

);

export default ItemListContainer; */



export default function ItemListContainer({ greeting }) {
    return (
        <div>
            <h1>{greeting}
            </h1>
        </div>
    )
}