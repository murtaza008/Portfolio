import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import style from "./SocialLinks.module.css"
const SocialLinks = () => {
    return <div className={style['social-links-container']}>
        <a href="https://www.linkedin.com/in/murtaza-mazhar-31a083288/" target='_blank'><FaLinkedin /></a>
        <a href="mailto:murtazamazhar779@gmail.com" target='_blank'><BiLogoGmail /></a>
        <a href="https://github.com/murtaza008" target='_blank'><FaGithub /></a>
    </div>
}

export default SocialLinks