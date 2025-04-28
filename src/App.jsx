import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import { DarkModeProvider } from './context/DarkModeContext'

function App() {
    return (
        <DarkModeProvider>
            <div style={{ paddingTop: '100px' }}>
                <Header />
                <Main />
                <Footer />
            </div>
            <ThemeToggle />
        </DarkModeProvider>
    )
}

export default App
