import { styled } from "styled-components";


const CardHeader = () => {
    return (
        <Header>
        <h4 style={{marginLeft: "25%"}}>Item</h4>
        <h3>Price</h3>
        <h3>Quantity</h3>
        <h3>Total</h3>
      </Header>
    )
}

const Header = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20%;
  width: 80%;
  padding: 10px;
  border-bottom: 2px solid black;
  margin-bottom: 10px;
`;

export default CardHeader