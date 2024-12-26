import { useState } from "react";
import "./Nav.css";
import { motion } from "framer-motion";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
    closed: {
      x: "-100%",
      opacity: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <motion.nav
      className="nav-container"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="logo-container">
        <img src="Logo/Designer_6.png" alt="Logo" className="logo-image" />
      </div>
      <div className="nav-links-container">
        {/* Desktop Navigation */}
        <ul className="nav-links desktop">
          <li className="nav-item">
            <a href="#work" className="nav-link">
              Work
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#connect" className="nav-link">
              Connect
            </a>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <motion.ul
          className={`nav-links mobile ${isMenuOpen ? "open" : ""}`}
          variants={menuVariants}
          initial={false}
          animate={isMenuOpen ? "open" : "closed"}
        >
          <li className="nav-item">
            <a href="#work" className="nav-link">
              Work
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#connect" className="nav-link">
              Connect
            </a>
          </li>
        </motion.ul>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? (
            <span className="close-icon">&#10006;</span>
          ) : (
            <span className="open-icon">&#9776;</span>
          )}
        </button>
      </div>
    </motion.nav>
  );
};

export default Nav;
