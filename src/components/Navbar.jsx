import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTiktok, FaInstagram } from 'react-icons/fa';
import styles from './Navbar.module.css';

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const navRef = useRef(null);
  const indicatorRef = useRef(null);
  const linkRefs = useRef({});

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'katalog', label: 'Katalog' },
    { id: 'tentang', label: 'Tentang Kami' },
    { id: 'kontak', label: 'Kontak' }
  ];

  // Variants for mobile menu animations
  const mobileMenuVariants = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  const mobileIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.4 + i * 0.1,
        duration: 0.3,
        ease: "backOut"
      }
    })
  };

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = prevScrollPos > currentScrollPos;
      const shouldBeVisible = isScrollingUp || currentScrollPos < 100;

      setVisible(shouldBeVisible);
      setPrevScrollPos(currentScrollPos);

      // Close menu on scroll
      setIsMenuOpen(false);

      // Update active indicator position
      const activeLink = linkRefs.current[activeSection];
      if (activeLink && indicatorRef.current) {
        const { offsetLeft, offsetWidth } = activeLink;

        // Hapus animasi pergerakan dengan mengatur langsung tanpa transisi
        indicatorRef.current.style.transition = 'none';
        indicatorRef.current.style.transform = `translateX(${offsetLeft}px)`;
        indicatorRef.current.style.width = `${offsetWidth}px`;

        // Kembalikan transisi setelah perubahan
        setTimeout(() => {
          if (indicatorRef.current) {
            indicatorRef.current.style.transition = 'all 0.3s ease';
          }
        }, 10);
      }
    };

    // Handle window resize
    const handleResize = () => {
      // Close menu if window is resized to desktop size
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [prevScrollPos, visible, activeSection]);

  return (
    <motion.nav
      className={styles.navbar}
      initial={{ y: -50 }}
      animate={{
        y: visible ? 0 : -100,
        opacity: 1
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut"
      }}
      ref={navRef}
    >
      <div className={styles.container}>
        <motion.div
          className={styles.logo}
          onClick={() => scrollToSection('home')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          ZEXICLOTHINGS
        </motion.div>

        <div className={styles.centerMenu}>
          <div className={styles.navLinks}>
            <div
              className={styles.activeIndicator}
              ref={indicatorRef}
            />
            {navLinks.map((link) => (
              <a
                key={link.id}
                ref={(el) => (linkRefs.current[link.id] = el)}
                className={`${styles.navLink} ${activeSection === link.id ? styles.active : ''}`}
                onClick={() => {
                  // Nonaktifkan animasi saat klik
                  if (indicatorRef.current) {
                    indicatorRef.current.style.transition = 'none';
                  }
                  scrollToSection(link.id);
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.socialIcons}>
          <a
            href="https://api.whatsapp.com/send?phone=62087767202572&text=Halo%20kak"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={20} />
          </a>
          {/* <a
            href="https://tiktok.com/@zexicclothings"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok size={20} />
          </a> */}
          <a
            href="https://www.instagram.com/zexiclothings"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={20} />
          </a>
        </div>

        <button
          className={`${styles.menuToggle} ${isMenuOpen ? styles.open : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className={styles.mobileNavLinks}>
              {navLinks.map((link, i) => (
                <motion.button // Ganti dari <a> menjadi <button>
                  key={link.id}
                  className={`${styles.mobileNavLink} ${activeSection === link.id ? styles.active : ''}`}
                  onClick={() => {
                    setIsMenuOpen(false);

                    // Delay 300ms sesuai durasi animasi menu
                    setTimeout(() => {
                      scrollToSection(link.id);
                    }, 300);
                  }}
                  variants={mobileLinkVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                  whileHover={{ x: 5, color: '#fff' }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            <div className={styles.mobileSocialIcons}>
              {[
                { icon: <FaWhatsapp size={20} />, url: 'https://wa.me/6281234567890' },
                // { icon: <FaTiktok size={20} />, url: 'https://tiktok.com/@zexicclothings' },
                { icon: <FaInstagram size={20} />, url: 'https://instagram.com/zexicclothings' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={mobileIconVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                  whileHover={{ scale: 1.2, color: '#fff' }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;