import React from 'react';
import { useIsMobile } from '../utils/deviceUtils';
import style from './FrontendProjects.module.css';
import frontend1 from '../frontend1.png';
import frontend2 from '../frontend2.png';
import frontend3 from '../frontend3.png';
const projects = [
    {
        title: 'Expense Tracker',
        image: frontend1,
        link: 'https://murtaza008.github.io/expense-tracker/'
    },
    {
        title: 'Weather App',
        image: frontend2,
        link: 'https://murtaza008.github.io/weather-app/'
    },
    {
        title: 'Todo Master',
        image: frontend3,
        link: 'https://murtaza008.github.io/todo-react-app/'
    },
];

const FrontendProjects = () => (
    <div className={style['projects-row']}>
        {projects.map((project, idx) => (
            <a key={idx} href={project.link} target="_blank" rel="noopener noreferrer" className={style['project-card']}>
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
            </a>
        ))}
    </div>
);


export default FrontendProjects; 