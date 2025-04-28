import React from 'react'
import AboutText from './AboutText'
import AboutSkills from './AboutSkills'
import style from './AboutSummary.module.css'
const AboutSummary = () => {
    return <div className={style["about-summary"]}>
        <AboutText />
        <AboutSkills />
    </div>
}

export default AboutSummary