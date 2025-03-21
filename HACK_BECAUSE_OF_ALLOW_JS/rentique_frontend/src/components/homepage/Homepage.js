import Hero from "./Hero";
import React, { useEffect, useRef, useState } from 'react';
import MenCollection from "./MenCollection";
import FemaleCollection from "./FemaleCollection";
import Nav from "./Nav";
const Homepage = () => {
    const [isInView, setIsInView] = useState(false);
    const triggerRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting), { threshold: 0.2 });
        if (triggerRef.current)
            observer.observe(triggerRef.current);
        return () => observer.disconnect();
    }, []);
    return (<div className={`homepage ${isInView ? 'scrolled' : ''}`}>
        <Nav />
        <Hero />
        <div className="CollectionContainer" ref={triggerRef}>
          <MenCollection />
          <FemaleCollection />
        </div>
    </div>);
};
export default Homepage;
