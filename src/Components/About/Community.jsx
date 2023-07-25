import { styled } from "styled-components";
import Container from "../Home/Container";

const Community = () => {
  return (
    <Section id="community">
      <h2 style={{textAlign: "center", marginBottom: "40px"}}>A COMMUNITY BUILT ON NEIGHBORHOOD VALUES</h2>
      <Wrapper>
        <Container />
      <Container />
      <Container />
      </Wrapper>
      
    </Section>
  );
};
 const Section = styled.section`
margin-bottom: 10%

 `
const Wrapper = styled.div`
display: flex;
flex-direction: row;
gap: 50px;
`;
export default Community;
