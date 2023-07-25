import { styled } from "styled-components";
const Total = ({total})=> {
return (
    <Wrapper>
        <TextWrapper>
          <h4>SUBTOTAL</h4>
    <h3>£{total}</h3>
    <p>Shipping and taxes computed at checkout</p>  
        </TextWrapper>
    <Button onClick={() => alert("Transaction was successful")} type="button">Checkout</Button>
    </Wrapper>
    
)
}
const Wrapper = styled.div`
width: 80%;
display: flex;
flex-direction: column;
align-items: flex-end;


`
const TextWrapper = styled.div`
text-align: right;
padding-bottom: 10px;
border-bottom: 1px solid black;
display: flex;
flex-direction: column;
gap: 3px;
margin-top: 30px;
`
const Button = styled.button`
margin-top: 20px;
// max-width: 200px;
width: 150px;
padding: 20px 50px;
display: flex;
justify-content: center;
background-color: black;
color: white
`

export default Total;
