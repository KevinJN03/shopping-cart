import { Link } from "react-router-dom"
import {styled} from "styled-components"
const HeaderNav = () => {
    return (
        <section id="nav-section">
            <div className="header_nav">

            <Link className="link" to={"/shop"}>COLLECTION</Link>
            <Link className="link" to={"/shop"}>EYEGLASSES</Link>
            <Link className="link" to={"/shop"}>SUNGLASSES</Link>
            <Link className="link" to={"/about"}>ABOUT US</Link>
        </div>
        </section>
        
    )
}



export default HeaderNav