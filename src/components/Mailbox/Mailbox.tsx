import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./Mailbox.css";
import emailjs from "emailjs-com";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Mailbox: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isVisible, setIsVisible] = useState<boolean>(false); // State to track visibility
  const form = useRef<HTMLFormElement | null>(null); // Reference for the form

  // Handle visibility change
  const handleIntersection: IntersectionObserverCallback = (entries) => {
    const entry = entries[0];
    setIsVisible(entry.isIntersecting); // Update state when component is in view
  };

  useEffect(() => {
    const currentForm = form.current; // Copy the ref value
  
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the component is in view
    });
  
    if (currentForm) {
      observer.observe(currentForm);
    }
  
    return () => {
      if (currentForm) {
        observer.unobserve(currentForm); // Use the local variable here
      }
    };
  }, []);
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      alert("Form reference is not available.");
      return;
    }

    // Use emailjs to send form data
    emailjs
      .sendForm(
        "service_cx876mv", // Replace with your actual service ID
        "template_wkcriup", // Replace with your actual template ID
        form.current,
        "BFRjt1VTFoLRnxuGe" // Replace with your actual public key
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Failed to send the message. Please try again later.");
        }
      );
  };

  return (
    <div className="outerdiv">
      <motion.div
        className="mailbox-container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }} // Animate based on visibility
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="mailbox-title">Contact Me</h2>
        <p className="mailbox-subtitle">Feel free to drop me a message!</p>

        <form ref={form} className="mailbox-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Mailbox;
