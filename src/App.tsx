import Nav from "./components/Navbar/Nav";
import Rough from "./components/Rough";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Carausel from "./components/Carausel/Carausel";


const App = () => {
  return (
    <div className="app-container ">
      <Nav></Nav>
      <Rough></Rough>
      <Hero></Hero>
      <Carausel></Carausel>
  
    </div>
  );
};

export default App;
