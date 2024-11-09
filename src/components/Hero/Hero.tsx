import "./Hero.css"


const Hero = () => {
  return (
    <div className="hero-container">
      <div style={{color: "wheat"}}>Hey there i am Mihir a passionate frontend developer</div>
      <div className="hero-image-container">
        <img src="/Logo/Mihir-Photo.png" alt="" className="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
