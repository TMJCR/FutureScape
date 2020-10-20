import React from 'react';
import { smoothScroll } from '../js/utils';

export default function NavigationItem({ city, setProject }) {
  const handleSetProject = () => {
    smoothScroll('#Projects', 1000);
    setProject(city);
  };
  return (
    <>
      <li onClick={handleSetProject} className="NavigationBuidldingLink">
        <a id={city.city} className="NavigationBuidldingIconSelector" href="#projects">
          <div className="NavigationBuidldingIcon">
            <img src={require(`../images/${city.image}.svg`)} alt=""></img>{' '}
          </div>
          <div className="NavigationItem">{city.city}</div>
        </a>
      </li>
    </>
  );
}
