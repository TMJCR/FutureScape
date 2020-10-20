import React from 'react';
import '../css/ProjectCard.css';
import ProjectInfo from './ProjectInfo';
import VideoPlayer from './VideoPlayer';
export default function ProjectCard({ Project }) {
  return (
    <section id="Projects">
      <div className="cards">
        <div className="card model">
          <ProjectInfo name={Project.name} country={Project.country} city={Project.city} height={Project.height} floors={Project.floors} Function={Project.function} building={Project.building}></ProjectInfo>
        </div>
        <div id="video" className="card video">
          <VideoPlayer videoFile={Project.video}></VideoPlayer>
        </div>
      </div>
    </section>
  );
}
