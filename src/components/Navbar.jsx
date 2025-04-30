import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import { downloadCV } from '../utils/downloadCV'
import { useIsMobile } from '../utils/deviceUtils'

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const isMobile = useIsMobile();

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'services', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getLinkStyle = (section) => ({
        color: 'black',
        textDecoration: 'none',
        borderBottom: activeSection === section ? '4px solid #1a73e8' : 'none',
        paddingBottom: '4px',
        transition: 'all 0.3s ease'
    });

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
        if (!sidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
        document.body.style.overflow = 'auto';
    };

    const handleNavClick = (section) => (e) => {
        e.preventDefault();
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
        closeSidebar();
    };

    const handleDownloadCV = (e) => {
        e.preventDefault();
        downloadCV();
        if (isMobile) {
            closeSidebar();
        }
    };

    return (
        <>
            {/* Mobile Menu Toggle */}
            <button
                className={styles.menuToggle}
                onClick={toggleSidebar}
                aria-label="Toggle menu"
            >
                <span className={`${styles.menuIcon} ${sidebarOpen ? styles.active : ''}`}></span>
            </button>

            {/* Desktop Navigation */}
            {!isMobile && (
                <ul className="nav nav-pills" style={{
                    marginLeft: '3%',
                    paddingLeft: '15%',
                    display: 'flex',
                    gap: '15px',
                    flexWrap: 'nowrap',
                    whiteSpace: 'nowrap'
                }}>
                    <li className="nav-item">
                        <a href="#home" className="nav-link" style={getLinkStyle('home')} onClick={handleNavClick('home')}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link" style={getLinkStyle('about')} onClick={handleNavClick('about')}>About Me</a>
                    </li>
                    <li className="nav-item">
                        <a href="#services" className="nav-link" style={getLinkStyle('services')} onClick={handleNavClick('services')}>Services</a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" className="nav-link" style={getLinkStyle('projects')} onClick={handleNavClick('projects')}>Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link" style={getLinkStyle('contact')} onClick={handleNavClick('contact')}>Contact</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link active" style={{ fontSize: window.innerWidth <= 768 && window.innerHeight < window.innerWidth ? '0.9rem' : '1rem' }} onClick={handleDownloadCV}>Download CV</a>
                    </li>
                </ul>
            )}

            {/* Mobile Sidebar */}
            <div className={`${styles.sidebar} ${sidebarOpen ? styles.open : ''}`}>
                <div className={styles.sidebarHeader}>
                    <h3>Menu</h3>
                    <button
                        className={styles.closeButton}
                        onClick={closeSidebar}
                        aria-label="Close menu"
                    >×</button>
                </div>
                <ul className={styles.sidebarMenu}>
                    <li>
                        <a
                            href="#home"
                            className={activeSection === 'home' ? styles.active : ''}
                            onClick={handleNavClick('home')}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className={activeSection === 'about' ? styles.active : ''}
                            onClick={handleNavClick('about')}
                        >
                            About Me
                        </a>
                    </li>
                    <li>
                        <a
                            href="#services"
                            className={activeSection === 'services' ? styles.active : ''}
                            onClick={handleNavClick('services')}
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className={activeSection === 'projects' ? styles.active : ''}
                            onClick={handleNavClick('projects')}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className={activeSection === 'contact' ? styles.active : ''}
                            onClick={handleNavClick('contact')}
                        >
                            Contact
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={styles.active}
                            onClick={handleDownloadCV}
                        >
                            Download CV
                        </a>
                    </li>
                </ul>
            </div>
            <div
                className={`${styles.sidebarOverlay} ${sidebarOpen ? styles.visible : ''}`}
                onClick={closeSidebar}
            ></div>
        </>
    )
}

export default Navbar