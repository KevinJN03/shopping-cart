import { Link } from "react-router-dom";
import img from "../../assets/img/ruby-schmank-Zk3t0u_p4pE-unsplash.jpg";
import "../View/errorpage.css";
const ErrorPage = () => {
  return (
    <section id="errorpage-wrapper">
      <section id="errorpage">
      <h4 id="header">404 - ERROR</h4>
      <h2 id="sub-header">OOPS!</h2>
      <div id="image-wrapper">
        <img src={img} alt="dog with glasses" />
      </div>
      <div id="text-container">
        <h3>THIS IS AWKWARD...</h3>
        <p>
          This page either doesn't exist or is under construction. Sorry about
          that, here's a picture of a dog with glasses instead.
        </p>
        <p>Try the links below!</p>
      </div>
      <div className="link-buttons">
        <Link className="link"to={"/"}>Home</Link>
        <Link className="link" to={"/shop"}>Product</Link>
      </div>
      </section>
    </section>
  );
};

export default ErrorPage;
