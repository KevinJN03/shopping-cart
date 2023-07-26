import { Link } from "react-router-dom";
const EmptyCart = () => {
    return (
 <section id="empty-cart-wrapper" >
    <div id="cart-empty">
      <h2>
    YOUR CART IS LOOKING EMPTY
    </h2>
    <Link to={"/shop"} className="link">SHOP NOW</Link>  
    </div>
    
 </section>)
}

export default EmptyCart;