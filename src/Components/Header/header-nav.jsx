import { Link } from "react-router-dom"
import {styled} from "styled-components"
const HeaderNav = () => {
    return (
        <section id="nav-section">
            <div className="header_nav">
            <p>COLLECTION</p>
            <p>EYEGLASSES</p>
            <p>SUNGLASSES</p>
            <Link to={"/about"}>
            <p>ABOUT US</p>
            </Link>
        </div>
        </section>
        
    )
}



export default HeaderNav