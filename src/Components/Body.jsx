import { Link, useParams } from "react-router-dom";
import "./View/body.css";
import { Outlet } from "react-router-dom";
import Shop from "./Shop/Shop";
import Home from "./Home";
import product from "./Shop/product";
import SingleProduct from "./Shop/SingleProduct";
import ErrorPage from "./ErrorPage";
import { useEffect, useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer";
const Body = () => {
  const { name } = useParams();
  const { id } = useParams();
  let content;

  if (id) {
    content = <SingleProduct />;
  } else if (name === "shop") {
    content = <Shop />;
  } else {
    content = <Home />;
  }
  return <main id="main">{content}</main>;
};

export default Body;

// product.find(prod =>console.log("prod id",prod.id) )
