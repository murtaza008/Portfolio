import React, { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import style from './ThemeToggle.module.css';

const ThemeToggle = () => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    return (
        <button
            className={style['theme-toggle']}
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
        >
            {darkMode ? '☀️' : '🌙'}
        </button>
    );
};

export default ThemeToggle; 