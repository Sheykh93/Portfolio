import "./About.css";
import { FaCode, FaPaintBrush, FaRocket } from "react-icons/fa";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container_about">
        <h2 className="section-title">ABOUT ME</h2>

        <div className="about-content">
          <div className="about-text">
            <h3>EXPLORE</h3>
            <p>
              "I am a Design-Driven Frontend Developer specializing in building
              modern web applications with React and TypeScript. My UI/UX design
              skills allow me to create interfaces that are not only functional
              but also intuitive and pixel-perfect. I focus on bridging the gap
              between aesthetic vision and technical execution."
            </p>
          </div>

          <div className="about-cards">
            <div className="skill-card bg-[#eef2f6]   dark:bg-[#344559]  dark:text-white ">
              <FaPaintBrush className="card-icon" />
              <h4>UI/UX Design</h4>
              <p>Designing intuitive and user-friendly interfaces.</p>
            </div>

            <div className="skill-card  bg-[#eef2f6] dark:bg-[#344559] dark:text-white ">
              <FaCode className="card-icon" />
              <h4>Frontend Dev</h4>
              <p>Clean and performant code with React, TypeScript, and Vite.</p>
            </div>
            <div className="skill-card  bg-[#eef2f6] dark:bg-[#344559]  dark:text-white ">
              <FaRocket className="card-icon" />
              <h4>Optimization</h4>
              <p>Fast-loading websites that look perfect on all devices.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
