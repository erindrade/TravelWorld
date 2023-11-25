import React, { useEffect } from "react";
import "./offers.css";

import Aos from "aos";
import "aos/dist/aos.css";

import { MdKingBed } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { MdAirportShuttle } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";

import img2 from "../../Assets/2.jpg";
import img3 from "../../Assets/3.jpg";
import img18 from "../../Assets/18.jpg";
import img9 from "../../Assets/9.jpg";
import img19 from "../../Assets/19.jpg";

const Offer = [
  {
    id: 1,
    imgSrc: img2,
    stTdeitle: "Machu Pichu",
    location: "Peru",
    price: "$7,500",
  },
  {
    id: 2,
    imgSrc: img3,
    stTdeitle: "Berat",
    location: "Albania",
    price: "$2,000",
  },
  {
    id: 3,
    imgSrc: img18,
    stTdeitle: "Mountain",
    location: "Bulgaria",
    price: "$2,400",
  },
  {
    id: 4,
    imgSrc: img9,
    stTdeitle: "Christ The Redeemer",
    location: "Brazil",
    price: "$4,500",
  },
  {
    id: 5,
    imgSrc: img19,
    stTdeitle: "PlanetWare",
    location: "Barcelona",
    price: "$5,400",
  },
];

const Offers = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section className="offer container section">
        <div className="secContainer">
          <div data-aos="fade-up" data-aos-duration="2500" className="secIntro">
            <h2 className="secTitle">Special Offers</h2>
            <p>
              From historical cities to natural spectaculares, come see the best
              of the world!
            </p>
          </div>

          <div className="mainContent grid">
            {Offer.map(({ id, imgSrc, stTdeitle, location, price }) => {
              return (
                <div
                  key={id}
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  className="singleOffer"
                >
                  <div className="destImage">
                    <img src={imgSrc} alt={stTdeitle} />

                    <span className="discount">30% Off</span>
                  </div>

                  <div className="offerBody">
                    <div className="price flex">
                      <h4>{price}</h4>
                      <span className="status">For Rent</span>
                    </div>

                    <div className="amenities flex">
                      <div className="singleAmenity flex">
                        <MdKingBed className="icon" />
                        <small>2 Beds</small>
                      </div>
                      <div className="singleAmenity flex">
                        <MdBathtub className="icon" />
                        <small>1 Bathroom</small>
                      </div>
                      <div className="singleAmenity flex">
                        <FaWifi className="icon" />
                        <small>Wi-FI</small>
                      </div>
                      <div className="singleAmenity flex">
                        <MdAirportShuttle className="icon" />
                        <small>Shuttle</small>
                      </div>
                    </div>

                    <div className="location flex">
                      <MdLocationOn className="icon" />
                      <small>450 Santo #200, {location}</small>
                    </div>

                    <button className="btn flex">
                      View details
                      <BsArrowRightShort className="icon" />
                    </button>
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

export default Offers;
