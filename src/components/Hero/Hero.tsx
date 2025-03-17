import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./Hero.css";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <motion.div
      className="hero-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }} // Allow repeated animations
    >
      {/* Left Section: Hero Image *
      <motion.div
        className="hero-image-container"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }} // Trigger every time it's in view
        transition={{ duration: 1 }}
      >
        <img
          src="/Logo/cool_image.jpg"
          alt="Mihir Photo"
          className="hero-image"
          aria-label="Photo of Mihir for his portfolio website"
        />
      </motion.div>

      {/* Right Section: Hero Text */}
      <motion.div
        className="hero-text-container"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }} // Trigger every time it's in view
        transition={{ duration: 1 }}
      >
        <span className="hero-greeting">
          Hey there!{" "}
          <DotLottieReact
            src="/Logo/hand_wave.lottie"
            loop
            autoplay
            className="hero-animation"
          />
        </span>
        <h4 className="hero-intro">
          <Typewriter
            options={{
              strings: [
                "I am Mihir, a passionate web developer looking for exciting opportunities!",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h4>

        {/* Social Media Links */}
        <motion.div
          className="hero-socials"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} // Trigger every time it's in view
          transition={{ duration: 1 }}
        >
          <div className="hero-text-container">Connect with me:</div>
          <motion.div
            className="social-icons"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }} // Trigger every time it's in view
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/mihir-tayde-410ba71ba/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-icon-link"
              whileHover={{ scale: 1.2, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </motion.a>
            <motion.a
              href="https://github.com/MihirTayde"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-icon-link"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
