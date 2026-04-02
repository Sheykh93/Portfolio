import css from "../../assets/icon/css.svg";
import html5 from "../../assets/icon/html5.svg";
import js from "../../assets/icon/js.svg";
import node from "../../assets/icon/node.svg";
import react from "../../assets/icon/react.svg";
import typscr from "../../assets/icon/typscr.svg";
import figma from "../../assets/icon/figma.svg";
import mongo from "../../assets/icon/mongo.svg";
import "../section-2/Section2.css";
// import type { FC } from "react";

interface Ipros {
  id: number;
  icon: string;
  name: string;
}
const Section2 = () => {
  const skills: Ipros[] = [
    { id: 1, name: "CSS3", icon: css },
    { id: 2, name: "HTML5", icon: html5 },
    { id: 3, name: "JAVASCRIPT", icon: js },
    { id: 4, name: "REACT", icon: react },
    { id: 5, name: "TYPESCRIPT", icon: typscr },
    { id: 6, name: "FIGMA", icon: figma },
  ];
  const learing: Ipros[] = [
    {
      id: 1,
      name: "NODEJS",
      icon: node,
    },
    {
      id: 2,
      name: "MONGODB",
      icon: mongo,
    },
  ];

  return (
    <>
      <section className="sec-2">
        <div className="skills-title">
          <h3>SKILLS</h3>
        </div>

        <div className="skills-using">
          <div className="skills_text">
            <h4>USING NOW:</h4>
          </div>
          <div className="skills-programs">
            <div
              className="
            skills-programs-div"
            >
              {skills?.map((item, index) => {
                return (
                  <div className="pr">
                    <div className="img">
                      <img src={item?.icon} alt="" key={index} />
                    </div>
                    <p>{item?.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="learning">
          <div className="learing-text">
            <h4>LEARNING:</h4>
          </div>
          <div className="learing-programs">
            <div className="learing-programs-div">
              {learing?.map((item, index) => {
                return (
                  <div className="pr">
                    <div className="img">
                      <img src={item?.icon} alt="" key={index} />
                    </div>
                    <p>{item?.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
