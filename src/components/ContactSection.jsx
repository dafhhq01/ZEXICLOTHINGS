import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiInstagram, FiMapPin } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';
import styles from './ContactSection.module.css';

const ContactSection = () => {
  return (
    <div className={styles.contactContainer}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className={styles.contactTitle}>JOIN OUR COMMUNITY</h2>
        <p className={styles.contactSubtitle}>
          Follow us for the latest drops, events, and behind-the-scenes content
        </p>

        <div className={styles.contactMethods}>
          {/* WhatsApp */}
          <motion.a 
            href="https://api.whatsapp.com/send?phone=62087767202572&text=Halo%20kak" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.contactItem}
            whileHover={{ y: -5 }}
          >
            <div className={styles.contactIcon}>
              <FiPhone size={24} />
            </div>
            <div>
              <h3>WhatsApp</h3>
              <p>+62 877 6720 2572</p>
            </div>
          </motion.a>

          {/* TikTok (replaces Email) */}
          {/* <motion.a 
            href="https://tiktok.com/@zexicclothings"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactItem}
            whileHover={{ y: -5 }}
          >
            <div className={styles.contactIcon}>
              <FaTiktok size={24} />
            </div>
            <div>
              <h3>TikTok</h3>
              <p>@zexicclothings</p>
            </div>
          </motion.a> */}

          {/* Instagram */}
          <motion.a 
            href="https://www.instagram.com/zexiclothings" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.contactItem}
            whileHover={{ y: -5 }}
          >
            <div className={styles.contactIcon}>
              <FiInstagram size={24} />
            </div>
            <div>
              <h3>Instagram</h3>
              <p>@zexiclothings</p>
            </div>
          </motion.a>

          {/* Location */}
          <motion.div 
            className={styles.contactItem}
            whileHover={{ y: -5 }}
          >
            <div className={styles.contactIcon}>
              <FiMapPin size={24} />
            </div>
            <div>
              <h3>Location</h3>
              <p>Palu, Indonesia</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSection;
