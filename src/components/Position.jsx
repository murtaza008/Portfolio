import React from 'react'
import style from './Position.module.css'
const Position = () => {
    return <div className='position-container'>
        <h1 className={style['change-color']}>Frontend</h1>
        <h1 className={`${style['change-color']} ${style['developer']}`}>Developer</h1>    </div >

}

export default Position