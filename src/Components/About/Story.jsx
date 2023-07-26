import { styled } from "styled-components";
const Story = () => {
return (
    <Section>
        <h2> A Fusion of Fashion and Comfort</h2>
        <p>At UrbanGaze, our designs blend the latest fashion trends with maximum comfort, offering a diverse collection of styles and colors to suit every taste and personality.</p>
        <p>UrbanGaze frames are a testament to our unwavering commitment to precision and quality. With an acute attention to detail and utilization of cutting-edge materials,</p>
    </Section>
)
}
const Section = styled.section`
width: 40%;
display: flex;
flex-direction: column;
gap: 30px;
text-align: center;


@media screen and (max-width: 900px) {
    width: 90%;
}
`
export default Story;