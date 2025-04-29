import React from 'react'
import { motion, useInView } from 'framer-motion'
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

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        }
    }

    return (
        <div className={style['about-skills-container']}>
            <ul className={style['skills-grid']}>
                {skills.map((skill, index) => {
                    const ref = React.useRef(null);
                    const isInView = useInView(ref, { margin: "-100px" });

                    return (
                        <motion.li
                            key={index}
                            ref={ref}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={itemVariants}
                        >
                            <h6 className={style['skill-name']}>{skill.name}</h6>
                            <div className={style["skill-bar"]}>
                                <motion.div
                                    className={`${style["skill-level"]} ${style[skill.className]}`}
                                    initial={{ width: 0 }}
                                    animate={isInView ? { width: "var(--skill-width)" } : { width: 0 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                ></motion.div>
                            </div>
                        </motion.li>
                    );
                })}
            </ul>
        </div>
    )
}

export default AboutSkills