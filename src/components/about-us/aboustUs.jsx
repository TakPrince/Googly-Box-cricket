import React from 'react'
import { motion } from 'framer-motion';  // Import framer-motion for animations
import './aboutUs.css'

function aboustUs() {
    return (
        <div className='About-us' id="About-Us">
            <div className="aboutusContent">
                <motion.div
                    className="heading"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', duration: 1 }}
                >
                    <span>Our </span>
                    <div>
                        <span className="stock-text">Promise</span>
                        <span> to You</span>
                    </div>
                </motion.div>

                <motion.div
                    className='content'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', duration: 1.2, delay: 0.3 }}
                >
                    At Googly Sports, we are a passionate team of sports enthusiasts committed to empowering athletes to reach their full potential. Our mission is to provide top-tier gear and equipment, coupled with expert advice, training tips, and a personalized approach to help you excel in your sport. Whether you're a beginner or a seasoned professional, we are here to support your journey and help you perform at your very best. With our deep knowledge and dedication, we strive to foster an environment where athletes thrive, achieve their goals, and elevate their game.
                </motion.div>
            </div>

            <div
                className='map-container'
            >
                <iframe
                    title="YMCA Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.809984536227!2d72.50256721461629!3d23.0045444190838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8429d041767b%3A0xe249b63d8e50106a!2sYMCA%2C%20S%20Bopal%20Rd%2C%20opposite%20Arose%20Foods%2C%20Mumatpura%2C%20Ahmedabad%2C%20Gujarat%20380054!5e0!3m2!1sen!2sin!4v1673876268001!5m2!1sen!2sin"
                    width="600" height="450" allowfullscreen="" loading="lazy"
                ></iframe>
            </div>
        </div>
    )
}

export default aboustUs;
