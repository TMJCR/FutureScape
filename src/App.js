import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import { data } from './js/3DModelData';
import Card from './components/Card';

function App() {
  const [project, setProject] = useState(data.Singapore);
  const navList = ['Projects', 'Design', 'About'];
  return (
    <div className="App">
      <div className="AppContainer">
        <Header navList={navList}></Header>
        <Navigation data={data} setProject={setProject}></Navigation>
        <Hero></Hero>
        <ProjectCard Project={project}></ProjectCard>
        <Card
          id="Design"
          largeImage="Architetural.jpeg"
          cardTitle="DESIGN AT FUTURESCAPE"
          cardText="FutureScape is a global leader in pioneering research and design investigation. Collaborations with corporations, that lead their industries, have advanced the practice’s diversity and knowledge."
          smallImage="Architetural1.jpg"
          layout="left"
        ></Card>
        <Card
          id="About"
          largeImage="Skyscraper.jpg"
          cardTitle="ABOUT US"
          cardText="We work at all scales and in all sectors. We create transformative cultural, corporate, residential and other spaces that work in synchronicity with their surroundings."
          smallImage="Architetural2.jpg"
          layout="right"
        ></Card>

        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
