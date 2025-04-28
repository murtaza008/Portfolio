import React from 'react'
import Cards from './Cards'
import style from './Services.module.css'
const Services = () => {
    return <div className={style['service-container']}>
        <center><h1>Services</h1><p className={style['service-description']}>I offer a range of services focused on building modern, responsive, and high-quality web applications. With strong frontend skills and a growing expertise in full-stack and Python development, I aim to deliver clean designs, smooth functionality, and a great user experience. I'm always learning and ready to take on exciting new projects.</p></center>
        <Cards />
    </div>
}

export default Services