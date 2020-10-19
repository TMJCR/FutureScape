import React from 'react';
import NavigationItem from './NavigationItem';
import '../css/Navigation.css';

export default function Navigation({ data, setProject }) {
  const cities = Object.keys(data);
  return (
    <nav>
      <ul className="navigation-list">
        {cities.map((city, idx) => (
          <NavigationItem setProject={setProject} key={idx} city={data[city]}></NavigationItem>
        ))}
      </ul>
    </nav>
  );
}
