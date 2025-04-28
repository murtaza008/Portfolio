import React from 'react'
import style from './HireButton.module.css'
const HireButton = () => {
    return (
        <button type="button" className={`btn btn-primary ${style['btn-size']}`}>Hire Me</button>

    )
}

export default HireButton
