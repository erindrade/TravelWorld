import React, { useEffect } from "react";
import "./footer.css";
import Aos from "aos";
import "aos/dist/aos.css";

import { SiYourtraveldottv } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { ImFacebook } from "react-icons/im";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="footer">
        <div className="secContainer container grid">
          <div data-aos="fade-up" data-aos-duration="2000" className="logoDiv">
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="footerLogo"
            >
              <a href="#" className="logo flex">
                <h1 className="flex">
                  <SiYourtraveldottv className="icon" />
                  TW
                </h1>
              </a>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="socials flex"
            >
              <ImFacebook className="icon" />
              <BsTwitter className="icon" />
              <AiFillInstagram className="icon" />
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="footerLinks"
          >
            <span className="linkTitle">
              Helpful Links
              <li>
                <a href="#">Destination</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Travel & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
            </span>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="4000"
            className="footerLinks"
          >
            <span className="linkTitle">
              Information
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Explore</a>
              </li>
              <li>
                <a href="#">Travel</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </span>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="5000"
            className="footerLinks"
          >
            <span className="linkTitle">
              Contact Us
              <span className="phone">+213 444 5684</span>
              <span className="email">travelworld@gmail.com</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
