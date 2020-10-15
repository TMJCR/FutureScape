import React from 'react';
import '../css/Projects.css';
import ProjectInfo from '../components/ProjectInfo';
export default function Projects() {
  return (
    <section id="projects">
      <div className="cards">
        <div className="card model">
          <ProjectInfo name="Rainbow Tower" country="U.A.E" city="Dubai" height="500ft" floors="45" Function="Hotel"></ProjectInfo>
        </div>
        <div id="text" className="card text"></div>
      </div>
    </section>
  );
}
