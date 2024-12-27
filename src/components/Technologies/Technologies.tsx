import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Technologies.css";

const Technologies = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger when 50% of the component is in view
  });

  const technologies = [
    "MongoDB",
    "Express.js",
    "React.js",
    "React Native",
    "Node.js",
    "JavaScript",
    "HTML & CSS",
    "Git & GitHub",
    "Firebase",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger the children animations
      },
    },
  };

  const cardVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      className="experience-container"
      ref={ref} // Attach the intersection observer to this container
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // Trigger animation when in view
    >
      <motion.h2
        className="experience-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Technologies I Work With
      </motion.h2>
      <div className="technologies-grid">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="technology-card"
            variants={cardVariants}
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Technologies;
