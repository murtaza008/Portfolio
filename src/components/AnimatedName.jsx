import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './AnimatedText.css';

const AnimatedName = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Murtaza Mazhar'],
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
        <h2 className="animated-text">
            <span ref={el} />
        </h2>
    );
};

export default AnimatedName; 