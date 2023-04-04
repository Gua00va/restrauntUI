import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content__about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button typr="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content__knife flex__center">
        <img src={images.knife} alt="" />
      </div>

      <div className="app__aboutus-content__history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button typr="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
