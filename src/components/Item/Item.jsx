import React from "react";
import './Item.css';

export default function Item({ id, nombre, pais, moneda, precioPasaje, imagen }) {

    return (
        <div className="CardItem">
            <div className="FichaCiudad">
                <h2 className="Nombre">
                    Ciudad: {nombre}
                </h2>
                <h4 className="Pais">
                    Pais: {pais}
                </h4>
                <div className="item-card_img">
                    <img src={imagen} alt={nombre} className="ItemImg" />
                </div>
                <section>
                    <p className="Moneda">
                        Moneda: {moneda}
                    </p>
                    <p className="PrecioPasaje">
                        Precio Pasaje: {precioPasaje}
                    </p>
                </section>
                <section className="Detalle">
                    <button className="Option"> Ver detalle</button>
                </section>
            </div>
        </div>
    )

}