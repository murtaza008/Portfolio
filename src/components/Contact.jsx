import React from 'react';
import styles from './Contact.module.css';
import AnimatedDesignTogether from './AnimatedDesignTogether';

const Contact = () => {
    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactContent}>
                <AnimatedDesignTogether />
                <p className={styles.contactText}>
                    Let's connect! Feel free to reach out for collaboration, inquiries, or any web development needs—I'm here to help.
                </p>
                <div className={styles.contactFormGroup}>
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className={styles.contactInput}
                        aria-label="Email address"
                    />
                    <button
                        className={styles.contactButton}
                        aria-label="Contact me"
                    >
                        Contact Me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contact;