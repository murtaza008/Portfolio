import React from 'react'
import { motion } from 'framer-motion'
import style from './AboutSkills.module.css'

const AboutSkills = () => {
    const skills = [
        { name: 'HTML', className: 'html' },
        { name: 'CSS/Bootstrap/Tailwind', className: 'css' },
        { name: 'JavaScript', className: 'javascript' },
        { name: 'React', className: 'react' },
        { name: 'Python', className: 'python' },
        { name: 'C/C++', className: 'c' },
        { name: 'Database', className: 'database' },
        { name: 'PHP', className: 'php' }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <motion.div
            className={style['about-skills-container']}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
            variants={containerVariants}
        >
            <motion.ul className={style['skills-grid']}>
                {skills.map((skill, index) => (
                    <motion.li
                        key={index}
                        variants={itemVariants}
                    >
                        <h6 style={{ fontWeight: '700', fontSize: '1.1rem' }}>{skill.name}</h6>
                        <div className={style["skill-bar"]}>
                            <div className={`${style["skill-level"]} ${style[skill.className]}`}></div>
                        </div>
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
    )
}

export default AboutSkills