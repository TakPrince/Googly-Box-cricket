import React from 'react';
import './program.css';
import { programsData } from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Program() {
  const transition = { type: 'spring', stiffness: 100, damping: 20, duration: 1.2 };
  const navigate = useNavigate(); // Hook for navigating programmatically

  return (
    <div className="programs" id="Programs">
      {/* Program Header with Animation */}
      <motion.div
        className="program-header"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={transition}
        viewport={{ once: false, amount: 0.5 }}
      >
        <span className="stock-text">Step into</span>
        <span>the</span>
        <span className="stock-text">Googly Zone!</span>
      </motion.div>

      <div className="program-categories">
        {programsData.map((program, index) => (
          <motion.div
            className="category"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={transition}
            viewport={{ once: false, amount: 0.3 }}
            onClick={() => navigate(`/program/${encodeURIComponent(program.heading)}`)} // Navigate to program detail page
          >
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join">
              <img src={RightArrow} alt="right arrow" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Program;
