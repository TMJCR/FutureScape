import React from 'react';
import { smoothScroll } from '../js/utils';

export default function HeaderItem({ navItem }) {
  return (
    <li className="header-nav-item navigation-item">
      <a onClick={() => smoothScroll(`#${navItem}`, 1000)} href={`#${navItem}`}>
        {navItem}
      </a>
    </li>
  );
}
