import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
    return (
        <section className="section contact-section">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Get in Touch
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
            >
                I'm always open to discussing new opportunities or interesting projects.
            </motion.p>
            <motion.div
                className="contact-links"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
            >
                <a href="mailto:valencemuganda@gmail.com">Email</a>
                <a href="https://github.com/valence-fredrick" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://x.com/kajuna_senior" target="_blank" rel="noopener noreferrer">X</a>
            </motion.div>
        </section>
    );
}

export default Contact;
