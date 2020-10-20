import React from 'react';
import '../css/DesignCard.css';
import ProjectInfo from './ProjectInfo';
export default function ProjectCard() {
  return (
    <section id="Design">
      <div className="cards">
        <div className="card design-image"></div>
        <div id="design-text" className="card design-text">
          <p>Design Card</p>
        </div>
      </div>
    </section>
  );
}
