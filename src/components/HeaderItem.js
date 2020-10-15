import React from 'react';

export default function HeaderItem({ navItem }) {
  return (
    <li className="header-nav-item navigation-item">
      <a href={`#${navItem}`}>{navItem}</a>
    </li>
  );
}
