import React from 'react';
import { smoothScroll } from '../js/utils';

export default function NavigationItem({ city, setProject }) {
  const handleSetProject = () => {
    smoothScroll('#Projects', 1000);
    setProject(city);
  };
  return (
    <>
      <li onClick={handleSetProject} className="tower-link">
        <a id={city.city} className="tower-icon-selector" href="#projects">
          <div className="tower-icon">
            <img src={require(`../images/${city.image}.svg`)} alt=""></img>{' '}
          </div>
          <div className="navigation-item">{city.city}</div>
        </a>
      </li>
    </>
  );
}
