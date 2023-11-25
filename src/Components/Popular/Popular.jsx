import React, { useEffect } from "react";
import "./popular.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";

import Aos from "aos";
import "aos/dist/aos.css";

import img1 from "../../Assets/1.jpg";
import img7 from "../../Assets/7.jpg";
import img8 from "../../Assets/8.jpg";
import img16 from "../../Assets/16.jpg";
import img17 from "../../Assets/17.jpg";

const Data = [
  {
    id: 1,
    imgSrc: img8,
    destTitle: "Machu Pichu",
    location: "Peru",
    grade: "Cultural Relax",
  },
  {
    id: 2,
    imgSrc: img16,
    destTitle: "Berat",
    location: "Albania",
    grade: "Cultural",
  },
  {
    id: 3,
    imgSrc: img17,
    destTitle: "Mountain",
    location: "Bulgaria",
    grade: "Relax",
  },
  {
    id: 4,
    imgSrc: img1,
    destTitle: "Christ The Redeemer",
    location: "Brazil",
    grade: "Cultural",
  },
  {
    id: 5,
    imgSrc: img7,
    destTitle: "PlanetWare",
    location: "Barcelona",
    grade: "Cultural",
  },
];

const Popular = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section className="popular section container">
        <div className="secContainer">
          <div className="secHeader flex">
            <div
              data-aos="fade-right"
              data-aos-duration="2500"
              className="textDiv"
            >
              <h2 className="secTitle">Popular Destination</h2>
              <p>
                From historical cities to natural specteculars, come see the
                best of the world!
              </p>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="2500"
              className="iconsDiv flex"
            >
              <BsArrowLeftShort className="icon leftIcon" />
              <BsArrowRightShort className="icon" />
            </div>
          </div>

          <div className="mainContent grid">
            {Data.map(({ id, imgSrc, destTitle, location, grade }) => {
              return (
                <div key={id} data-aos="fade-up" className="singleDestination">
                  <div className="destImage">
                    <img src={imgSrc} alt="Image title" />

                    <div className="overlayInfo">
                      <h3>{destTitle}</h3>
                      <p>{location}</p>

                      <BsArrowRightShort className="icon" />
                    </div>
                  </div>

                  <div className="destFooter">
                    <div className="number">0{id}</div>

                    <div className="destText flex">
                      <h6>{location}</h6>
                      <span className="flex">
                        <span className="dot">
                          <BsDot className="icon" />
                        </span>
                        TW
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Popular;
