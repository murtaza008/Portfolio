import React from 'react';
import { useIsMobile } from '../utils/deviceUtils';
import style from './PythonProjects.module.css';
const projects = [

];

const PythonProjects = () => (
    <div className={style['projects-row']}>
        {projects.map((project, idx) => (
            <a key={idx} href={project.link} target="_blank" rel="noopener noreferrer" className={style['project-card']}>
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
            </a>
        ))}
    </div>
);


export default PythonProjects; 