import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { programsData } from '../../data/programsData';
import tick from '../../assets/tick.png';
import './ProgramDetail.css';
import { motion } from 'framer-motion';

function ProgramDetail() {
    const { programName } = useParams();
    const program = programsData.find(p => p.heading === decodeURIComponent(programName));
    const navigate = useNavigate();

    if (!program) {
        return (
            <div className="program-detail">
                <motion.div
                    className="program-not-found"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 25, duration: 1 }}
                >
                    <p>Program not found!</p>
                    <button onClick={() => navigate('/')} className="back-button">
                        Back to Programs
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="program-detail">
            <motion.div
                className="programDetail-l"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', stiffness: 80, damping: 20, duration: 1 }}
            >
                <motion.div
                    className="programDetail-header"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 80, damping: 20, duration: 1.2 }}
                >
                    <div>
                        <span className="program-heading stock-text">{program.heading}</span>
                        <span className="program-description">{program.details}</span>
                    </div>
                </motion.div>
                <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 80, damping: 20, duration: 1.4 }}
                >
                    <h1>Reason why {program.heading} !!</h1>
                    {program.reasion && (
                        <ul className="program-reasons">
                            {program.reasion.map((reason, index) => (
                                <motion.li
                                    key={index}
                                    className="program-reason"
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ type: 'spring', stiffness: 100, damping: 25, duration: 0.8, delay: index * 0.2 }}
                                >
                                    <img src={tick} alt="" />
                                    {reason}
                                </motion.li>
                            ))}
                        </ul>
                    )}
                    <button onClick={() => navigate('/')} className="btn back-btn">
                        Back to Programs
                    </button>
                </motion.span>
            </motion.div>
            <motion.div
                className="programDetail-r"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', stiffness: 80, damping: 20, duration: 1.6 }}
            >
                <motion.img
                    src={program.background}
                    alt="Program background"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: 'fade', duration: 1.2 }}
                />
                <motion.div
                    className="program-about"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 80, damping: 20, duration: 1.8 }}
                >
                    <span>
                        <h2>What you will get</h2>
                        {program.joinUs}
                    </span>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default ProgramDetail;
