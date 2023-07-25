import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Lumina = ({ title, description, image1, image2 }) => {
  return (
    <Wrapper>
      <Container1>
        <h2>{title}</h2>
        <p style={{ width: "500px" }}>{description}</p>
        <Link style={{color: "black", textDecoration: "none"}} to="/shop">
          <h3 style={{margin: "10px 0", textDecoration: "underline"}}>Browse {title}</h3>
        </Link>
        <ImgWrapper width="100%" height="800px">
          <Img src={image1}></Img>
        </ImgWrapper>
      </Container1>

      <Container2>
        <ImgWrapper width="900px" height="600px">
          <Img src={image2}></Img>
        </ImgWrapper>
        <Link to="/shop">
          <button type="button" style={{padding: "20px", marginTop: "20px", border: "none", color: "white", backgroundColor: "black"}}>See The Collection </button>
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
  width: 70%;
`;
const Container1 = styled.section`
  width: 100%;
`;

const Container2 = styled.section`
width: 100%
display: flex;
flex-direction: column;

`;

export default Lumina;
