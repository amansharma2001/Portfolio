import React, { useState, useEffect } from "react";
import { AiOutlineHome, AiOutlineInfoCircle } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../../images/as.png";
const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${isScrolled ? "scrolled" : ""}`}>
      <ul>
        <li>
          <NavLink to="/" className="nav-button">
            <img src={logo} alt="logo" className="logo" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="nav-button">
            <span>
              <AiOutlineHome />
            </span>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-button">
            <span>
              <AiOutlineInfoCircle />
            </span>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/resume" className="nav-button">
            <span>
              <CgFileDocument />
            </span>
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/contact" className="nav-button">
            <span>
              <BsPerson />
            </span>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
