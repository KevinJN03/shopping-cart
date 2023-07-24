
import { Link } from "react-router-dom"
import image from "../assets/img/jed-villejo-xkeLHL5suF0-unsplash.jpg"
import "./View/body.css"
const Home = () => {
    return (
        <>
        <div id="image-wrapper">
            <img src={image}></img> 
            <Link to="/shop"><button type="button" id="shop-now-btn">Shop Now</button></Link>
        </div>
        </>

    )
}

export default Home;