import { useParams } from "react-router-dom";
import { useEffect, useState, useRef, useContext } from "react";
import { styled } from "styled-components";
import { CartContext } from "../../App";
import { v4 as uuidv4 } from "uuid";
const SingleProduct = ({ addToBasket }) => {
  const imageRef = useRef(null);
  const { allProduct } = useContext(CartContext);
  const { id } = useParams();
  const item = allProduct.find((prod) => prod.id == id);
  const [quantity, setQuantity] = useState(1);

  function addItem() {
    if (quantity <= 0) return;
    const obj = {
      id: item.id,
      image1: item.image1,
      name: item.name,
      price: item.price,
      quantity: quantity,
    };

    return obj;
  }
  return (
    <ProductSection>
      <ImgWrapper>
        <img
          id="product-image"
          ref={imageRef}
          src={item.image1}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        ></img>
        <MiniImgWrapper onClick={(e) => (imageRef.current.src = e.target.src)}>
          <img
            src={item.image1}
            style={{ width: "100px", height: "100%", objectFit: "cover" }}
          ></img>
          <img
            src={item.image2}
            style={{ width: "100px", height: "100%", objectFit: "cover" }}
          ></img>
          <img
            src={item.image3}
            style={{ width: "100px", height: "100%", objectFit: "cover" }}
          ></img>
        </MiniImgWrapper>
      </ImgWrapper>

      <TextWrapper>
        <h2>{item.name}</h2>
        <h3>£{item.price}</h3>
        <p>{item.description}</p>

        <section id="detail" style={{ marginTop: "40px", lineHeight: "2" }}>
          {item.detail.map((i) => {
            return <li key={uuidv4()}>{i}</li>;
          })}

          <p>Reference: {item.reference}</p>

          <div id="quanity">
            <h3>Quantity:</h3>
            <input
              type="number"
              max={10}
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              style={{ textAlign: "center" }}
            ></input>
          </div>

          <AddtoCart type="button" onClick={(item) => addToBasket(addItem())}>
            Add to Cart
          </AddtoCart>
        </section>
      </TextWrapper>
    </ProductSection>
  );
};

const ProductSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minMax(auto, 1fr));
  justify-items: center;
  margin-top: 40px;
`;
const MiniImgWrapper = styled.section`
  width: 100%;
  height: 100px;
  display: flex;
  gap: 5px;
  flex-direction: row;
  justify-content: center;
`;

const ImgWrapper = styled.div`
  width: 500px;
  height: 500px;
`;

const TextWrapper = styled.div`
  border-bottom: 3px solid black;
  height: auto;
`;

const AddtoCart = styled.button`
  width: 80%;
  padding: 15px 0;
  margin-top: 20px;
  border-radius: 25px;

  &:hover {
    background-color: black;
    color: white;
  }
`;
export default SingleProduct;

// {name, description, image1, image2, price}
