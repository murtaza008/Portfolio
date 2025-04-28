import React from 'react'
import { motion } from 'framer-motion'
import styles from './Cards.module.css'
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { LuMonitorCheck } from "react-icons/lu";

const Cards = () => {
    const cards = [
        {
            id: 1,
            title: "Frontend Development",
            description: "I create modern, responsive, and user-friendly websites using HTML, CSS, JavaScript, React.js, Bootstrap, and Tailwind CSS."
        },
        {
            id: 2,
            title: "Web Design",
            description: "I design clean, attractive, and mobile-friendly layouts that deliver a smooth and engaging user experience across all devices."
        },
        {
            id: 3,
            title: "Full-Stack Development",
            description: "Currently expanding my skills with the MERN stack (MongoDB, Express.js, React.js, Node.js) to build complete web applications from front to back."
        },
        {
            id: 4,
            title: "Python Development",
            description: "Learning Python to explore backend development, automation, and future opportunities in Data Science and AI."
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.2
            }
        }
    }

    const cardVariants = {
        hidden: (index) => ({
            x: index < 2 ? -100 : 100,
            opacity: 0,
            scale: 0.9
        }),
        visible: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    }

    const getIcon = (title) => {
        switch (title) {
            case "Frontend Development":
                return <FaReact size={40} color="#000" />;
            case "Web Design":
                return <LuMonitorCheck size={40} color="#000" />;
            case "Full-Stack Development":
                return <FaNodeJs size={40} color="#000" />;
            case "Python Development":
                return <FaPython size={40} color="#000" />;
            default:
                return null;
        }
    }

    return (
        <motion.div
            className={styles['card-container']}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
            style={{ minHeight: "100vh" }}
        >
            {cards.map((card, index) => (
                <motion.div
                    key={card.id}
                    className="card"
                    style={{ width: '20rem', height: '18rem', backgroundColor: '#f2f2f2', display: 'flex', flexDirection: 'column', padding: '1rem' }}
                    variants={cardVariants}
                    custom={index}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                        {getIcon(card.title)}
                    </div>
                    <div className="card-body" style={{ textAlign: 'left' }}>
                        <h5 className="card-title" style={{ margin: '0', padding: '0', textAlign: 'left', float: 'left' }}>{card.title}</h5><br />
                        <p className="card-text" style={{ paddingTop: '25px' }}>{card.description}</p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    )
}

export default Cards