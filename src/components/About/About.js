import React from "react";
import { FaHandPointRight } from "react-icons/fa";
import prog from "../../images/programmer.png";
import "./About.css";
import cpp from "../../images/c++.png";
import python from "../../images/python.png";
import js from "../../images/js.png";
import react from "../../images/react.png";
import nodejs from "../../images/nodejs.png";
import git from "../../images/git.png";

const About = () => {
  return (
    <>
      <div className="intro">
        <h1>LET ME INTRODUCE MYSELF</h1>
        <h3>
          Hi Everyone, I am Aman Sharma from Delhi, India.
          <br />
          I am a student pursuing B.Tech in Electronics and Communication
          Engineering from Bharati Vidyapeeth's College of Engineering
          <br />
          <br />
          I have great passion for software development. <br />
          <br /> My education in electronics and communication has given me a
          strong foundation in the technical aspects of engineering, but I'm
          currently focusing on building my skills as a software developer.
          <br />
          <br />I believe that technology is rapidly advancing and software
          development plays a crucial role in shaping the future. I'm excited to
          be a part of this change and I'm committed to learning as much as I
          can about software development. I have experience in Web Development,
          and I'm eager to explore new technologies and tools. Aside from my
          studies, I enjoy
        </h3>
        <ul>
          <li>
            {" "}
            <span>
              {" "}
              <FaHandPointRight />{" "}
            </span>{" "}
            Listening Songs
          </li>
          <li>
            {" "}
            <span>
              {" "}
              <FaHandPointRight />{" "}
            </span>{" "}
            Playing Games
          </li>
          <li>
            {" "}
            <span>
              {" "}
              <FaHandPointRight />{" "}
            </span>{" "}
            Travelling
          </li>
        </ul>
        <img src={prog} alt="prog" />
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <div className="container">
          <img src={cpp} alt="c++" />
        </div>
        <div className="container">
          <img src={python} alt="python" />
        </div>
        <div className="container">
          <img src={js} alt="js" />
        </div>
        <div className="container">
          <img src={react} alt="react" />
        </div>
        <div className="container">
          <img src={nodejs} alt="nodejs" />
        </div>
        <div className="container">
          <img src={git} alt="git" />
        </div>
      </div>
    </>
  );
};

export default About;
