import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Lumina = ({ title, description, image1, image2 }) => {
  return (
    <Wrapper>
      <Container1>
        <div style={{ width: "100%"}}>
          <h2>{title}</h2>
        <p style={{ width: "100%" }}>{description}</p>
        <Link style={{color: "black", textDecoration: "none"}} to="/shop">
          <h3 style={{margin: "10px 0", textDecoration: "underline"}}>Browse {title}</h3>
        </Link>
        </div>
        <ImgWrapper width="100%" height="700px" className="wrapper_collection">
          <Img src={image1}></Img>
        </ImgWrapper>
      </Container1>
      <Container2>
        <ImgWrapper width="100%" height={"500px"} className="wrapper_collection">
          <Img src={image2}></Img>
        </ImgWrapper>
        <Link to="/shop" className="link collection-btn">
          SEE THE COLLECTION
        </Link>
      </Container2>
    </Wrapper>
  );
};
const ImgWrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s linear;

  &:hover {
    transform: scale(1.015)
  }
`;
const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 90%;
 
  padding: 0 50px;

  @media screen and (max-width: 780px){
    flex-direction: column-reverse;
    width: 100%;
    padding: 0 20px; 
  }
  
`;
const Container1 = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 780px){
    text-align: center;
    gap: 20px;
    width: 100%;
    padding: 0 20px; 
  }
`;

const Container2 = styled.div`

display: flex;
flex-direction: column;
width: 100%;
// height: 100%;

`;

export default Lumina;
