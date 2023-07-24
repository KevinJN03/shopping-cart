import Image from "../../assets/img/dmitry-ratushny-wpi3sDUrSEk-unsplash.jpg";
const Banner = () => {
    return  (

        <section className="banner">
    <div className="banner-text-container">
      <legend className="banner-title">ALL PRODUCTS</legend>
      <p className="banner-description">
        Featuring our iconic frames, this collection draws inspiration from the
        unique DNA of downtown living. The frames are designed to evoke the
        energy, creativity, and excitement that are synonymous with urban life,
        while also offering the comfort and functionality
      </p>
    </div>
    <div id="image-wrapper">
      <img src={Image}></img>
    </div>
  </section>
    )
 
};

export default Banner;
