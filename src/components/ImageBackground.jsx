import React from 'react'
import style from './ImageBackground.module.css'

const ImageBackground = ({ image }) => {
    return (
        <div className={style['image-background-container']}>
            <img src={image} alt="Profile" className={style['profile-image']} />
        </div>
    )
}

export default ImageBackground