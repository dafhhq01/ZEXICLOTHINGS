// src/App.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductList from './components/ProductList';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'katalog', 'tentang', 'kontak'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      // Scroll ke paling atas halaman
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80; // Sesuaikan dengan tinggi navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div className="app">
      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <main>
        <section id="home">
          <HeroSection scrollToSection={scrollToSection} />
        </section>

        <section id="katalog" className="section-padding">
          <div className="container">
            <ProductList />
          </div>
        </section>

        <section id="tentang" className="section-padding">
          <div className="container">
            <AboutSection />
          </div>
        </section>

        <section id="kontak" className="section-padding">
          <div className="container">
            <ContactSection />
          </div>
        </section>
      </main>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;