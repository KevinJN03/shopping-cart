import { Link } from "react-router-dom";
import image from "../../assets/img/jed-villejo-xkeLHL5suF0-unsplash.jpg";
import dogImage from "../../assets/img/ruby-schmank-Zk3t0u_p4pE-unsplash.jpg";
import "../View/body.css";
import Container from "./Container";
import { styled } from "styled-components";
import Lumina from "./Lumina";
import Slider from "./Slider";
const Home = () => {
  return (
    <>
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
          image1={dogImage}
          image2={image}
          title={"AMORA"}
          description={
            "Crafted with care, each pair of Amora glasses is a unique statement piece that combines contemporary design with classic elegance. The collection features a range of frames in various colors and styles, all made from high-quality materials that are built to last."
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
            title={"Gallery of dogs wearing glasses"}
            description={
              "From classic aviators to colorful frames, dogs of all breeds and sizes are embracing this fun and playful trend, making a bold fashion statement that's impossible to ignore."
            }
            category={"FEEL GOOD"}
          />
          <Container
            image={dogImage}
            alt={"dog with classes"}
            title={"Gallery of dogs wearing glasses"}
            description={
              "From classic aviators to colorful frames, dogs of all breeds and sizes are embracing this fun and playful trend, making a bold fashion statement that's impossible to ignore."
            }
            category={"FEEL GOOD"}
          />
          <Container
            image={dogImage}
            alt={"dog with classes"}
            title={"Gallery of dogs wearing glasses"}
            description={
              "From classic aviators to colorful frames, dogs of all breeds and sizes are embracing this fun and playful trend, making a bold fashion statement that's impossible to ignore."
            }
            category={"FEEL GOOD"}
          />
        </BlogWrapper>
      </section>
      <section id="carousel" style={{width: "100%"}}>
        <Slider />
      </section>
    </>
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
