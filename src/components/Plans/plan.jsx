import React from 'react';
import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';
import './plan.css';
import { motion } from 'framer-motion';

function Plan() {
  const transition = { type: 'spring', stiffness: 100, damping: 20, duration: 1 };

  return (
    <div className="plans-container" id="plans">
      <div className="blur blur-p1"></div>
      <div className="blur blur-p2"></div>

      {/* Program Header with Animation */}
      <motion.div
        className="program-header"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ...transition, duration: 1.5 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <span className="stock-text">Ready To Start</span>
        <span>You Journey</span>
        <span className="stock-text">NoW  With Us</span>
      </motion.div>

      {/* Plans List with Animations */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <motion.div
            className="plan"
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ ...transition, duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {plan.icon}
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ...transition, duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
            >
              {plan.name}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ...transition, duration: 0.8, delay: 0.3 }}
              viewport={{ once: false }}
            >
              ${plan.price}
            </motion.span>

            <div className="features">
              {plan.features.map((feature, j) => (
                <motion.div
                  className="feature"
                  key={j}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ ...transition, duration: 0.5, delay: j * 0.2 }}
                  viewport={{ once: false }}
                >
                  <img src={whiteTick} alt="Feature included" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
            <div>
              <span>see more benefits -</span>
            </div>
            <button className="btn">join now</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Plan;
