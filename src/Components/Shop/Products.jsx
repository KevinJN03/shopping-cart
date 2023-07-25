import { styled } from "styled-components"
import ProductCard from "./ProductCard"
import product from "./product"
import { Outlet } from "react-router-dom"
import { useState, createContext } from "react";
const Products = () => {
    const [selectedItem, setSelectedItem] = useState(null)
return(
    <div id="product-grid">
    {product.map(item => {

        return( 
        <>
        <ProductCard key={item.id} id={item.id} name={item.name} price={item.price} image1={item.image1} />
        </>)
        
        
            
        
    })}

<Outlet />
    </div>
)
}



export default Products