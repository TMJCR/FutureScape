import React from 'react';
import { smoothScroll } from '../js/utils';

export default function HeaderItem({ navItem }) {
  return (
    <li className="HeaderNavItem HeaderItem">
      <a onClick={() => smoothScroll(`#${navItem}`, 1000)} href={`#${navItem}`}>
        {navItem}
      </a>
    </li>
  );
}
