import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';

import { data } from './js/3DModelData';

function App() {
  const [project, setProject] = useState(data.Singapore);
  const navList = ['Projects', 'Design', 'About Us', 'Future'];
  return (
    <div className="App">
      <div className="grid">
        <Header navList={navList}></Header>
        <Navigation data={data} setProject={setProject}></Navigation>
        <Hero></Hero>
        <Projects Project={project}></Projects>
      </div>
      <h1>CARD</h1>
      <h2>Projects</h2>
      <p>3dModel</p>
      <p>image</p>
      <h2>Design</h2>
      <p>Image</p>
      <p>Info</p>
      <h2>About Us</h2>
      <p>Image</p>
      <p>Info</p>
      <h2>Future</h2>
      <p>Image</p>
      <p>Info</p>
      <h2 id="Design">Footer</h2>
    </div>
  );
}

export default App;
