import React, { createContext, useState, useEffect } from 'react';

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
        // Check if user has a saved preference
        const savedTheme = localStorage.getItem('darkMode');
        return savedTheme ? JSON.parse(savedTheme) : false;
    });

    useEffect(() => {
        // Update localStorage when theme changes
        localStorage.setItem('darkMode', JSON.stringify(darkMode));

        // Update body class for global styles
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (context === undefined) {
        throw new Error('useDarkMode must be used within a DarkModeProvider');
    }
    return context;
}; 