import "./View/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faMessage } from "@fortawesome/free-regular-svg-icons";
// import { faHeadset } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer id="footer">
      <section id="subscribe_wrapper">
        <div id="subscribe">
          <h3>BE A PART OF THE <br></br>URBAN GAZE</h3>
          <p>Enjoy 10% off your first purchase when<br></br> you sign up!</p>
          <form>
            <input
              id="subscribe-input"
              placeholder="Enter your email here"
            ></input>
            <button type="button" id="subscribe-btn">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <section id="footer-menu">
        <section id="footer-left">
          <div id="company">
            <legend>Company</legend>
            <a href="#">Our Story</a>
            <a href="#">Shop Locations</a>
            <a href="#">Virtual</a>
            <a href="#">Eyecare</a>
            <a href="#">Philanthropy</a>
          </div>
          <div id="brand">
            <legend>Brand</legend>
            <a href="#">Style & Fit</a>
            <a href="#">Craftsmanship</a>
            <a href="#">Reviews</a>
            <a href="#">Blog</a>
            <a href="#">Press</a>
          </div>
          <div id="help">
            <legend>Help</legend>
            <a href="#">Shipping & Returns</a>
            <a href="#">Repairs</a>
            <a href="#">Warranty</a>
            <a href="#">FAQ</a>
            <a href="#">Contact Us</a>
          </div>
        </section>

        <section id="footer-right">
          <h2>ASK A URBAN GAZE SPECIALIST</h2>
          <p>
            Whether you're a collector or visiting for the first time, we're here to assist!
          </p>

          <div id="icons">
            <section>
              <FontAwesomeIcon
                icon={faPhoneVolume}
                style={{ color: "#000000" }}
                id="icon-img"
              />
              <p>(000) - URBANGAZE</p>
            </section>
            <section>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: "#000000" }}
                id="icon-img"
              />
              <p>support@urbangaze.com</p>
            </section>

            <section>
              <FontAwesomeIcon
                icon={faMessage}
                style={{ color: "#000000" }}
                id="icon-img"
              />
              <p>Chat with Us</p>
            </section>
          </div>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
