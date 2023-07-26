import { Link, useParams } from "react-router-dom";
import "./View/body.css";
import { Outlet } from "react-router-dom";
import Shop from "./Shop/Shop";
import Home from "./Home/Home";
import SingleProduct from "./Shop/SingleProduct";
import ErrorPage from "./ErrorPage/ErrorPage";
import { useEffect, useState,useContext } from "react";
import Cart from "./Cart/Cart";
import About from "./About/About";
import { CartContext } from "../App";
import EmptyCart from "./Cart/EmptyCart";


const Body = ({addToBasket, removeItem, updateItem}) => {

  
  
  const { name } = useParams();
  const { id } = useParams();
const {cart} = useContext(CartContext)

  let content;
  if (id) {
    content = <SingleProduct addToBasket={addToBasket}/>;
  } else if (name === "shop") {
    content = (<Shop/>);
  } else if (name === "cart" && cart.length <= 0) {
    content = (<EmptyCart/>);
  }
  else if (name === "cart" && cart.length > 0) {
    content = (<Cart removeItem={removeItem} updateItem={updateItem}/>);
  } else if (name ==="about"){
    content = (<About/>)
  }
  else if (name == "home" || name === undefined) {
    
    content = (<Home />);
  } else{
    console.log("name: ", name)
    content = (<ErrorPage/>)
  }
  
  return( 

      <main id="main">
    {content}
    <Outlet/>
    </main>
  
  )
};

export default Body;
