
import { Link, useParams } from "react-router-dom"
import "./View/body.css"
import { Outlet } from "react-router-dom";
import Shop from "./Shop/Shop";
import Home from "./Home";
import product from "./Shop/product";
import SingleProduct from "./Shop/SingleProduct";
import ErrorPage from "./ErrorPage";
import { useEffect, useState } from "react";
import Header from "./Header/header";
import Footer from "./Footer";
const Body = () => {
    const{ name}  = useParams();
    const {id} = useParams();
    const {selected, setSelected} = useState(0)
    useEffect(()=> {
//     setSelected(id)
//     console.log("id: ", id)
console.log("selected: ", selected)
    })


useEffect(()=> {
   console.log("using useEffect")
})
    return (
        <main id="main">
            <Header/>
           {
            
        //    id ===   ? (
        //     //console.log("id:", id)
        //         <SingleProduct />
        //    ):
           name === "shop" ? (
            <Shop/>
           ):   
           (<Home/>)
           
           
           
           }
           <Footer/>
            <Outlet/>
        </main>
    )
}

export default Body

// product.find(prod =>console.log("prod id",prod.id) ) 