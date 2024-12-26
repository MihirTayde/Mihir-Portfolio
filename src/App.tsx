import Nav from "./components/Navbar/Nav";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Mailbox from "./components/Mailbox/Mailbox";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="app-container ">
      <Nav></Nav>

      <Hero></Hero>

      <Experience></Experience>
      <Projects></Projects>
      <Mailbox></Mailbox>
      <Footer></Footer>
    </div>
  );
};

export default App;
