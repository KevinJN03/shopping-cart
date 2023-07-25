import blackLogo from "../../assets/logo/urbangaze-logo.svg";
import shoppingBag from "../../assets/logo/shopping-bag.png"
import "../View/header.css";
import HeaderNav from "./header-nav";
import { Link, Outlet } from "react-router-dom";
import { CartContext } from "../../App";
import { styled } from "styled-components";
import { useContext } from "react";
const Header = () => {
  const {cart} = useContext(CartContext)

  
  return (
    <header className="header">
      <section className="header_main">
        <div className="img-wrapper header-logo-wrapper">
          <Link to="/">
            <img src={blackLogo} alt="UrbanGaze Logo in black"></img>
          </Link>
        </div>
        <div id="icon-container">
          <Link to="/cart">
          <button style={{width: "40px", height: "40px", background: "transparent", border: "none"}}>
            <img src={shoppingBag} alt="shopping bag" style={{width: "100%", height: "100%"}}></img>
            
          </button>
          
           </Link><CartAmount >{cart.length}</CartAmount>
        </div>
        
      </section>
      <HeaderNav />
      <Outlet />
    </header>
  );
};

const CartAmount = styled.div`
border-radius: 50%;
width: 25px;
height: 25px;
z-index: 1;
background-color: black;
text-align: center;
color: white;
position: relative;
top: 10%;
right: 30%;

`

export default Header;
