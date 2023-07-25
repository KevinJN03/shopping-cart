import { styled } from "styled-components";

const StoryMain = ({ image, alt, text1, text2, text3, buttontext, title, position, direction, textAlign }) => {
  return (
    <Wrapper direction={direction}>
      <IMGWrapper>
        <IMG src={image} alt={alt} />
      </IMGWrapper>
      
      <TextWrapper textAlign={textAlign}>
        <div style={{marginBottom: "20px"}}>
          <h1>{title}</h1>
        </div>
        <p>{text1}</p>
        <p>{text2}</p>
        <p>{text3}</p>
        <ButtonWrapper position={position}>
          <Button>{buttontext}</Button>  
        </ButtonWrapper>
        
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
margin-top: 100px;
  width: 70%;
  display: flex;
  flex-direction: ${props => props.direction ? props.direction: "row"};
  gap: 50px;
  margin-bottom: 30px;
`;

const IMGWrapper = styled.div`
width: 50%;
height: 700px;
`;

const TextWrapper = styled.div`
width: 50%;
padding: 0 20px;
display: flex;
flex-direction: column;
gap: 50px;
justify-content: end;
text-align: ${props => props.textAlign ? props.textAlign: "left"};



`;

const IMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover
`;

const Button = styled.button`
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
`;

const ButtonWrapper = styled.div`
width: 100%;
display: flex;
justify-content: ${(props) => props.position ? props.position : "left"}
`
export default StoryMain;
