import React from 'react'
import style from './HireButton.module.css'
import { downloadCV } from '../utils/downloadCV'

const HireButton = () => {
    return (
        <button
            type="button"
            className={`btn btn-primary ${style['btn-size']}`}
            onClick={downloadCV}
        >
            Resume
        </button>
    )
}

export default HireButton
