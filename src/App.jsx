import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import { DarkModeProvider } from './context/DarkModeContext'
import { useIsMobile } from './utils/deviceUtils'

function App() {
    const isMobile = useIsMobile();

    return (
        <DarkModeProvider>
            <div style={{ paddingTop: isMobile ? '0' : '100px' }}>
                <Header />
                <Main />
                <Footer />
            </div>
            <ThemeToggle />
        </DarkModeProvider>
    )
}

export default App
