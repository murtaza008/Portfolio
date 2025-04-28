import React, { useState } from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import style from './Projects.module.css'
import FrontendProjects from './FrontendProjects'
import FullstackProjects from './FullstackProjects'
import PythonProjects from './PythonProjects'

const categories = [
    {
        key: 'frontend',
        title: 'Frontend Projects',
        description: 'Explore my frontend development projects built with modern web technologies',
        component: <FrontendProjects />,
    },
    {
        key: 'fullstack',
        title: 'Full Stack Projects',
        description: 'Discover my full stack applications combining frontend and backend technologies',
        component: <FullstackProjects />,
    },
    {
        key: 'python',
        title: 'Python Projects',
        description: 'Discover my Python projects as I\'m currently learning backend development.',
        component: <PythonProjects />,
    },
]

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    const handleNextCategory = () => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % categories.length)
    }

    const handlePrevCategory = () => {
        setDirection(-1)
        setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length)
    }

    const current = categories[currentIndex]

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0
        })
    }

    return (
        <div className={style['project-container']}>
            <center><h1 style={{ fontWeight: 'bold', fontSize: '3rem' }}>My Projects</h1><p className={style['project-description']}>I have developed a variety of frontend projects, a full-stack project using PHP, and several Python projects as I continue learning. These projects showcase my growth in web development, focusing on creating responsive designs, building dynamic full-stack applications, and exploring backend solutions with Python.

            </p></center>
            <div className={style['project-carousel-container']}>
                <button
                    className={style['carousel-arrow'] + ' ' + style['left']}
                    onClick={handlePrevCategory}
                    aria-label="Previous"

                >
                    <FaArrowLeft />
                </button>
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 500, damping: 20, mass: 0.4 },
                            opacity: { duration: 0.1 }
                        }}
                        className={style['project-content']}
                    >
                        <h1 className={style['carousel-title']} style={{ paddingBottom: '5%' }}>{current.title}</h1>
                        <p className={style['carousel-desc']} style={{ paddingBottom: '2%' }}> {current.description}</p>
                        {current.component}
                    </motion.div>
                </AnimatePresence>
                <button
                    className={style['carousel-arrow'] + ' ' + style['right']}
                    onClick={handleNextCategory}
                    aria-label="Next"
                >
                    <FaArrowRight />
                </button>
            </div>
        </div >
    )
}

export default Projects