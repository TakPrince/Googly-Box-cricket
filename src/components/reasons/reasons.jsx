import React from 'react';
import './reasons.css';
import img1 from '../../assets/cricket.jpg';
import img2 from '../../assets/vr.jpg';
import img3 from '../../assets/football.jpg';
import img4 from '../../assets/pickleball.jpg';
import tick from '../../assets/tick.png';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import { motion } from 'framer-motion';

function reasons() {
  return (
    <div className='reason' id='reason'>
      {/* Left Section with Animations */}
      <div className="left-r">
        <motion.img
          src={img1}
          alt=""
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 25, duration: 1 }}
        />
        <motion.img
          src={img2}
          alt=""
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 25, duration: 1.2 }}
        />
        <motion.img
          src={img3}
          alt=""
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 25, duration: 1.4 }}
        />
        <motion.img
          src={img4}
          alt=""
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 25, duration: 1.6 }}
        />
      </div>

      {/* Right Section with Animations */}
      <div className="right-r">
        <motion.span
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 25, duration: 1 }}
        >
          some reason
        </motion.span>
        <div>
          <motion.span
            className='stock-text'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 25, duration: 1 }}
          >
            why
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 25, duration: 1 }}
          >
             choose us?
          </motion.span>
        </div>

        {/* Details Section with Animations */}
        <div className='details-r'>
          {['Over 50+ Exciting Matches', 'Play Smarter, Win Bigger', 'Free Entry for New Teams', 'Trusted Organizers'].map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 25, duration: 0.8, delay: index * 0.2 }}
            >
              <img src={tick} alt="" />
              <span>{text}</span>
            </motion.div>
          ))}
        </div>

        {/* Partner Section with Animation */}
        <motion.span
          className='partner'
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 25, duration: 1 }}
        >
          OUR PARTNER
        </motion.span>

        {/* Partners Logos with Animations */}
        <div className="partners">
          <motion.img
            src={nb}
            alt=""
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 25, duration: 1 }}
          />
          <motion.img
            src={nike}
            alt=""
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 25, duration: 1.2 }}
          />
          <motion.img
            src={adidas}
            alt=""
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 25, duration: 1.4 }}
          />
        </div>
      </div>
    </div>
  );
}

export default reasons;
