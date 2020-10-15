import React from 'react';

export default function NavigationItem({ city }) {
  return (
    <>
      <li className="tower-link">
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
