import React from 'react';
import '../css/Projects.css';
import ProjectInfo from '../components/ProjectInfo';
import VideoPlayer from '../components/VideoPlayer';
export default function Projects({ Project }) {
  return (
    <section id="Projects">
      <div className="cards">
        <div className="card model">
          <ProjectInfo name={Project.name} country={Project.country} city={Project.city} height={Project.height} floors={Project.floors} Function={Project.function} building={Project.building}></ProjectInfo>
        </div>
        <div id="text" className="card text">
          <VideoPlayer videoFile={Project.video}></VideoPlayer>
        </div>
      </div>
    </section>
  );
}
