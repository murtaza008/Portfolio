import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const AnimatedName = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Murtaza Mazhar'],
            typeSpeed: 15,
            backSpeed: 15,
            backDelay: 150,
            startDelay: 150,
            loop: true,
            showCursor: true,
            cursorChar: '|',
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <h2 style={{ fontWeight: '700' }}>
            <span ref={el} />
        </h2>
    );
};

export default AnimatedName; 