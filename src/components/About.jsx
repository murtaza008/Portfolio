import React from 'react'
import AboutImage from './AboutImage'
import AboutSummary from './AboutSummary'
import style from './About.module.css'
const About = () => {
    return <div className={style['about-container']}>
        <AboutImage />
        <AboutSummary />
    </div>
}

export default About