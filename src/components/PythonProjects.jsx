import React from 'react';
import style from './PythonProjects.module.css';

const projects = [
    {
        title: 'Data Analysis Tool',
        image: 'your-image-url-6.jpg',
        link: 'https://data-analysis-tool-example.com'
    },
    {
        title: 'Automation Script',
        image: 'your-image-url-7.jpg',
        link: 'https://automation-script-example.com'
    },
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