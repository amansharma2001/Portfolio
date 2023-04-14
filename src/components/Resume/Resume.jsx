import React from "react";
import "./Resume.css";
import resume from "../../images/resume_img.jpg";

const Resume = () => {
  return (
    <>
      <a href={resume} className="resume" download>
        Download Resume
      </a>
      <div className="resume-img">
        <img src={resume} alt="" />
      </div>
    </>
  );
};

export default Resume;
