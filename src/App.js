import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import DesignCard from './components/DesignCard';
import Footer from './components/Footer';
import { data } from './js/3DModelData';
import AboutCard from './components/AboutCard';
import Card from './components/Card';
function App() {
  const [project, setProject] = useState(data.Singapore);
  const navList = ['Projects', 'Design', 'About'];
  return (
    <div className="App">
      <div className="grid">
        <Header navList={navList}></Header>
        <Navigation data={data} setProject={setProject}></Navigation>
        <Hero></Hero>
        <ProjectCard Project={project}></ProjectCard>
        <DesignCard></DesignCard>
        <Card
          id="About"
          largeImage="Jenga.jpg"
          cardTitle="DESIGN AT FUTURESCAPE"
          cardText="We work at all scales and in all sectors. We create transformative cultural, corporate, residential and other spaces that work in synchronicity with their surroundings."
          smallImage="Architetural2.jpg"
          layout="right"
        ></Card>

        {/* <AboutCard></AboutCard> */}

        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
