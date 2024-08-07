// Landing.js
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Work from './Components/Work/Work';
import Footer from './Components/Footer/Footer';
import { Link } from 'react-router-dom';

const Landing = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleAnimation = () => {
      if (scrollY > 500) {
        controls.start({
          opacity: 1,
          y: 0,
        });
      } else {
        controls.start({
          opacity: 0,
          y: 50,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleAnimation();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY, controls]);

  return (
    <div>
      <Hero />
      <motion.div
        initial={{ opacity: 0, x: -20 }} // Change x property for About component
        animate={controls}
        transition={{ duration: 0.2 }}
      >
        <About />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }} // Change x property for Work component
        animate={controls}
        transition={{ duration: 0.2 }}
      >
        <Link to="/work">
          <Work />
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Keep the y property for Footer component
        animate={controls}
        transition={{ duration: 0.2 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default Landing;
