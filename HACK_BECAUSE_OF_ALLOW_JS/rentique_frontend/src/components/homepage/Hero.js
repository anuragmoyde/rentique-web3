import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Hero = () => {
    return (<div className="hero">
      <span className="title">STYLE, REIMAGINED</span>
      <div className="bottom">
        <div className="col">
          <div className="logo">
            <img src="/images/Rentique Logo.jpeg" alt="Rentique Logo"/>
          </div>
          <div className="slogan" style={{ textAlign: "center", maxWidth: "400px", margin: "0 auto" }}>
            <p>
              Closet fatigue? Refresh your style with premium rentals from
              Rentique.
            </p>
            <Link to="/dashboard">
              <button>
                <span>Explore the Collection</span>
                <FontAwesomeIcon icon={faCaretRight}/>
              </button>
            </Link>
          </div>
        </div>
        <div className="imageDay">
          <img alt="Oops! There should have been an image here -_-" src="images/homepage ethnic.jpg"/>
        </div>
      </div>
    </div>);
};
export default Hero;
