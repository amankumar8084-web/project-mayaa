import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMap, FiMenu, FiX, FiLogIn } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import '../styles/Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    
    
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    
    
    const element = document.getElementById(targetId);
    
    if (element) {
    
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      
      
      window.history.pushState(null, '', `#${targetId}`);
    } else {
      console.warn(`Element with id "${targetId}" not found`);
    }
  };

  // Navigation items - make sure this is spelled correctly
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Departments', id: 'departments' },
    { name: 'Impact', id: 'impact' }
  ];

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <motion.a 
          href="#home" 
          className="navbar-logo"
          onClick={(e) => handleSmoothScroll(e, 'home')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="navbar-logo-icon">
            <FiMap />
          </span>
          <div className="navbar-logo-text">
            <span className="navbar-logo-main">Project<span className="navbar-logo-accent">Mayaa</span></span>
            <span className="navbar-logo-tagline">Engineering • Business • Innovation</span>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="navbar-desktop">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.id}`}
              className="navbar-link"
              onClick={(e) => handleSmoothScroll(e, item.id)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Mobile Login Button */}
          <motion.a
         href="/login"
         className="navbar-mobile-login-btn"
          onClick={(e) => {
           e.preventDefault();
           navigate("/login");
      }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
>
        <FiLogIn className="navbar-login-icon" />
       <span>Login</span>
      </motion.a>

          {/* Desktop Login Button */}
          <motion.a
            href="#login"
            className="navbar-login"
            onClick={(e) => {
           e.preventDefault();
           navigate("/login");
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiLogIn className="navbar-login-icon" />
            <span className="navbar-login-text">Login</span>
          </motion.a>

          {/* Mobile Menu Button */}
          {/* <button 
            className="navbar-mobile-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button> */}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div 
        className={`navbar-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
        initial={false}
        animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <nav className="navbar-mobile-nav">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.id}`}
              className="navbar-mobile-link"
              onClick={(e) => handleSmoothScroll(e, item.id)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </motion.div>
    </header>
  );
}

export default Navbar;