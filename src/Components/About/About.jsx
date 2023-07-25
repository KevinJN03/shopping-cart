import Story from "./Story"
import { styled } from "styled-components";
import StoryMain from "./Story_MAin";
import img1 from "../../assets/img/connor-botts-PlNHJCJhcrw-unsplash.jpg"
import img2 from "../../assets/img/pexels-thaís-silva-2119500.jpg"
import img3 from "../../assets/img/nonresident-Lr7FLfiJxLo-unsplash.jpg"
import eyeImg from "../../assets/img/david-travis-aVvZJC0ynBQ-unsplash.jpg"
import StoryEyeCare from "./Story_EYECARE";
import Community from "./Community";
const About = () => {
    return (
        <Wrapper>
        <Story/>
        <StoryMain 
        title={"About Us"}
        text1={`Urban Gaze was born with a visionary mission - to redefine eyewear fashion by offering high-quality, stylish glasses that empower individuals to express themselves with utmost confidence.`}
        text2={`Inspired and fueled by a team of passionate designers and eyewear enthusiasts, our journey began with a steadfast commitment to crafting frames that marry durability and timeless style, standing the test of time.`}
        text3={`As we continue to evolve, our legacy thrives through the creation of unique and trendsetting glasses that embody the spirit and creativity of our brand. Join us on this dynamic journey as we breathe life into our vision and continue to shape the future of eyewear fashion.`}
        buttontext={`Browse Products`}
        image={img1}
         />
         <StoryMain 
        title={"Style for All"}
        text1={`At Urban Gaze, we hold a firm belief that stylish and affordable glasses should be accessible to everyone. Our unwavering dedication drives us to create frames that seamlessly blend trendiness and fashion with utmost accessibility.`}
        text2={`From timeless classics to contemporary masterpieces, our diverse frames cater to every taste and style, ensuring our customers effortlessly discover their perfect pair.`}
        text3={`Embedded at the core of our brand is a commitment to inclusivity, guiding our every endeavor as we take pride in empowering people worldwide to see better and embrace their best selves. Urban Gaze – where style knows no boundaries.`}
        buttontext={`Browse Products`}
        image={img2}
        direction={"row-reverse"}
        textAlign={"right"}
        position={"end"}

         />
         <StoryMain 
        title={"Embrace the Change"}
        text1={`At Urban Gaze, we stand by the ethos of Responsible Shade, driven by our unwavering commitment to making a positive impact on the world around us. As a business, we embrace the responsibility of giving back to the communities we serve and safeguarding the planet we all call home.`}
        text2={`From employing sustainable materials and manufacturing practices to supporting local charities and non-profits, our journey is one of constant pursuit to create meaningful change.`}
        text3={`Choosing our brand goes beyond acquiring stylish and functional glasses; it signifies a shared commitment to creating a positive difference in the world. With Urban Gaze, embrace your vision, and together, let's make a lasting impact on our planet and the lives we touch.`}
        buttontext={`Browse Products`}
        image={img3}
         />

         <StoryEyeCare 
         image={eyeImg} 
         title={`Empowering Clear Vision`} 
         text1={`Our dedication to Proper Eyecare is the cornerstone of Urban Gaze. We firmly believe that high-quality eyecare should be accessible to all, which is why we have forged meaningful partnerships with organizations to raise awareness and support initiatives that bridge the gap.`}
         text2={`Beyond eyewear, our commitment extends to providing educational resources and unwavering support, empowering our customers to care for their eyes and uphold good eye health for a lifetime.`}
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