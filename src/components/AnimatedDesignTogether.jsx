import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { useIsMobile } from '../utils/deviceUtils';
import './AnimatedText.css';

function AnimatedDesignTogether() {
    const el = useRef(null);
    const isMobile = useIsMobile();

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Let's Design Together"],
            typeSpeed: 15,
            backSpeed: 15,
            backDelay: 200,
            startDelay: 200,
            loop: true,
            showCursor: true,
            cursorChar: '|',
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <h1 style={{
            marginBottom: isMobile ? '4%' : '8%',
            textAlign: 'center',
            width: '100%',
            height: isMobile ? '2.5rem' : '3.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <span
                className="animated-text"
                style={{
                    display: 'inline-block',
                    minHeight: isMobile ? '2rem' : '3rem'
                }}
                ref={el}
            />
        </h1>
    );
}

export default AnimatedDesignTogether; 