import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const AnimatedDesignTogether = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Let's Design Together"],
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
        <h1 style={{ marginBottom: '8%' }}>
            <span style={{ fontWeight: 'bold', fontSize: '3rem', }} ref={el} />
        </h1>
    );
};

export default AnimatedDesignTogether; 