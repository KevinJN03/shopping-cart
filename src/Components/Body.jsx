import { Link, useParams } from "react-router-dom";
import "./View/body.css";
import { Outlet } from "react-router-dom";
import Shop from "./Shop/Shop";
import Home from "./Home/Home";
import product from "./Shop/product";
import SingleProduct from "./Shop/SingleProduct";
import ErrorPage from "./ErrorPage";
import { useEffect, useState, createContext, useContext } from "react";
import Header from "./Header/Header";
import Footer from "./Footer";
import Cart from "./Cart/Cart";
import About from "./About/About";


const Body = ({addToBasket, removeItem, updateItem}) => {
  
  const { name } = useParams();
  const { id } = useParams();


  let content;
  if (id) {
    content = <SingleProduct addToBasket={addToBasket}/>;
  } else if (name === "shop") {
    content = (<Shop/>);
  } 
  else if (name === "cart") {
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
    </main>
  
  )
};

export default Body;

// product.find(prod =>console.log("prod id",prod.id) )
