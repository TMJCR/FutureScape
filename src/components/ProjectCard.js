import React from 'react';
import '../css/ProjectCard.css';
import ProjectInfo from './ProjectInfo';
import VideoPlayer from './VideoPlayer';
export default function ProjectCard({ Project }) {
  const baseUrl = require(`../images/${Project.video}_Moment.jpg`);
  return (
    <section id="Projects" className="Card">
      <div className="ProjectCardContainer">
        <div className="ProjectCardInternal ProjectCardModel">
          <ProjectInfo name={Project.name} country={Project.country} city={Project.city} height={Project.height} floors={Project.floors} Function={Project.function} building={Project.building}></ProjectInfo>
        </div>
        <div id="video" className="ProjectCardInternal ProjectCardVideo" style={{ backgroundImage: { baseUrl } }}>
          <VideoPlayer videoFile={Project.video}></VideoPlayer>
        </div>
      </div>
    </section>
  );
}
