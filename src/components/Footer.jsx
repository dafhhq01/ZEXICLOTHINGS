// src/components/Footer.jsx
import React from 'react';
import { FaWhatsapp, FaTiktok, FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = ({ scrollToSection }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Kolom 1: Brand */}
        <div className={styles.footerBrand}>
          <h3 className={styles.footerLogo}>ZEXI<span className={styles.logoHighlight}>CLOTHINGS</span></h3>
          <p>Built by the streets, made for you. Premium thrifting experience with curated vintage collections.</p>
        </div>

        {/* Kolom 2: Explore */}
        <div className={styles.footerLinks}>
          <h4>Explore</h4>
          <ul>
            <li><button onClick={() => scrollToSection('home')}>Home</button></li>
            <li><button onClick={() => scrollToSection('katalog')}>Katalog</button></li>
            <li><button onClick={() => scrollToSection('kontak')}>Contact</button></li>
          </ul>
        </div>

        {/* Kolom 3: Contact (social icons) */}
        <div className={styles.footerContact}>
          <h4>Contact</h4>
          <p className={styles.footerSubtext}>Follow us for updates, drops & vintage finds</p> 
          <div className={styles.socialLinks}>
            <a href="https://api.whatsapp.com/send?phone=62087767202572&text=Halo%20kak" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={20} />
            </a>
            {/* <a href="https://tiktok.com/@zexicclothings" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={20} />
            </a> */}
            <a href="https://www.instagram.com/zexiclothings" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {currentYear} ZEXICLOTHINGS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
