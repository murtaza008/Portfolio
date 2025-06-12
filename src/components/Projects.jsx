import React, { useState } from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import style from './Projects.module.css'
import FrontendProjects from './FrontendProjects'
import FullStackProjects from './FullStackProjects'
import PythonProjects from './PythonProjects'
import { useIsMobile } from '../utils/deviceUtils'

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
        component: <FullStackProjects />,
    },
    {
        key: 'python',
        title: 'Python Projects',
        description: 'Discover my Python projects as I\'m currently learning backend development.',
        component: <PythonProjects />,
    },

]

const Projects = () => {
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0)
    const [direction, setDirection] = useState(0)
    const isMobile = useIsMobile();

    const handleNext = () => {
        setDirection(1)
        if (isMobile) {
            setCurrentCategoryIndex((prev) => (prev + 1) % categories.length)
        } else {
            setCurrentCategoryIndex((prev) => (prev + 1) % categories.length)
        }
    }

    const handlePrev = () => {
        setDirection(-1)
        if (isMobile) {
            setCurrentCategoryIndex((prev) => (prev - 1 + categories.length) % categories.length)
        } else {
            setCurrentCategoryIndex((prev) => (prev - 1 + categories.length) % categories.length)
        }
    }

    const current = categories[currentCategoryIndex]

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? (isMobile ? 30 : 50) : (isMobile ? -30 : -50),
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? (isMobile ? 30 : 50) : (isMobile ? -30 : -50),
            opacity: 0
        })
    }

    return (
        <div className={style['project-container']}>
            <center>
                <h1 style={{
                    fontWeight: 'bold',
                    fontSize: isMobile ? '2rem' : '3rem',
                    marginBottom: '1rem'
                }}>
                    My Projects
                </h1>
                <p className={style['project-description']}>
                    I have developed a variety of frontend projects, a full-stack project using PHP, and several Python projects as I continue learning. These projects showcase my growth in web development, focusing on creating responsive designs, building dynamic full-stack applications, and exploring backend solutions with Python.
                </p>
            </center>
            <div className={style['project-carousel-container']}>
                <button
                    className={`${style['carousel-arrow']} ${style['left']}`}
                    onClick={handlePrev}
                    aria-label="Previous"
                >
                    <FaArrowLeft />
                </button>
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentCategoryIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: {
                                type: "spring",
                                stiffness: isMobile ? 400 : 600,
                                damping: isMobile ? 20 : 30,
                                mass: 0.2
                            },
                            opacity: { duration: 0.2 }
                        }}
                        className={style['project-content']}
                    >
                        <h1 className={style['carousel-title']}>{current.title}</h1>
                        <p className={style['carousel-desc']}>{current.description}</p>
                        {isMobile ? (
                            <div className={style['carousel-projects-row']}>
                                {currentCategoryIndex === 0 && <FrontendProjects />}
                                {currentCategoryIndex === 1 && <FullStackProjects />}
                                {currentCategoryIndex === 2 && <PythonProjects />}
                            </div>
                        ) : (
                            current.component
                        )}
                    </motion.div>
                </AnimatePresence>
                <button
                    className={`${style['carousel-arrow']} ${style['right']}`}
                    onClick={handleNext}
                    aria-label="Next"
                >
                    <FaArrowRight />
                </button>
            </div>
        </div>
    )
}

export default Projects