
import { styled } from "styled-components"
import image from "../assets/img/jed-villejo-xkeLHL5suF0-unsplash.jpg"
import "./View/body.css"
const Body = () => {
return (
    <main id="main">
        <div id="image-wrapper">
            <img src={image}></img> 
            <button type="button" id="shop-now-btn">Shop Now</button>
        </div>
        
    </main>
)
}

export default Body