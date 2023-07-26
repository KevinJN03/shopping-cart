import blackLogo from "../../assets/logo/urbangaze-logo.png";
import shoppingBag from "../../assets/logo/shopping-bag.png";
import "../View/header.css";
import HeaderNav from "./Header-nav";
import { Link, Outlet } from "react-router-dom";
import { CartContext } from "../../App";
import { styled } from "styled-components";
import { useContext } from "react";
const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <header className="header">
      <section className="header_main">
        <div className="img-wrapper header-logo-wrapper">
          <Link to="/">
            <img
              id="header-img"
              src={blackLogo}
              alt="UrbanGaze Logo in black"
            ></img>
          </Link>
        </div>
        <Link to="/cart" id="icon-container" className="link">
          <div
          id="basket-container"
          >
            <img
              src={shoppingBag}
              alt="shopping bag"
              style={{ width: "100%", height: "100%" }}
            ></img>
          </div>

          <CartAmount>{cart.length}</CartAmount>
        </Link>
      </section>
      <HeaderNav />
      <Outlet />
    </header>
  );
};

const CartAmount = styled.div`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  z-index: 1;
  background-color: black;
  text-align: center;
  color: white;
  position: relative;
  top: 10%;
  right: 30%;
  transition: transform 0.3s linear;
  &:hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 480px) {
    width: 20px;
    height: 20px;
    font-size: 0.8rem;
    top: 15%
  }
`;

export default Header;
