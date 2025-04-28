import React from 'react';
import style from './FullstackProjects.module.css';
import fullstack1 from '../fullstack1.png';
const projects = [
    {
        title: 'Modern Phonebook Web App',
        image: fullstack1,
        link: 'http://phonebook-murtaza008.free.nf/registration/register.php'
    }
];

const FullstackProjects = () => (
    <div className={style['projects-row']}>
        {projects.map((project, idx) => (
            <a key={idx} href={project.link} target="_blank" rel="noopener noreferrer" className={style['project-card']}>
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
            </a>
        ))}
    </div>
);

export default FullstackProjects; 