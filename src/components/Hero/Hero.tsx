import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./Hero.css";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="hero-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="hero-image-container"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/Logo/cool_image.jpg"
          alt="Mihir Photo"
          className="hero-image"
          aria-label="Photo of Mihir for his portfolio website"
        />
      </motion.div>

      <motion.div
        className="hero-text"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="hero-greeting">
          Hey there!
          <DotLottieReact
            src="/Logo/hand_wave.lottie"
            loop
            autoplay
            className="hero-animation"
          />
          <motion.span
            className="animation-container"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          ></motion.span>
        </h2>

        <Typewriter
          options={{
            strings: [
              "I am Mihir, a passionate web developer looking for exciting opportunity.",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
