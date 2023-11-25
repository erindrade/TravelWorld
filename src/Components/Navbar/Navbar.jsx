import React from "react";
import "./navbar.css";
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { useState } from "react";

const Navbar = () => {
  const [isactive, setActive] = useState("navBar");
  const showNavbar = () => {
    setActive("navBar activeNavbar");
  };

  const removeNavbar = () => {
    setActive("navBar");
  };

  const [transparent, setTransparent] = useState("header");
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent("header activeHeader");
    } else {
      setTransparent("header");
    }
  };
  window.addEventListener("scroll", addBg);

  return (
    <>
      <section className="navBarSection">
        <div className={transparent}>
          <div className="logoDiv">
            <a href="#logo" className="logo">
              <h1 className="flex">
                <SiYourtraveldottv className="icon" />
                TravelWorld
              </h1>
            </a>
          </div>

          <div className={isactive}>
            <ul className="navLists flex">
              <li className="navItem">
                <a href="#home" className="navLink">
                  Home
                </a>
              </li>
              <li className="navItem">
                <a href="#Products" className="navLink">
                  Products
                </a>
              </li>
              <li className="navItem">
                <a href="#Resources" className="navLink">
                  Resorces
                </a>
              </li>
              <li className="navItem">
                <a href="#Contact" className="navLink">
                  Contact
                </a>
              </li>
              <li className="navItem">
                <a href="#Blog" className="navLink">
                  Blog
                </a>
              </li>

              <div className="headerBtns flex">
                <button className="btn loginBtn">
                  <a href="#login">Log in</a>
                </button>
              </div>

              <div className="headerBtns flex">
                <button className="btn signupBtn">
                  <a href="#Signup">Sign Up</a>
                </button>
              </div>
            </ul>

            <div onClick={removeNavbar} className="closeNavbar">
              <AiFillCloseCircle className="icon" />
            </div>
          </div>

          <div onClick={showNavbar} className="toggleNavbar">
            <TbGridDots className="icon" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
