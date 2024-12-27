import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Thanks for scrolling!</p>
      </div>
      <p className="footer-rights">
        &copy; {new Date().getFullYear()} Mihir Tayde. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
