import React from "react";
import "./Homepage.css";
import portrait from "../../images/sde.png";
import { BsInstagram, BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
const HomePage = () => {
  return (
    <>
      <div className="homepage">
        <h1>
          Hi There!
          <span>👋🏻</span>
        </h1>
        <h2>I'm AMAN SHARMA</h2>
        <h3 style={{ color: "	blueviolet" }}>Software Engineer</h3>

        <button>Hire Me!</button>
      </div>

      <div className="portrait">
        <img src={portrait} alt="portrait" />
      </div>
      <div className="white-line"></div>
      <div className="underdiv">
        <h1>Let Me Introduce Myself!</h1>
        <h2>
          I fell in love with programming and I have at least learnt something,
          I think… 🤷‍♂️
          <br />
          <br /> I have a good knowledge in classics like C++, Javascript and
          Python. <br />
          <br /> My field of Interest's are building new projects using Web
          Technologies and Products.
          <br />
          <br /> Whenever possible, I also apply my passion for developing
          products with Node.js and Modern Javascript Library and Frameworks
          like React.js and Next.js
        </h2>
      </div>

      <div className="social">
        <h3>
          Feel free to <span>connect</span> with me.
        </h3>
        <ul>
          <li>
            <BsLinkedin
              className="linkedin"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/amansharma2001/",
                  "_blank"
                );
              }}
            />
          </li>
          <li>
            <BsGithub
              className="git"
              onClick={() => {
                window.open("https://github.com/amansharma2001", "_blank");
              }}
            />
          </li>
          <li>
            <BsInstagram
              className="insta"
              onClick={() => {
                window.open(
                  "https://www.instagram.com/_.aman.__.sharma._/",
                  "_blank"
                );
              }}
            />
          </li>
          <li>
            <BsTwitter
              className="twit"
              onClick={() => {
                window.open("https://twitter.com/2001AmanSharma", "_blank");
              }}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default HomePage;
