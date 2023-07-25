import { styled } from "styled-components";
import { Link, Outlet } from "react-router-dom";
const ProductCard = ({ id, name, image1, price }) => {
  return (
   <Link to={"/shop/"+id} style={{ textAlign: "center", textDecoration: "none"}} > <div>
      <ImgWrapper>
        <img src={image1} style={{width: "100%", height: "100%", objectFit: "cover"}}></img>
      </ImgWrapper>
      <h3>{name}</h3>
      <p>£{price}</p>
    </div>
    <Outlet/>
    </Link>
  
  );
};

const ImgWrapper = styled.div`

width: 300px;
height: 300px
}


`;

export default ProductCard;
