import React from 'react';
import { motion } from 'framer-motion';
import Contact from './components/Contact';

function App() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <section className="hero-section">
        <p>
          Hi, I'm a Backend Software Engineer. I build robust, scalable systems using Java, Spring Boot, and PostgreSQL. I love solving complex problems and optimizing performance.
        </p>
        <div className="signature">
          Valence Kajuna
        </div>
      </section>

      <Contact />
    </motion.main>
  );
}

export default App;
