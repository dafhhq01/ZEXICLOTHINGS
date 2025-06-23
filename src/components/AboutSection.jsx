import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <section className={styles.aboutWrapper}>
      <motion.h2
        className={styles.aboutTitle}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Kenapa Zexiclothings?
      </motion.h2>

      <div className={styles.aboutContainer}>
        <motion.div
          className={styles.aboutImage}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        />

        <motion.div
          className={styles.aboutContent}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.aboutText}>
            <p>
              <strong>Produk dicek sebelum tayang.</strong><br />
              Kami pastikan kondisinya layak dan sesuai foto.
              <br /><br />
              <strong>Harga sesuai kualitas.</strong><br />
              Transparan, tanpa markup berlebihan.
              <br /><br />
              <strong>Update koleksi tiap minggu.</strong><br />
              Selalu ada pilihan baru untuk kamu.
              <br /><br />
              <strong>Order cepat via WhatsApp.</strong><br />
              Tanpa login, langsung klik dan chat.
            </p>

            <div ref={statsRef} className={styles.aboutStats}>
              <StatItem value={200} suffix="+" label="Community Members" isInView={isInView} />
              <StatItem value={1} label="Years Experience" isInView={isInView} />
              <StatItem value={100} suffix="%" label="Satisfied Customers" isInView={isInView} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StatItem = ({ value, suffix = "", label, isInView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const increment = Math.ceil(value / (duration / 20));
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, 20);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div className={styles.statItem}>
      <span className={styles.statNumber}>{count}{suffix}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
};

export default AboutSection;
