import React from 'react'
import ImageBackground from './ImageBackground'
import SocialLinks from './SocialLinks'
import style from './Me.module.css'
import firstImage from '../first.png'

const Me = () => {
    return (
        <div className={style['me-container']}>
            <ImageBackground image={firstImage} />
            <SocialLinks />
        </div>
    )
}

export default Me