import React, { useState } from 'react';
import styles from './Contact.module.css';
import AnimatedDesignTogether from './AnimatedDesignTogether';
import { useIsMobile } from '../utils/deviceUtils';

const Contact = () => {
    const [email, setEmail] = useState('');
    const isMobile = useIsMobile();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Email submitted:', email);
        setEmail('');
    };

    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactContent}>
                <AnimatedDesignTogether />
                <p className={styles.contactText}>
                    Let's connect! Feel free to reach out for collaboration, inquiries, or any web development needs—I'm here to help.
                </p>
                <form onSubmit={handleSubmit} className={styles.contactFormGroup}>
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className={styles.contactInput}
                        aria-label="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className={styles.contactButton}
                        aria-label="Contact me"
                    >
                        Contact Me
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;