import Story from "./Story"
import { styled } from "styled-components";
import StoryMain from "./Story_MAin";
import Image from "../../assets/img/dmitry-ratushny-wpi3sDUrSEk-unsplash.jpg";
import StoryEyeCare from "./Story_EYECARE";
import Community from "./Community";
const About = () => {
    return (
        <Wrapper>
        <Story/>
        <StoryMain 
        title={"About Us"}
        text1={`SAVANT was born of a simple mission - to create high-quality, stylish glasses that would empower people to express themselves with confidence.`}
        text2={`Founded by a group of passionate designers and eyewear enthusiasts, we started our journey with a commitment to crafting frames that would stand the test of time, both in terms of durability and style.`}
        text3={`Today, we continue to build on that legacy by designing unique and trendsetting glasses that reflect the spirit and creativity of our brand. Join us as we continue to redefine eyewear fashion and bring our vision to life.`}
        buttontext={`Browse Products`}
        image={Image}
         />
         <StoryMain 
        title={"About Us"}
        text1={`SAVANT was born of a simple mission - to create high-quality, stylish glasses that would empower people to express themselves with confidence.`}
        text2={`Founded by a group of passionate designers and eyewear enthusiasts, we started our journey with a commitment to crafting frames that would stand the test of time, both in terms of durability and style.`}
        text3={`Today, we continue to build on that legacy by designing unique and trendsetting glasses that reflect the spirit and creativity of our brand. Join us as we continue to redefine eyewear fashion and bring our vision to life.`}
        buttontext={`Browse Products`}
        image={Image}
        direction={"row-reverse"}
        textAlign={"right"}
        position={"end"}

         />
         <StoryMain 
        title={"About Us"}
        text1={`SAVANT was born of a simple mission - to create high-quality, stylish glasses that would empower people to express themselves with confidence.`}
        text2={`Founded by a group of passionate designers and eyewear enthusiasts, we started our journey with a commitment to crafting frames that would stand the test of time, both in terms of durability and style.`}
        text3={`Today, we continue to build on that legacy by designing unique and trendsetting glasses that reflect the spirit and creativity of our brand. Join us as we continue to redefine eyewear fashion and bring our vision to life.`}
        buttontext={`Browse Products`}
        image={Image}
         />

         <StoryEyeCare 
         image={Image} 
         title={`OUR COMMITMENT TO PROPER EYECARE`} 
         text1={`We believe that everyone deserves access to high-quality eyecare, and that is why we have partnered with various organizations to promote awareness and support initiatives that make vision care accessible to those in need.`}
         text2={`With every purchase, we also provide educational resources and support to help our customers take care of their eyes and maintain good eye health for years to come.`}
         />

         <Community/>

        </Wrapper>
    )
}

const Wrapper = styled.section`
margin-top: 100px;

width: 100%;
display: flex;
flex-direction: column;
align-items: center
`

export default About