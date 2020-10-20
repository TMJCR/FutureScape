import React from 'react';
import '../css/DesignCard.css';

export default function ProjectCard() {
  return (
    <section id="Design">
      <div className="cards">
        <div className="card design-image"></div>
        <div id="design-text" className="card2 design-text">
          <div class="wrapper3t">
            <div class="one2t">
              {' '}
              <div>
                <p class="aboutTitle">DESIGN AT FUTURESCAPE</p>
                <p class="aboutText">We work at all scales and in all sectors. We create transformative cultural, corporate, residential and other spaces that work in synchronicity with their surroundings.</p>
                <div></div>
              </div>
            </div>
            <div class="two2t">
              <div class="architeturalImageBox">
                <img className="architeturalImage" src={require(`../images/Architetural1.jpg`)}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
