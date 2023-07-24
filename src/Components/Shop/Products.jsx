import { styled } from "styled-components"
import ProductCard from "./ProductCard"
import product from "./product"


const Products = () => {
return(
    <div id="product-grid">
    {product.map(item => {

        return( 
        <>
        <ProductCard key={item.id} id={item.id} name={item.name} price={item.price} image1={item.image1}/>
        </>)
        
        
            
        
    })}


    </div>
)
}



export default Products