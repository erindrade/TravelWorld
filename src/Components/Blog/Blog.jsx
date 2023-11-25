import React, { useEffect } from "react";
import "./blog.css";
import Aos from "aos";
import "aos/dist/aos.css";

import { BsArrowRightShort } from "react-icons/bs";

import img10 from "../../Assets/10.jpg";
import img11 from "../../Assets/11.jpg";
import img12 from "../../Assets/12.jpg";
import img13 from "../../Assets/13.jpg";
import img14 from "../../Assets/14.jpg";

const Posts = [
  {
    id: 1,
    postImage: img10,
    title: "Beautiful Tree",
    desc: "This old tree stands tall and proud, its thick trunk weathered and gnarled by time. Its branches reach out like ancient fingers, providing shelter and shade for all who seek it. Its roots run deep, anchoring it firmly to the earth, a symbol of enduring strength and resilience.",
  },
  {
    id: 2,
    postImage: img11,
    title: "The old Castel",
    desc: "This castle is an imposing structure with thick walls and soaring towers, offering a commanding view of the surrounding landscape. Its rich history is filled with tales of royalty, battles fought and won, and the intrigue of past eras.",
  },
  {
    id: 3,
    postImage: img12,
    title: "Whitewashed Houses",
    desc: "The Whitewashed Greek houses are a traditional style of architecture found in many coastal towns and villages throughout Greece. These houses are typically made of stone or plaster and feature distinctive blue or green shutters and doors.",
  },
  {
    id: 4,
    postImage: img13,
    title: "House in Flowers",
    desc: "Houses covered with flowers are a common sight in many picturesque villages and towns throughout the world. These colorful and charming houses are adorned with a variety of flowers, adding a touch of natural beauty to the urban landscape.",
  },
  {
    id: 5,
    postImage: img14,
    title: "BeachPalma",
    desc: "Beaches lined with palm trees are a popular destination for tourists seeking a tropical escape. The swaying palms and soft sand create a tranquil and relaxing atmosphere, while the gentle sound of the waves lapping at the shore provides a soothing soundtrack to the perfect beach getaway.",
  },
];

const Blog = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className="blog container section">
        <div className="secContainer">
          <div className="secIntro">
            <h2
              data-aos="fade-up"
              data-aos-duration="2000"
              className="secTitle"
            >
              Our Best Blog?
            </h2>
            <p data-aos="fade-up" data-aos-duration="2500">
              An insight to the incredible experience in the world.
            </p>
          </div>

          <div className="mainContainer grid">
            {Posts.map(({ id, postImage, title, desc }) => {
              return (
                <div
                  key={id}
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="singlePost grid"
                >
                  <div className="imgDiv">
                    <img src={postImage} alt={title} />
                  </div>

                  <div className="postDetails">
                    <h3 data-aos="fade-up" data-aos-duration="3000">
                      {title}
                    </h3>
                    <p data-aos="fade-up" data-aos-duration="4000">
                      {desc}
                    </p>
                  </div>
                  <a
                    data-aos="fade-up"
                    data-aos-duration="4500"
                    href="#"
                    className="flex"
                  >
                    <BsArrowRightShort className="icon" />
                    Read More
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
