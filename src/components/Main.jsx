import React from 'react'
import Home from './Home'
import About from './About'
import Services from './Services'
import Project from './Projects'
import Contact from './Contact'
import style from './Main.module.css'
const Main = () => {
    return <div className={style["container"]}>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        <section id="projects"><Project /></section>
        <section id="contact"><Contact /></section>
    </div >
}

export default Main