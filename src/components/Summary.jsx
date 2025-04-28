import React from 'react'
import Name from './Name'
import Position from './Position'
import HireButton from './HireButton'
import AnimatedName from './AnimatedName'
import style from './Summary.module.css'

const Summary = () => {
    return (
        <div className={style['summary-container']}>
            <p className={style['greeting']}>Hi, I am</p>
            <AnimatedName />
            <Position />
            <p className={style['description']}>
                Skills in HTML, CSS, JavaScript, React.js, Bootstrap, and Tailwind CSS.
                I build responsive and modern web interfaces with a focus on clean design
                and user experience. Currently, I am expanding my skills by learning the
                MERN stack and Python to grow as a full-stack developer.
            </p>
            <HireButton />
        </div>
    )
}

export default Summary