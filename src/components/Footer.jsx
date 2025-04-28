import React from 'react'
import style from './Footer.module.css'
import SocialLinks from './SocialLinks'
const Footer = () => {
    return (
        <div className={style['footer-container']}>
            <footer className={style['footer']}>
                <ul className={style['footer-links']}>
                    <li><a href="#home" className={style['footer-link']}>Home</a></li>
                    <li><a href="#about" className={style['footer-link']}>About Me</a></li>
                    <li><a href="#services" className={style['footer-link']}>Services</a></li>
                    <li><a href="#projects" className={style['footer-link']}>Projects</a></li>
                    <li><a href="#contact" className={style['footer-link']}>Contact</a></li>
                </ul>
                <div className={style['social-links-wrapper']}>
                    <SocialLinks />
                </div>
            </footer>
            <div className={style['copyright']}>
                © 2025 Murtaza Mazhar All Rights Reserved, Inc
            </div>
        </div>
    )
}

export default Footer
