import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Loader.css';

const languages = ["Hey", "Hola", "Salut", "Ciao", "Hallo"];

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [languageIndex, setLanguageIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 30); // Adjust speed as needed

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      const languageInterval = setInterval(() => {
        setLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
      }, 1000); // Change language every 1 second

      return () => clearInterval(languageInterval);
    }
  }, [location.pathname]);

  return (
    <div className="loader-container">
      <div className="loader">
        <div className="spinner"></div>
        <div className="loader-text">
          {location.pathname === '/' && (
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="cool-typo"
            >
              {languages[languageIndex]}
            </motion.h1>
          )}
          <p>{progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
