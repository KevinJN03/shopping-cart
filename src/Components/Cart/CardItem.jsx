import { styled } from "styled-components";
import { Link } from "react-router-dom"
import { useState } from "react";
const CardItem = ({ id, image1, price, quantity, total, removeItem , updateItem}) => {

  const [amount, setAmount] = useState(quantity)
  return (
    <>
      <Wrapper>


        <ItemWrapper>
          <ImgWrapper>
           <Link to={"/shop/" + id}>
           <img src={image1} style={{ width: "100%", height: "100%", objectFit: "cover", }}></img>
           </Link>
          </ImgWrapper>
          <h3>{price}</h3>
          <input
            type="number"
            value={amount}
            min={1}
            max={10}
            onChange={(e)=> setAmount(e.target.value)}
            onClick={()=> updateItem(id,  amount)}
            style={{
              padding: "0",
              maxHeight: "50px",
              textAlign: "center",
              maxWidth: "50px",
            }}
          ></input>
          <h3>{price * quantity}</h3>
          <Button onClick={()=> removeItem(id)}>Remove</Button>
        </ItemWrapper>
      </Wrapper>
    </>
  );
};



const Wrapper = styled.section`
  width: 80%;
  display: grid;
  justify-items: center;
  flex-direction: column;
`;

const ImgWrapper = styled.div`
  width: 100px;
  height: 100px;
`;

const ItemWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15%;
  width: 100%;
  padding: 0 10px 10px 0;
 place-items: center;
  border-bottom: 2px solid black;
`;


const Button = styled.button`
max-height: 50px;
padding: 20px;
text-align: center;
align-items: center;
display: flex;

`
export default CardItem;
