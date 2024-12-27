import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Projects.css";

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 50% of the component is in view
  });

  const projects = [
    {
      id: 1,
      title: "Weather App",
      description:
        "A real-time Weather app. Built using HTML, CSS, Javascript.",
      imageUrl: "/Logo/cloudy-day-3.svg",
      link: "https://mihirtayde.github.io/Weather-App/", // Replace with your project URL
    },
    {
      id: 2,
      title: "TIC TAC TOE",
      description:
        "A classic game of Tic-Tac-Toe against another player or the computer.",
      imageUrl: "/Logo/tic.png",
      link: "https://mihirtayde.github.io/TIC-TAC-TOE/", // Replace with your project URL
    },
    {
      id: 3,
      title: "Rock-Paper-Scissor",
      description:
        "Test your luck against the computer in a fast-paced game of Rock-Paper-Scissors",
      imageUrl: "/Logo/rock-paper-scissor.png",
      link: "https://mihirtayde.github.io/Rock-Paper-Scissor/", // Replace with your project URL
    },
    {
      id: 4,
      title: "Gemini Clone",
      description: "AI ChatBot Clone of Google Gemini",
      imageUrl: "/Logo/gemini.png",
      link: "https://echo-ai-phi.vercel.app/", // Replace with your project URL
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
            <div className="img-container">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="project-image"
              />
            </div>

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
