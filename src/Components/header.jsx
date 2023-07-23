import blackLogo from "../assets/ug logo/urbangaze-logo.svg"
import "./View/header.css"
import HeaderNav from "./header-nav"
const Header = () => {
    return(
        <header className="header">

            <section className="header_main">
            <div className="img-wrapper header-logo-wrapper">
        <img src={blackLogo} alt="UrbanGaze Logo in black"></img>
            </div>
            </section>
            <HeaderNav/>
        </header>
    )
}





export default Header