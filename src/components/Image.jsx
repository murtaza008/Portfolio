import React from 'react'
import style from "./Image.module.css"
const FirstImage = ({ image }) => {
    return <div className={style['first-image-container']}>
        <img src={image} alt="First Image" />
    </div>
}

export default FirstImage