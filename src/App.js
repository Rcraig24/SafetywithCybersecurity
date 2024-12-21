import React from "react";
import Header from "./components/Header";
import RightColumn from "./components/RightColumn";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Threats from "./components/Threats";

function App() {
  return (
    <div className="App">
      <Header/>

      <div className="main-layout">
        <div className="main-content">
          <About/>
          <Contact/>
        </div>
        <RightColumn />
      </div>
   <Threats/>
      <Footer/>
    </div>
  );
}

export default App;
