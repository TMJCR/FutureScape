import React from 'react';
import NavigationItem from './NavigationItem';
import '../css/Navigation.css';

export default function Navigation({ data }) {
  const cities = Object.keys(data);
  return (
    <nav>
      <ul className="navigation-list">
        {cities.map((city, idx) => (
          <NavigationItem key={idx} city={data[city]}></NavigationItem>
        ))}
      </ul>
    </nav>
  );
}
