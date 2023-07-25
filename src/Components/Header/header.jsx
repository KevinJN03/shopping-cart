import blackLogo from "../../assets/ug logo/urbangaze-logo.svg"
import "../View/header.css"
import HeaderNav from "./header-nav";
import { Link } from "react-router-dom";
const Header = () => {
    return(
        <header className="header">

            <section className="header_main">
            <div className="img-wrapper header-logo-wrapper">
        <Link to="/"><img src={blackLogo} alt="UrbanGaze Logo in black"></img></Link>
            </div>
            </section>
            <HeaderNav/>
        </header>
    )
}





export default Header