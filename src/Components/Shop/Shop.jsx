import { useParams } from "react-router-dom";
import "../View/shop.css";
import Banner from "./Banner";
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import { Outlet } from "react-router-dom";
const Shop = () => {
  const { name } = useParams();
  const { id } = useParams();
  
  return (
    
    <section id="shop-section">
      <Banner />
      <Products />
    </section>
  );
};

export default Shop;
