import React from "react";
import "./hero.css";
import hero_img from "../../assets/hero_image0.1.png";
import hero_img_back from "../../assets/hero_image_back.png";



import heart from "../../assets/heart.png";
// import caleories from "../../assets/calories.png";
import { motion, } from 'framer-motion'
import NumberCounter from 'number-counter'

import Header from "../header/header";
const Hero = () => {
  const transition = { type: 'spring', duration: 3 }

  return (
    <div className="hero block" id="hero">
      <div className="blur blur-h"></div>
      <div className="left-h">
        <Header />

        <div className="the-best-ad">

          <span>Prove your cricketing skills in thrilling matches</span>
        </div>

        <motion.div className="hero-text"
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}>
          <div>
            <sapn className="stock-text">Unleash </sapn>
            <sapn>the</sapn>
          </div>
          <div>
            <sapn> Champion </sapn>
            <sapn> in You!</sapn>
          </div>
          <div>
            <sapn>
              From box cricket to pickleball and VR football, dive into thrilling tournaments and unforgettable moments!
              <br />
              <hr />
              cont: +91 9351020114
            </sapn>
          </div>
        </motion.div>
        <div className="figure">
          <div>
            <sapn className="figure-heading">
              <NumberCounter end={140} start={100} delay="4" preFix="+" />
            </sapn>
            <sapn className="figure-text">Pro Coaches</sapn>
          </div>
          <div>
            <sapn className="figure-heading"><NumberCounter end={978} start={800} delay="4" preFix="+" /></sapn>
            <sapn className="figure-text">Matches Played</sapn>
          </div>
          <div>
            <sapn className="figure-heading">
              <NumberCounter end={50} start={0} delay="4" preFix="+" />
            </sapn>
            <sapn className="figure-text">Sports Options</sapn>
          </div>
        </div>
        <div className="hero-btn">
          <button className="btn">Get Start</button>
          <button className="btn">Lear More</button>

        </div>

      </div>

      <div className="right-h"
      >
        <button className="btn">join now</button>

        <motion.div className="heart-rate"

          initial={{ right: '-1rem' }}
          whileInView={{ right: '7rem' }}
          transition={transition}>
          <img src={heart} alt="" />
          <span>heart </span>
          <span>116 bpm</span>
        </motion.div>


        <img src={hero_img} alt="" className="hero-img" />
        <motion.img
          initial={{ right: '11rem' }}
          whileInView={{ right: '20rem' }}
          transition={transition}
          src={hero_img_back} alt="" className="hero-img-back" />

      </div>
    </div>
  );
};

export default Hero;
