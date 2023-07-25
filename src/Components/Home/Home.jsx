import { Link } from "react-router-dom";
import image from "../../assets/img/jed-villejo-xkeLHL5suF0-unsplash.jpg";
import dogImage from "../../assets/img/mollie-sivaram-ts1zXzsD7xc-unsplash.jpg";
import visionImage from "../../assets/img/david-travis-aVvZJC0ynBQ-unsplash.jpg";
import legacyImage from "../../assets/img/glen-hodson-liko5tJvphY-unsplash.jpg";
import img1 from "../../assets/img/lance-reis-wIykUNwwJQk-unsplash.jpg";
import img2 from "../../assets/img/apostolos-vamvouras-mKi4QEJXRCs-unsplash.jpg";
import "../View/body.css";
import Container from "./Container";
import { styled } from "styled-components";
import Lumina from "./Lumina";
import Slider from "./Slider";
const Home = () => {
  return (
    <section id="home">
      <div id="image-wrapper-1">
        <img src={image}></img>
        <Link to="/shop">
          <button type="button" id="shop-now-btn">
            Shop Now
          </button>
        </Link>
      </div>
      <section
        id="lumina"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <Lumina
          image1={img1}
          image2={img2}
          title={"Crafted with Precision"}
          description={
            "At Urban Gaze, we pour meticulous care into every pair of glasses, crafting them as unique statement pieces that blend contemporary design with timeless elegance. Each frame is an artistic fusion, a true embodiment of our vision."
          }
        />
      </section>
      <section
        id="blog"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <h3 style={{ marginBottom: "100px", fontSize: "1.9rem" }}>
          LATEST POSTS
        </h3>
        <BlogWrapper>
          <Container
            image={dogImage}
            alt={"dog with classes"}
            title={"A Fashionable Frenzy"}
            description={
              "Step into our whimsical world where dogs of all breeds and sizes embrace the playful trend of wearing glasses. From classic aviators to vibrant frames, each furry friend makes a bold and unforgettable fashion statement that's impossible to ignore."
            }
            category={`PAWSITIVELY CHIC`}
          />
          <Container
            image={visionImage}
            alt={"looking through glasses with eye test chart in the background"}
            title={"Empowering Your Vision"}
            description={
              "Embrace the power of knowledge as we equip you with valuable insights and practices to safeguard your eyes. With Urban Gaze by your side, navigate the world of eye health confidently, unlocking a lifetime of clear vision and ocular well-being. Together, let's nurture your vision for a brighter and clearer future."
            }
            category={"NURTURING VISION"}
          />
          <Container
            image={legacyImage}
            alt={"old man with glasses in black in white"}
            title={"Illuminating Lives with Care"}
            description={
              "Witness the legacy in motion as compassionate eyes meet the innocent gazes of young children. Urban Gaze's mission unfolds through this remarkable odyssey, leaving behind a trail of hope and brighter futures for generations to come. Together, let us illuminate lives with care, one vision at a time."
            }
            category={"A Visionary Odyssey"}
          />
        </BlogWrapper>
      </section>
      <section id="carousel" style={{width: "100%"}}>
        <Slider />
      </section>
    </section>
  );
};

const BlogWrapper = styled.div`
  display: flex;
  width: 60%;
  justify-content: center;
  flex-direction: row;
  gap: 50px;
  margin-bottom: 100px;
`;

export default Home;
