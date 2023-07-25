import "../View/cart.css"
import CardItem from "./cardItem"
import Total from "./Total"
import { useContext } from "react"

import { CartContext } from "../../App"
import { Link } from "react-router-dom"
import CardHeader from "./CardHeader"

const Cart = ({removeItem, updateItem}) => {
    const {cart} = useContext(CartContext)

    const subTotal = ()=>{
        let x = 0;
        cart.forEach(item => {
            x += (item.price * item.quantity);
            
        });

        return x
    }
    return (
        <section className="cart">
            {console.log("value from context", cart)}
            <h2>Your Cart</h2>
            <CardHeader/>
            {cart.map(item=> {
                return(
                  
                    <CardItem id={item.id} image1={item.image1} price={item.price} quantity={item.quantity} removeItem={removeItem} updateItem={updateItem}/> 
                    
                )
            })}
           
            <Total total={subTotal()}></Total>

        </section>
    )
}

export default Cart