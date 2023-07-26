import { styled } from "styled-components";
import { Link } from "react-router-dom";
const StoryEyeCare = ({ image, alt, text1, text2, title }) => {
  return (
    <Wrapper>
      <div id="eyecare-container">
        <TextWrapper>
          <h2>{title}</h2>
          <p>{text1}</p>
          <p>{text2}</p>
          <Link>
            <Link to={"/eyecare"} className={"link learn-more-btn"}>
              <h3>Learn More</h3>
            </Link>
          </Link>
        </TextWrapper>
      </div>
      <IMGWrapper>
        <Img src={image} alt={alt} />
      </IMGWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 380px;
  display: flex;
  flex-direction: row;
  margin-bottom: 100px;
  margin-top: 80px;
  background-color: var(--accent-brown);
  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
    margin-top: calc(260px  + 20px);
    margin-bottom: 80px;
  }
`;

const IMGWrapper = styled.div`
  width: 100%;
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
  justify-content: center;
  align-items: end;
  color: white;

  text-align: right;
  padding: 40px 20px;

  @media screen and (max-width: 900px) {
    align-items: center;
  }
  @media (min-width: 1600px) {
    width: 50%;
    height: 100%;
  
  }

  @media (max-width: 1600px) {
    width: 100%;
    height: 100%
    
  }
`;

export default StoryEyeCare;
