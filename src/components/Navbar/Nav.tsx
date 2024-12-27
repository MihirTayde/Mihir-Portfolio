import "./Nav.css";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  return (
    <>
      <motion.nav
        className="nav-container"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="logo-container">
          <img src="Logo/Designer_6.png" alt="Logo" className="logo-image" />
        </div>
      </motion.nav>
    </>
  );
};

export default Nav;
