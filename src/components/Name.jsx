import React from 'react'
import style from './Name.module.css'
const Name = () => {
    return <p className={`d-flex align-items-center mb-3 mb-md-0 me-md-auto ${style['name-container']}`} >
        <span className={style['name-text']}>Murtaza's Portfolio</span>
    </p >
}

export default Name