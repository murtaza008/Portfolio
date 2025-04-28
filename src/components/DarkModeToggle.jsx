import React, { useState, useEffect } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import styles from './DarkModeToggle.module.css'

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode')
        if (savedMode === 'true') {
            setIsDarkMode(true)
            document.body.classList.add('dark-mode')
        }
    }, [])

    const toggleDarkMode = () => {
        const newMode = !isDarkMode
        setIsDarkMode(newMode)
        localStorage.setItem('darkMode', newMode)
        document.body.classList.toggle('dark-mode')
    }

    return (
        <button
            className={`${styles.toggleButton} ${isDarkMode ? styles.dark : ''}`}
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
    )
}

export default DarkModeToggle 