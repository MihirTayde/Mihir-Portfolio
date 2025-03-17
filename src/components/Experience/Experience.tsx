import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./Experience.css";

const Experience = () => {
  type CertificateType = string | null;
  const [selectedCertificate, setSelectedCertificate] =
    useState<CertificateType>(null);

  // Create a ref and track visibility using useInView
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useInView(containerRef, { amount: 0.4 }); // Visibility state

  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer Intern",
      company: "Wertone Technology",
      duration: "June 2024 - Nov 2024",
      certificate: "/Logo/internship-letter.jpg",
    },
    {
      id: 2,
      title: "Alibaba Cloud Certification",
      company: "Alibaba Cloud",
      duration: "Feb 2024",
      certificate: "/Logo/Alibaba.jpg",
    },
  ];

  const handleCertificateClick = (certificate: CertificateType) => {
    if (certificate) {
      setSelectedCertificate(certificate);
    }
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className="experience-container" ref={containerRef}>
      <h2 className={`experience-title ${isVisible ? "visible" : ""}`}>
        My Experience & Certificates
      </h2>
      <div className="experience-list">
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            className="experience-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }} // Trigger animation every time it comes into view
            transition={{ duration: 0.5, delay: exp.id * 0.2 }}
          >
            <h3 className="experience-role">{exp.title}</h3>
            <p className="experience-company">{exp.company}</p>
            <p className="experience-duration">{exp.duration}</p>
            <button
              className="certificate-btn"
              onClick={() => handleCertificateClick(exp.certificate)}
              aria-label={`View certificate for ${exp.title}`}
            >
              View Certificate
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal for Certificate */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing on modal click
            >
              <img
                src={selectedCertificate}
                alt="Certificate"
                className="certificate-image"
              />
              <button
                className="close-modal-btn"
                onClick={closeModal}
                aria-label="Close certificate modal"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Experience;
