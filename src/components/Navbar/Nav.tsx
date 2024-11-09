import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <img src="Logo/Designer_6.png" alt="Logo" className="logo-image" />
      </div>

      <div className="nav-text-container">
        <div className="nav-text">Work</div>

        <div className="nav-text">About</div>
      </div>

      <div className="nav-text-container">
        <div className="nav-text">Connect</div>
      </div>
    </div>
  );
};

export default Nav;
