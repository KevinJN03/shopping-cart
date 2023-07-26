import { styled } from "styled-components";
import Container from "../Home/Container";
import img1 from "../../assets/img/omid-armin-Zt99Ho5Hq3s-unsplash.jpg"
import img2 from "../../assets/img/justin-follis-A7Um4oi-UYU-unsplash.jpg"
import img3 from "../../assets/img/latrach-med-jamil-yizqCTUxqts-unsplash.jpg"
const Community = () => {
  return (
    <Section id="community">
      <h2 style={{textAlign: "center", marginBottom: "40px"}}>A COMMUNITY BUILT ON NEIGHBORHOOD VALUES</h2>
      <Wrapper>
        <Container image={img1} 
        category={`New Destination`}
        title={`Discover the Urban Elegance`}
        description={`Unveiling a new destination of style and sophistication – Urban Gaze arrives in the vibrant streets of Singapore! Prepare to immerse yourself in our curated selection of trendy eyewear, blending urban allure with timeless charm. Step into the realm of chic designs and embark on a captivating journey through the city's fashion horizon.`}
        
        />
      <Container image={img2}
      category={`UNITY BOND`}
      title={`Embrace the Urban Tribe`}
      description={`In the heart of our brand beats the spirit of unity and togetherness. Weaving a vibrant tapestry of connection, we celebrate our Urban Tribe – an amalgamation of devoted team members and cherished patrons. Here, each individual forms an integral thread, knitting together the essence that defines our brand's rich identity.`}
      />
      <Container image={img3}
      category={`#CHICONTHEMOVE`}
        title={`Captured Elegance`}
        description={`Glimpse into the world of #ChicOnTheMove as our frames grace the illustrious stages of Hollywood's elite! From glamorous red carpets to everyday strolls, our designs exude an enduring charm that complements the timeless allure of renowned stars.`}
      />
      </Wrapper>
      
    </Section>
  );
};
 const Section = styled.section`
width: 100%


 `
const Wrapper = styled.div`
display: flex;
  width: 100%;
  justify-content: center;

  flex-direction: row;
  gap: 50px;
  margin-bottom: 100px;

  @media screen and (max-width: 780px) {
    flex-direction: column;
    align-items: center;
    width: 100%;

  }

  @media screen and (min-width: 1080px) {
    flex-wrap: nowrap !important;
  }

  @media screen and (min-width: 781px) , screen (max-width: 1000px){
    flex-wrap: wrap;
  }
`;
export default Community;
