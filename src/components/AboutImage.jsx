import React from 'react'
import SecondImage from '../second.gif'
import style from './AboutImage.module.css'
const AboutImage = () => {
    return <div className={style['about-image-container']}>
        <img src={SecondImage} alt="about" />
    </div>

}

export default AboutImage