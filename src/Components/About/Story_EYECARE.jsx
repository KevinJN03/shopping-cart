import { styled } from "styled-components";
import {Link}  from "react-router-dom";
const StoryEyeCare = ({ image, alt, text1, text2, title }) => {
  return (
    <Wrapper>
      <TextWrapper>
        <h2>{title}</h2>
        <p>{text1}</p>
        <p>{text2}</p>
        <Link>
        <Link to={"/eyecare"}><h3>Learn More</h3></Link>
        </Link>
      </TextWrapper>
      <IMGWrapper>
        <Img src={image} alt={alt} />
      </IMGWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: row;
  margin-bottom: 100px;
`;

const IMGWrapper = styled.div`
  width: 50%;
  height: 100%;
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: cent;
  align-items: end;
  padding: 20px;
  width: 50%;
  text-align: right
`;

export default StoryEyeCare;
