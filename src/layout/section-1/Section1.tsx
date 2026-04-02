import SocialLinks from "../../components/social/SocialLinks";
import "../mainLayout/MainLayout.css";
const Section1 = () => {
  return (
    <section className="sec-1">
      <div className="main-left">
        <div className="main-left-title">
          <h3>
            Hi! I Am <br />
            Sheykhov Sheykh
          </h3>
        </div>

        <div className="main-left-text">
          <p>I'm a Software Engineer</p>
          <p>Front-end Developer </p>
        </div>

        <div className="social">
          <SocialLinks />
        </div>
      </div>
      <div className="main-right">
        <div className="hero-image">
          <img src="/sheyx.png" alt="menim seklim " />
        </div>
      </div>
    </section>
  );
};

export default Section1;
