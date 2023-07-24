import { useParams } from "react-router-dom";
import product from "./product";
import { useEffect, useState, useRef } from "react";
import { styled } from "styled-components";
const SingleProduct = () => {
    const imageRef = useRef(null)
  const { id } = useParams();
  const item = product.find((prod) => prod.id == id);
  useEffect(() => {
    console.log("mount", item);
  }, []);

  return (
    <ProductSection>
      <ImgWrapper>
        <img id="product-image" ref={imageRef}
          src={item.image1}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        ></img>
        {/* {imageRef.current = document.querySelector("#product-image")} */}
        <MiniImgWrapper  onClick={(e)=> imageRef.current.src = e.target.src}>
        <img src={item.image1} style={{width:"100px", height:"100%", objectFit: "cover"}}></img>
            <img src={item.image2} style={{width:"100px", height:"100%", objectFit: "cover"}}></img>
            <img src={item.image3} style={{width:"100px", height:"100%", objectFit: "cover"}}></img>

        </MiniImgWrapper>
      </ImgWrapper>

      <TextWrapper>
        <h2>{item.name}</h2>
        <h3>£{item.price}</h3>
        <p>{item.description}</p>
      </TextWrapper>

      
    </ProductSection>
  );
};


const ProductSection = styled.section`
display: grid;
grid-template-columns: repeat(2, minMax(auto, 1fr));
justify-items: center;
margin-top: 40px;

`
const MiniImgWrapper = styled.section`
width: 100%;
height: 100px;
display: flex;
gap: 5px;
flex-direction: row;
justify-content: center;


`

const ImgWrapper = styled.div`
  width: 500px;
  height: 500px;
`;

const TextWrapper = styled.div`
border-bottom: 3px solid black;
height: auto;
`;
export default SingleProduct;

// {name, description, image1, image2, price}
