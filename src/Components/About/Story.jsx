import { styled } from "styled-components";
const Story = () => {
return (
    <Section>
        <h2>AN EYE FOR BETTER EYEWEAR</h2>
        <p>Our designs are carefully crafted to capture the latest fashion trends while ensuring maximum comfort and functionality. With a range of unique styles and color options, we are confident that our collection has something to suit every taste and personality.</p>
        <p>Our frames are crafted with attention to detail, utilizing the latest materials and technology to ensure the highest quality products. Elevate your eyewear game with SAVANT frames.</p>
    </Section>
)
}
const Section = styled.section`
width: 40%;
display: flex;
flex-direction: column;
gap: 30px;
text-align: center;

`
export default Story;