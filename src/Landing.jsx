import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Work from './Components/Work/Work';
import Footer from './Components/Footer/Footer';
import { Link } from 'react-router-dom';
import Loader from './Components/loader/Loader';

const Landing = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAssets = async () => {
      const isDataCached = localStorage.getItem('dataCached');

      if (!isDataCached) {
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate loading time
        localStorage.setItem('dataCached', 'true');
      }

      setIsLoading(false);
    };

    loadAssets();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Hero />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <About />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/work">
              <Work />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Footer />
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Landing;
