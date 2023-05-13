import React from "react";
import "./CartWidget.css";
import cart from './assets/Carrito.svg'

/* const CartWidget = () => (
    <div className="cart-widget">
        <img src={cart} alt="carrito" />
        0
    </div>
);
export default CartWidget; */



export default function CartWidget() {
    return (
        <div className="cart-widget">
            <img src={cart} alt="carrito" />
            <li>0</li>
        </div>
    )
} 