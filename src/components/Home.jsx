import style from './Home.module.css'
import React from 'react'
import Summary from './Summary'
import Me from './Me'
import { useIsMobile } from '../utils/deviceUtils'

const Home = () => {
    const isMobile = useIsMobile();

    return (
        <div className={style['home-container']}>
            {isMobile ? (
                <div className={style['home-content']}>
                    <Summary />
                    <Me />
                </div>
            ) : (
                <>
                    <Summary />
                    <Me />
                </>
            )}
        </div>
    )
}

export default Home