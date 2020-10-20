import React from 'react';
import '../css/AboutCard.css';
export default function AboutCard() {
  return (
    <section id="About">
      <div className="cards">
        <div id="about-text" className="card about-text">
          <p>About Card</p>
        </div>
        <div className="card about-image"></div>
      </div>
    </section>
  );
}
