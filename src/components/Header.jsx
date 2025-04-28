import React, { useState } from 'react'
import Navbar from './Navbar'
import Name from './Name'

const Header = ({ darkMode }) => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: '0 2rem'
        }}>
            <header style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem 0',

            }}>
                <Name />
                <Navbar />
            </header>
        </div>
    )
}

export default Header