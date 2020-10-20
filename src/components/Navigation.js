import React from 'react';
import NavigationItem from './NavigationItem';
import '../css/Navigation.css';
import BackToTop from './BackToTop';

export default function Navigation({ data, setProject }) {
  const cities = Object.keys(data);
  return (
    <nav>
      <ul className="NavigationList">
        {cities.map((city, idx) => (
          <NavigationItem setProject={setProject} key={idx} city={data[city]}></NavigationItem>
        ))}
        <li>
          <BackToTop></BackToTop>
        </li>
      </ul>
    </nav>
  );
}
