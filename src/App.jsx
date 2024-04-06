import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css';
import Companines from "./components/companines/Companines";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/contact/Contact";
import GetStared from "./components/GetStarted/GetStared";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
    <div>
    <div className="white-gradient"></div>
    <Header/>
    <Hero/>
    </div>
    <Companines/>
    <Residencies/>
    <Value/>
    <Contact/>
    <GetStared/>
    <Footer/>
    </div>  
  );
}

export default App;
