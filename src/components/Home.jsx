import style from './Home.module.css'
import React from 'react'
import Summary from './Summary'
import Me from './Me'
const Home = () => {
    return <div className={style['home-container']} >
        <Summary />
        <Me />
    </div >
}

export default Home