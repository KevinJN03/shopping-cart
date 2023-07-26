import { styled } from "styled-components";
import {Link} from "react-router-dom"
const StoryMain = ({ image, alt, text1, text2, text3, buttontext, title, position, direction, textAlign }) => {
  return (
    <Wrapper direction={direction}>
      <IMGWrapper>
        <IMG src={image} alt={alt} />
      </IMGWrapper>
      
      <TextWrapper textAlign={textAlign}  id="about-text-wrapper">
        <div style={{marginBottom: "20px"}}>
          <h1>{title}</h1>
        </div>
        <p>{text1}</p>
        <p>{text2}</p>
        <p>{text3}</p>
        <ButtonWrapper position={position}>
         <Link className="link about-btn" to={"/shop"}>
         <Button>{buttontext}</Button> 
         </Link>  
        </ButtonWrapper>
        
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
margin-top: 80px;
  width: 70%;
  display: flex;
  flex-direction: ${props => props.direction ? props.direction: "row"};
  gap: 50px;
  margin-bottom: 30px;

  @media screen and (max-width: 900px){
    width: 90%;
    flex-direction: column;
    align-items: center
  }
`;

const IMGWrapper = styled.div`
width: 50%;
height: 700px;

@media screen and (max-width: 900px){
  width: 100%;
  object-position: 50% 90%;
}
@media screen and (max-width: 480px){
  width: 100%;
  height: 500px;
}



`;

const TextWrapper = styled.div`
width: 50%;
padding: 0 20px;
display: flex;
flex-direction: column;
gap: 50px;
justify-content: end;
text-align: ${props => props.textAlign ? props.textAlign: "left"};

@media screen and (max-width: 900px){
  width: 100%;
gap: 20px;
text-align: center !important;
}

`;

const IMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover
`;

const Button = styled.div`
color: white;
background-color: black;
padding: 10px 30px;
width: auto;
max-width: 150px;
border-radius: 10px;
white-space: nowrap;
display: flex;
flex-direction: row;
justify-content: center;
align-item: center;

@media screen and (max-width: 900px){
padding: 14px
}
`;

const ButtonWrapper = styled.div`
width: 100%;
display: flex;
justify-content: ${(props) => props.position ? props.position : "left"}

@media screen and (max-width: 900px){
 justify-content: center !important
}
`
export default StoryMain;
