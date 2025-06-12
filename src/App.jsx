import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import { DarkModeProvider } from './context/DarkModeContext'
import { useIsMobile } from './utils/deviceUtils'
import styles from './App.module.css'

function App() {
    const isMobile = useIsMobile();

    return (
        <DarkModeProvider>
            <div className="App">
                <Header />
                <div className={styles.mainContent}>
                    <Main />
                </div>
                <Footer />
            </div>
            <ThemeToggle />
        </DarkModeProvider>
    )
}

export default App
