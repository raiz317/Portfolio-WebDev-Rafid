import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill"
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

function App() {
  return <div>
    <Header />
    <Home />
    <About />
    <Experience />
    <Skill />
    <Project />
    <Contact />
    <Footer />
  </div>
}

export default App;