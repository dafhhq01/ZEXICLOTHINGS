import React from 'react';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';

const HeroSection = ({ scrollToSection }) => {
  // Variants for animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <motion.div
          className={styles.heroTextContainer}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.heroTitle} variants={itemVariants}>
            <motion.span className={styles.titleLine} variants={itemVariants}>
              TAMPIL STYLIS, HARGA
            </motion.span>
            <motion.span className={styles.titleLine} variants={itemVariants}>
              TERJANGKAU
            </motion.span>
          </motion.div>
          
          <motion.p 
            className={styles.heroSubtitle} 
            variants={itemVariants}
          >
            Koleksi pakaian pilihan siap pakai.
          </motion.p>
          
          <motion.div 
            className={styles.features}
            variants={containerVariants}
          >
            <motion.span className={styles.featureItem} variants={itemVariants}>
              Kualitas bagus.
            </motion.span>
            <motion.span className={styles.featureItem} variants={itemVariants}>
              Harga terbaik.
            </motion.span>
            <motion.span className={styles.featureItem} variants={itemVariants}>
              Langsung kirim.
            </motion.span>
          </motion.div>
          
          <motion.button
            className={styles.heroButton}
            onClick={() => scrollToSection('katalog')}
            variants={itemVariants}
            whileHover={{ 
              backgroundColor: '#fff',
              color: '#000',
              scale: 1.05
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ 
              duration: 0.3,
              ease: "easeOut"
            }}
          >
            Lihat Produk
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;