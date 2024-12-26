import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Projects.css";

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger when 50% of the component is in view
  });

  const projects = [
    {
      id: 1,
      title: "Music App",
      description:
        "A real-time music app where users can vote for songs to play next. Built using the MERN stack with Firebase for authentication.",
      imageUrl: "/images/music-app.jpg",
      link: "#", // Replace with your project URL
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website to showcase my projects and skills. Built with React and styled with CSS.",
      imageUrl: "/images/portfolio-website.jpg",
      link: "#", // Replace with your project URL
    },
    {
      id: 3,
      title: "E-commerce App",
      description:
        "A fully functional e-commerce platform with product management, cart functionality, and user authentication.",
      imageUrl: "/images/ecommerce-app.jpg",
      link: "#", // Replace with your project URL
    },
  ];

  return (
    <motion.div
      className="projects-container"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="projects-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        My Projects
      </motion.h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: inView ? 1 : 0,
              x: inView ? 0 : -100,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 25,
              delay: 0.2 * project.id, // Stagger the animation for each project
            }}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} className="project-link">
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
